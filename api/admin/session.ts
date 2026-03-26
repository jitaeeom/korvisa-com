import type { VercelRequest, VercelResponse } from "@vercel/node";

function readCookie(req: VercelRequest, name: string) {
  const header = req.headers.cookie;
  const raw = Array.isArray(header) ? header.join(";") : header ?? "";
  const parts = raw.split(";").map((v) => v.trim());
  for (const part of parts) {
    if (!part) continue;
    const i = part.indexOf("=");
    if (i < 0) continue;
    if (part.slice(0, i).trim() !== name) continue;
    return part.slice(i + 1).trim();
  }
  return "";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "허용되지 않은 요청입니다." });
  }
  const expected = process.env.ADMIN_SESSION_TOKEN ?? "";
  const actual = readCookie(req, "korvisa_admin_session");
  return res.status(200).json({ authenticated: Boolean(expected) && actual === expected });
}
