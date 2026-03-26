import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const MAX_NAME = 120;
const MAX_EMAIL = 320;
const MAX_PHONE = 50;
const MAX_TITLE = 200;
const MAX_BODY = 20000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(res: VercelResponse, status: number, body: Record<string, unknown>) {
  res.status(status).setHeader("Content-Type", "application/json; charset=utf-8");
  res.json(body);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.status(204).setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.end();
  }

  if (req.method !== "POST") {
    return json(res, 405, { error: "허용되지 않은 요청입니다." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.CONSULT_TO_EMAIL ?? "admin@korvisa.com";

  if (!apiKey || !from) {
    return json(res, 500, { error: "메일 발송 설정이 완료되지 않았습니다. 관리자에게 문의해 주세요." });
  }

  let payload: unknown = req.body;
  if (payload === undefined || payload === null) {
    return json(res, 400, { error: "요청 본문이 비어 있습니다." });
  }
  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload) as unknown;
    } catch {
      return json(res, 400, { error: "요청 형식이 올바르지 않습니다." });
    }
  }

  if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
    return json(res, 400, { error: "요청 형식이 올바르지 않습니다." });
  }

  const p = payload as Record<string, unknown>;
  const name = typeof p.name === "string" ? p.name.trim() : "";
  const email = typeof p.email === "string" ? p.email.trim() : "";
  const phone = typeof p.phone === "string" ? p.phone.trim() : "";
  const title = typeof p.title === "string" ? p.title.trim() : "";
  const bodyText = typeof p.body === "string" ? p.body.trim() : "";

  if (bodyText.length === 0) {
    return json(res, 400, { error: "내용을 입력해 주세요." });
  }
  if (email.length === 0) {
    return json(res, 400, { error: "이메일을 입력해 주세요." });
  }
  if (
    name.length > MAX_NAME ||
    email.length > MAX_EMAIL ||
    phone.length > MAX_PHONE ||
    title.length > MAX_TITLE ||
    bodyText.length > MAX_BODY
  ) {
    return json(res, 400, { error: "입력 길이가 너무 깁니다." });
  }
  if (!EMAIL_RE.test(email)) {
    return json(res, 400, { error: "이메일 형식이 올바르지 않습니다." });
  }

  const subject = title.length > 0 ? `[상담 문의] ${title}` : "[상담 문의] (제목 없음)";
  const text =
    `이름(작성자): ${name || "(없음)"}\n` +
    `이메일: ${email || "(없음)"}\n` +
    `연락처: ${phone || "(없음)"}\n` +
    `제목: ${title || "(없음)"}\n\n` +
    `${bodyText}\n`;

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email || undefined,
    subject,
    text,
  });

  if (error) {
    console.error("[consult] Resend error:", error);
    return json(res, 502, { error: "메일 전송에 실패했습니다. 잠시 후 다시 시도해 주세요." });
  }

  return json(res, 200, { ok: true, id: data?.id });
}
