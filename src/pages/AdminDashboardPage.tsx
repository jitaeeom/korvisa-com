import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type AdminStats = {
  today: {
    visitors: number;
    sessions: number;
    pageViews: number;
    engagedSessions: number;
    avgSessionSeconds: number;
  };
  topPages: Array<{ path: string; views: number }>;
  trend7Days: Array<{
    date: string;
    visitors: number;
    sessions: number;
    pageViews: number;
  }>;
  fetchedAt: string;
};

function formatDuration(seconds: number) {
  const total = Math.max(0, Math.round(seconds));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}분 ${s}초`;
}

export function AdminDashboardPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [stats, setStats] = useState<AdminStats | null>(null);

  async function load() {
    setLoading(true);
    setError("");
    try {
      const sessionRes = await fetch("/api/admin/session");
      const sessionData = (await sessionRes.json()) as { authenticated?: boolean };
      if (!sessionData.authenticated) {
        navigate("/admin/login", { replace: true });
        return;
      }

      const res = await fetch("/api/admin/stats");
      const data = (await res.json().catch(() => ({}))) as AdminStats & { error?: string };
      if (!res.ok) {
        throw new Error(data.error || "통계 조회에 실패했습니다.");
      }
      setStats(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "통계 조회에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => undefined);
    navigate("/admin/login", { replace: true });
  }

  const cards = useMemo(() => {
    if (!stats) return [];
    return [
      { label: "오늘 방문자", value: `${stats.today.visitors.toLocaleString()}명` },
      { label: "오늘 세션", value: `${stats.today.sessions.toLocaleString()}회` },
      { label: "오늘 페이지뷰", value: `${stats.today.pageViews.toLocaleString()}회` },
      { label: "평균 체류시간", value: formatDuration(stats.today.avgSessionSeconds) },
    ];
  }, [stats]);

  return (
    <main className="bg-ink-950">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">관리자 통계</h1>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => void load()}
              className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              새로고침
            </button>
            <button
              type="button"
              onClick={logout}
              className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
            >
              로그아웃
            </button>
          </div>
        </div>

        {loading ? <p className="mt-6 text-sm text-ink-400">통계를 불러오는 중입니다...</p> : null}
        {error ? <p className="mt-6 text-sm text-red-300">{error}</p> : null}

        {!loading && !error && stats ? (
          <div className="mt-8 space-y-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((item) => (
                <article key={item.label} className="rounded-2xl border border-white/10 bg-ink-900/45 p-5">
                  <p className="text-xs uppercase tracking-wider text-ink-500">{item.label}</p>
                  <p className="mt-2 text-2xl font-bold text-white">{item.value}</p>
                </article>
              ))}
            </div>

            <section className="rounded-2xl border border-white/10 bg-ink-900/35 p-5">
              <h2 className="text-lg font-bold text-white">오늘 많이 본 페이지</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-200">
                {stats.topPages.length === 0 ? (
                  <li>아직 수집된 페이지뷰가 없습니다.</li>
                ) : (
                  stats.topPages.map((page) => (
                    <li key={`${page.path}-${page.views}`} className="flex items-center justify-between gap-3">
                      <span className="truncate">{page.path || "/"}</span>
                      <span className="shrink-0 text-ink-400">{page.views.toLocaleString()}회</span>
                    </li>
                  ))
                )}
              </ul>
              <p className="mt-4 text-xs text-ink-500">마지막 갱신: {new Date(stats.fetchedAt).toLocaleString("ko-KR")}</p>
            </section>

            <section className="rounded-2xl border border-white/10 bg-ink-900/35 p-5">
              <h2 className="text-lg font-bold text-white">최근 7일 추이</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-left text-sm text-ink-200">
                  <thead className="text-ink-400">
                    <tr>
                      <th className="px-3 py-2 font-semibold">날짜</th>
                      <th className="px-3 py-2 font-semibold">방문자</th>
                      <th className="px-3 py-2 font-semibold">세션</th>
                      <th className="px-3 py-2 font-semibold">페이지뷰</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.trend7Days.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-3 py-3 text-ink-400">
                          아직 최근 7일 데이터가 없습니다.
                        </td>
                      </tr>
                    ) : (
                      stats.trend7Days.map((row) => (
                        <tr key={row.date} className="border-t border-white/10">
                          <td className="px-3 py-2">{row.date}</td>
                          <td className="px-3 py-2">{row.visitors.toLocaleString()}명</td>
                          <td className="px-3 py-2">{row.sessions.toLocaleString()}회</td>
                          <td className="px-3 py-2">{row.pageViews.toLocaleString()}회</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        ) : null}
      </section>
    </main>
  );
}
