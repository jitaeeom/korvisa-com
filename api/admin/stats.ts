import type { VercelRequest, VercelResponse } from "@vercel/node";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

type MetricRow = Record<string, number>;

function readCookie(req: VercelRequest, name: string) {
  const header = req.headers.cookie;
  const raw = Array.isArray(header) ? header.join(";") : header ?? "";
  const parts = raw.split(";").map((v) => v.trim());
  for (const part of parts) {
    if (!part) continue;
    const i = part.indexOf("=");
    if (i < 0) continue;
    if (part.slice(0, i).trim() !== name) continue;
    const rawValue = part.slice(i + 1).trim();
    try {
      return decodeURIComponent(rawValue);
    } catch {
      return rawValue;
    }
  }
  return "";
}

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
  const expected = process.env.ADMIN_SESSION_TOKEN ?? "";
  const actual = readCookie(req, "korvisa_admin_session");
  if (!expected || actual !== expected) {
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

    const [trendReport] = await client.runReport({
      property,
      dateRanges: [{ startDate: "6daysAgo", endDate: "today" }],
      dimensions: [{ name: "date" }],
      metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "screenPageViews" }],
      orderBys: [{ dimension: { dimensionName: "date" }, desc: false }],
    });

    const trend7Days = (trendReport.rows ?? []).map((r) => {
      const dateRaw = r.dimensionValues?.[0]?.value ?? "";
      const y = dateRaw.slice(0, 4);
      const m = dateRaw.slice(4, 6);
      const d = dateRaw.slice(6, 8);
      return {
        date: y && m && d ? `${y}-${m}-${d}` : dateRaw,
        visitors: Number(r.metricValues?.[0]?.value ?? "0"),
        sessions: Number(r.metricValues?.[1]?.value ?? "0"),
        pageViews: Number(r.metricValues?.[2]?.value ?? "0"),
      };
    });

    return res.status(200).json({
      today: {
        visitors: Math.round(metrics.activeUsers ?? 0),
        sessions: Math.round(metrics.sessions ?? 0),
        pageViews: Math.round(metrics.screenPageViews ?? 0),
        engagedSessions: Math.round(metrics.engagedSessions ?? 0),
        avgSessionSeconds: Number((metrics.averageSessionDuration ?? 0).toFixed(1)),
      },
      topPages,
      trend7Days,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[admin/stats] GA4 error", error);
    return res.status(502).json({ error: "GA4 통계 조회에 실패했습니다." });
  }
}
