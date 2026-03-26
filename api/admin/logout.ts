import type { VercelRequest, VercelResponse } from "@vercel/node";
import { clearAdminSession } from "../_lib/adminAuth";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "허용되지 않은 요청입니다." });
  }
  clearAdminSession(res);
  return res.status(200).json({ ok: true });
}
