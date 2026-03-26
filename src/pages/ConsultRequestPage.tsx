import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ConsultRequestPage() {
  const navigate = useNavigate();
  const [consultName, setConsultName] = useState("");
  const [consultTitle, setConsultTitle] = useState("");
  const [consultBody, setConsultBody] = useState("");
  const [sendState, setSendState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [sendError, setSendError] = useState("");

  const canSend = consultBody.trim().length > 0;

  return (
    <main className="bg-ink-950">
      <section className="scroll-mt-24 border-b border-white/10 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            상담 문의
          </h1>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
            {sendState === "ok" ? (
              <div className="space-y-6 py-4 text-center">
                <p className="text-lg font-semibold text-white">문의가 전송되었습니다.</p>
                <p className="text-sm leading-relaxed text-ink-300">
                  확인 후 가능한 빨리 연락드리겠습니다.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
                    onClick={() => navigate("/")}
                  >
                    메인으로
                  </button>
                </div>
              </div>
            ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!canSend || sendState === "sending") return;
                setSendError("");
                setSendState("sending");
                try {
                  const r = await fetch("/api/consult", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: consultName.trim(),
                      title: consultTitle.trim(),
                      body: consultBody.trim(),
                    }),
                  });
                  const data = (await r.json().catch(() => ({}))) as { error?: string };
                  if (!r.ok) {
                    throw new Error(data.error || "전송에 실패했습니다.");
                  }
                  setSendState("ok");
                } catch (err) {
                  setSendState("err");
                  setSendError(err instanceof Error ? err.message : "전송에 실패했습니다.");
                }
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

              {sendState === "err" && sendError ? (
                <p className="text-sm text-red-300">{sendError}</p>
              ) : null}

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
                  disabled={!canSend || sendState === "sending"}
                  className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {sendState === "sending" ? "보내는 중…" : "메일로 보내기"}
                </button>
              </div>
            </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

