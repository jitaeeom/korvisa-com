import type { VercelRequest, VercelResponse } from "@vercel/node";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { isAdminRequest } from "../_lib/adminAuth";

type MetricRow = Record<string, number>;

function parseMetrics(metricHeaders: Array<{ name?: string }>, rowValues: Array<{ value?: string }>): MetricRow {
  const out: MetricRow = {};
  for (let i = 0; i < metricHeaders.length; i += 1) {
    const key = metricHeaders[i]?.name ?? `m${i}`;
    const raw = rowValues[i]?.value ?? "0";
    const n = Number(raw);
    out[key] = Number.isFinite(n) ? n : 0;
  }
  return out;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "허용되지 않은 요청입니다." });
  }
  if (!isAdminRequest(req)) {
    return res.status(401).json({ error: "관리자 로그인이 필요합니다." });
  }

  const propertyId = process.env.GA4_PROPERTY_ID ?? "";
  const serviceAccountJson = process.env.GA4_SERVICE_ACCOUNT_JSON ?? "";
  if (!propertyId || !serviceAccountJson) {
    return res.status(500).json({ error: "GA4 연동 환경변수가 설정되지 않았습니다." });
  }

  let credentials: { client_email?: string; private_key?: string };
  try {
    const parsed = JSON.parse(serviceAccountJson) as { client_email?: string; private_key?: string };
    credentials = {
      client_email: parsed.client_email,
      private_key: parsed.private_key?.replace(/\\n/g, "\n"),
    };
  } catch {
    return res.status(500).json({ error: "GA4 서비스 계정 키 형식이 올바르지 않습니다." });
  }

  const client = new BetaAnalyticsDataClient({ credentials });
  const property = `properties/${propertyId}`;

  try {
    const [todayReport] = await client.runReport({
      property,
      dateRanges: [{ startDate: "today", endDate: "today" }],
      metrics: [
        { name: "activeUsers" },
        { name: "sessions" },
        { name: "screenPageViews" },
        { name: "averageSessionDuration" },
        { name: "engagedSessions" },
      ],
    });

    const row = todayReport.rows?.[0];
    const metrics = row
      ? parseMetrics(todayReport.metricHeaders ?? [], row.metricValues ?? [])
      : {
          activeUsers: 0,
          sessions: 0,
          screenPageViews: 0,
          averageSessionDuration: 0,
          engagedSessions: 0,
        };

    const [topPagesReport] = await client.runReport({
      property,
      dateRanges: [{ startDate: "today", endDate: "today" }],
      dimensions: [{ name: "pagePath" }],
      metrics: [{ name: "screenPageViews" }],
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: 7,
    });

    const topPages = (topPagesReport.rows ?? []).map((r) => ({
      path: r.dimensionValues?.[0]?.value ?? "/",
      views: Number(r.metricValues?.[0]?.value ?? "0"),
    }));

    return res.status(200).json({
      today: {
        visitors: Math.round(metrics.activeUsers ?? 0),
        sessions: Math.round(metrics.sessions ?? 0),
        pageViews: Math.round(metrics.screenPageViews ?? 0),
        engagedSessions: Math.round(metrics.engagedSessions ?? 0),
        avgSessionSeconds: Number((metrics.averageSessionDuration ?? 0).toFixed(1)),
      },
      topPages,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[admin/stats] GA4 error", error);
    return res.status(502).json({ error: "GA4 통계 조회에 실패했습니다." });
  }
}
