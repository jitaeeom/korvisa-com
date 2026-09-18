/**
 * Post-build static prerender (no browser): renderToString + pageMeta head tags.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");

function escapeAttr(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function stripSeoTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<meta[^>]*name=["']description["'][^>]*>/gi, "")
    .replace(/<meta[^>]*name=["']robots["'][^>]*>/gi, "")
    .replace(/<meta[^>]*property=["']og:title["'][^>]*>/gi, "")
    .replace(/<meta[^>]*property=["']og:description["'][^>]*>/gi, "")
    .replace(/<meta[^>]*property=["']og:url["'][^>]*>/gi, "")
    .replace(/<meta[^>]*property=["']og:type["'][^>]*>/gi, "")
    .replace(/<meta[^>]*property=["']og:site_name["'][^>]*>/gi, "");
}

function applyHead(html, meta) {
  const stripped = stripSeoTags(html);
  const block = [
    `<title>${escapeAttr(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="robots" content="${escapeAttr(meta.robots)}" />`,
    `<link rel="canonical" href="${escapeAttr(meta.canonical)}" />`,
    `<meta property="og:title" content="${escapeAttr(meta.ogTitle)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.ogDescription)}" />`,
    `<meta property="og:url" content="${escapeAttr(meta.ogUrl)}" />`,
    `<meta property="og:type" content="${escapeAttr(meta.ogType)}" />`,
    `<meta property="og:site_name" content="${escapeAttr(meta.ogSiteName)}" />`,
  ].join("\n    ");

  if (!stripped.includes("</head>")) {
    throw new Error("Template is missing </head>");
  }
  return stripped.replace("</head>", `    ${block}\n  </head>`);
}

function insertAppHtml(html, appHtml) {
  if (!/<div id="root"><\/div>/.test(html)) {
    throw new Error('Template is missing <div id="root"></div>');
  }
  return html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

function distOutForRoute(route) {
  if (route === "/") return path.join(dist, "index.html");
  return path.join(dist, route.replace(/^\//, ""), "index.html");
}

async function main() {
  const template = await readFile(path.join(dist, "index.html"), "utf8");
  await writeFile(path.join(dist, "spa-shell.html"), template, "utf8");

  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "error",
  });

  try {
    const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
    const { getPageMeta, PRERENDER_PATHS } = await vite.ssrLoadModule("/src/seo/pageMeta.ts");

    for (const route of PRERENDER_PATHS) {
      const appHtml = render(route);
      if (!appHtml || !appHtml.includes("<h1")) {
        throw new Error(`Prerender produced no H1 for ${route}`);
      }
      const meta = getPageMeta(route);
      let html = applyHead(template, meta);
      html = insertAppHtml(html, appHtml);

      const out = distOutForRoute(route);
      await mkdir(path.dirname(out), { recursive: true });
      await writeFile(out, html, "utf8");
      process.stdout.write(`Prerendered ${route} -> ${path.relative(root, out)}\n`);
    }
  } finally {
    await vite.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
