import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const CONSULT_TO = "admin@korvisa.com";

export function ConsultRequestPage() {
  const navigate = useNavigate();
  const [consultName, setConsultName] = useState("");
  const [consultTitle, setConsultTitle] = useState("");
  const [consultBody, setConsultBody] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = consultTitle.trim() || "상담 요청";
    const author = consultName.trim();
    const body =
      `이름(작성자): ${author || "-"}\n\n` + consultBody.trim();
    const params = new URLSearchParams({
      subject,
      body,
    });
    return `mailto:${CONSULT_TO}?${params.toString()}`;
  }, [consultBody, consultName, consultTitle]);

  const canSend = consultBody.trim().length > 0;

  return (
    <main className="bg-ink-950">
      <section className="scroll-mt-24 border-b border-white/10 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            상담 문의
          </h1>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!canSend) return;
                window.location.href = mailtoHref;
              }}
              className="space-y-5"
            >
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  이름(작성자)
                </label>
                <input
                  value={consultName}
                  onChange={(e) => setConsultName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/40 px-4 py-2.5 text-sm text-white outline-none placeholder:text-ink-500 focus:border-sky-400/40"
                  placeholder="예: 홍길동"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  제목
                </label>
                <input
                  value={consultTitle}
                  onChange={(e) => setConsultTitle(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/40 px-4 py-2.5 text-sm text-white outline-none placeholder:text-ink-500 focus:border-sky-400/40"
                  placeholder="예: E-7 전문인력 상담 문의"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  내용
                </label>
                <textarea
                  value={consultBody}
                  onChange={(e) => setConsultBody(e.target.value)}
                  rows={10}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-ink-950/40 px-4 py-2.5 text-sm text-white outline-none placeholder:text-ink-500 focus:border-sky-400/40"
                  placeholder="상담하고 싶은 내용을 입력해 주세요."
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  onClick={() => navigate("/")}
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={!canSend}
                  className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  메일로 보내기
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

