import type { VercelRequest, VercelResponse } from "@vercel/node";
import { isAdminRequest } from "../_lib/adminAuth";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "허용되지 않은 요청입니다." });
  }
  return res.status(200).json({ authenticated: isAdminRequest(req) });
}
