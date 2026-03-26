import type { VercelRequest, VercelResponse } from "@vercel/node";

function json(res: VercelResponse, status: number, body: Record<string, unknown>) {
  res.status(status).setHeader("Content-Type", "application/json; charset=utf-8");
  res.json(body);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return json(res, 405, { error: "허용되지 않은 요청입니다." });
  }

  const adminPassword = process.env.ADMIN_PASSWORD ?? "";
  const sessionToken = process.env.ADMIN_SESSION_TOKEN ?? "";
  if (!adminPassword || !sessionToken) {
    return json(res, 500, { error: "관리자 인증 설정이 비어 있습니다." });
  }

  let payload: unknown = req.body;
  if (typeof req.body === "string") {
    try {
      payload = JSON.parse(req.body) as unknown;
    } catch {
      return json(res, 400, { error: "요청 형식이 올바르지 않습니다." });
    }
  }
  const p = typeof payload === "object" && payload !== null ? (payload as Record<string, unknown>) : {};
  const password = typeof p.password === "string" ? p.password : "";

  if (!password || password !== adminPassword) {
    return json(res, 401, { error: "비밀번호가 올바르지 않습니다." });
  }

  const isProd = process.env.NODE_ENV === "production";
  res.setHeader(
    "Set-Cookie",
    `korvisa_admin_session=${encodeURIComponent(sessionToken)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=28800${isProd ? "; Secure" : ""}`,
  );
  return json(res, 200, { ok: true });
}
