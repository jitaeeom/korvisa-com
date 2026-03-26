import type { VercelRequest, VercelResponse } from "@vercel/node";

const SESSION_COOKIE = "korvisa_admin_session";

function readCookie(req: VercelRequest, name: string): string {
  const raw = req.headers.cookie ?? "";
  const parts = raw.split(";").map((v) => v.trim());
  for (const part of parts) {
    if (!part) continue;
    const idx = part.indexOf("=");
    if (idx < 0) continue;
    const key = decodeURIComponent(part.slice(0, idx).trim());
    if (key !== name) continue;
    return decodeURIComponent(part.slice(idx + 1).trim());
  }
  return "";
}

export function getAdminSessionToken(): string {
  return process.env.ADMIN_SESSION_TOKEN ?? "";
}

export function isAdminRequest(req: VercelRequest): boolean {
  const expected = getAdminSessionToken();
  if (!expected) return false;
  const actual = readCookie(req, SESSION_COOKIE);
  return actual.length > 0 && actual === expected;
}

export function setAdminSession(res: VercelResponse, token: string) {
  const isProd = process.env.NODE_ENV === "production";
  res.setHeader(
    "Set-Cookie",
    `${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=28800${isProd ? "; Secure" : ""}`,
  );
}

export function clearAdminSession(res: VercelResponse) {
  const isProd = process.env.NODE_ENV === "production";
  res.setHeader(
    "Set-Cookie",
    `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${isProd ? "; Secure" : ""}`,
  );
}
