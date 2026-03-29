/**
 * Post-build prerender for SEO: writes static HTML per route so crawlers
 * receive real <title>, meta, and visible content (not an empty #root).
 */
import http from "node:http";
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");

const PORT = 4173;
const BASE = `http://127.0.0.1:${PORT}`;
/** Canonical / absolute URLs in saved HTML must use the live site origin, not preview localhost. */
const PUBLIC_ORIGIN = (process.env.PRERENDER_ORIGIN || "https://korvisa.com").replace(/\/$/, "");

const ROUTES = [
  "/",
  "/consult",
  "/housing",
  "/representative",
  "/visa/e7",
  "/visa/e9",
  "/visa/f2",
  "/visa/f5",
  "/visa/d8",
  "/visa/f6",
];

function distOutForRoute(route) {
  if (route === "/") return path.join(dist, "index.html");
  return path.join(dist, route.replace(/^\//, ""), "index.html");
}

function waitForHttpOk(url, maxAttempts = 90) {
  return new Promise((resolve, reject) => {
    let n = 0;
    const tryOnce = () => {
      const req = http.get(url, (res) => {
        res.resume();
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 400) {
          resolve();
          return;
        }
        schedule();
      });
      req.on("error", () => schedule());
      function schedule() {
        n += 1;
        if (n >= maxAttempts) {
          reject(new Error(`Server not ready: ${url}`));
          return;
        }
        setTimeout(tryOnce, 500);
      }
    };
    tryOnce();
  });
}

async function main() {
  const viteCli = path.join(root, "node_modules", "vite", "bin", "vite.js");
  const child = spawn(process.execPath, [viteCli, "preview", "--host", "127.0.0.1", "--port", String(PORT)], {
    cwd: root,
    stdio: ["ignore", "pipe", "pipe"],
    shell: false,
    env: { ...process.env, BROWSER: "none" },
  });
  child.stderr?.on("data", (d) => process.stderr.write(d));
  child.stdout?.on("data", (d) => process.stderr.write(d));

  try {
    await waitForHttpOk(BASE);

    const { chromium } = await import("playwright");
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();

    for (const route of ROUTES) {
      const page = await context.newPage();
      await page.route("**/www.google-analytics.com/**", (r) => r.abort());
      await page.route("**/www.googletagmanager.com/**", (r) => r.abort());
      await page.route("**/google-analytics.com/**", (r) => r.abort());
      await page.route("**/googletagmanager.com/**", (r) => r.abort());

      await page.goto(`${BASE}${route}`, { waitUntil: "domcontentloaded", timeout: 120000 });
      await page.waitForSelector("#root", { timeout: 30000 });
      await page.waitForSelector("#root h1", { timeout: 30000 });
      await new Promise((r) => setTimeout(r, 800));

      let html = await page.content();
      html = html.replaceAll(BASE, PUBLIC_ORIGIN);
      const out = distOutForRoute(route);
      await mkdir(path.dirname(out), { recursive: true });
      await writeFile(out, html, "utf8");
      process.stdout.write(`Prerendered ${route} -> ${path.relative(root, out)}\n`);
      await page.close();
    }

    await browser.close();
  } finally {
    child.kill("SIGTERM");
    await new Promise((r) => setTimeout(r, 500));
    try {
      child.kill("SIGKILL");
    } catch {
      /* ignore */
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
