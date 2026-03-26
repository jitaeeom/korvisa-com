import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!password || loading) return;
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error || "로그인에 실패했습니다.");
      }
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "로그인에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-ink-950">
      <section className="mx-auto flex min-h-[70vh] max-w-xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full rounded-3xl border border-white/10 bg-ink-900/45 p-6 shadow-soft sm:p-8">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">관리자 로그인</h1>
          <p className="mt-3 text-sm text-ink-400">통계 메뉴는 관리자 비밀번호로만 접근할 수 있습니다.</p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-ink-500">비밀번호</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/40 px-4 py-2.5 text-sm text-white outline-none placeholder:text-ink-500 focus:border-sky-400/40"
                placeholder="관리자 비밀번호 입력"
                required
              />
            </div>
            {error ? <p className="text-sm text-red-300">{error}</p> : null}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "확인 중..." : "로그인"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
