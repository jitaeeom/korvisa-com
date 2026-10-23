import { useRef } from "react";
import { trackContact } from "../lib/contactAnalytics";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const KAKAO_OPENCHAT_URL = "https://open.kakao.com/o/sR2KYbXb";
const KAKAO_ICON_URL = "https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg";

export function ConsultRequestPage() {
  const navigate = useNavigate();
  const [consultName, setConsultName] = useState("");
  const [consultEmail, setConsultEmail] = useState("");
  const [consultPhone, setConsultPhone] = useState("");
  const [consultTitle, setConsultTitle] = useState("");
  const [consultBody, setConsultBody] = useState("");
  const [sendState, setSendState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [sendError, setSendError] = useState("");

  const started = useRef(false);
  const canSend = consultBody.trim().length > 0 && (consultEmail.trim().length > 0 || consultPhone.trim().length > 0);

  return (
    <main className="bg-ink-950">
      <section className="scroll-mt-24 border-b border-white/10 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            상담 문의
          </h1>

          <p className="mt-4 text-ink-200">이메일 또는 전화번호 중 하나와 상담 내용을 남겨주세요. 이메일 없이도 신청할 수 있습니다.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="rounded-xl bg-white px-4 py-3 font-semibold text-ink-950" href="tel:02-568-7192">전화 상담 02-568-7192</a>
            <a className="rounded-xl bg-[#FEE500] px-4 py-3 font-semibold text-black" href={KAKAO_OPENCHAT_URL} target="_blank" rel="noopener noreferrer">카카오톡 상담</a>
          </div>
          <p className="mt-3 text-sm text-ink-300">전화 문의: 평일 10:00–18:00 (KST). 상담 진행 방식과 비용은 문의 시 확인해 주세요.</p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
            {sendState === "ok" ? (
              <div className="space-y-6 py-4 text-center">
                <p role="status" className="text-lg font-semibold text-white">문의 발송 요청이 접수되었습니다.</p>
                <p className="text-sm leading-relaxed text-ink-300">
                  수신된 문의를 확인한 뒤 남겨주신 연락처로 답변드립니다.
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
              onFocus={() => { if (!started.current) { started.current = true; trackContact("consult_start"); } }}
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
                      email: consultEmail.trim(),
                      phone: consultPhone.trim(),
                      title: consultTitle.trim(),
                      body: consultBody.trim(),
                    }),
                  });
                  const data = (await r.json().catch(() => ({}))) as { error?: string };
                  if (!r.ok) {
                    throw new Error(data.error || "전송에 실패했습니다.");
                  }
                  if (!(data as { ok?: boolean; id?: string }).ok || !(data as { id?: string }).id) throw new Error("전송 결과를 확인하지 못했습니다. 전화 또는 카카오톡으로 문의해 주세요.");
                  trackContact("generate_lead");
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
                  이름(선택)
                </label>
                <input
                  aria-label="이름"
                  value={consultName}
                  onChange={(e) => setConsultName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/40 px-4 py-2.5 text-sm text-white outline-none placeholder:text-ink-500 focus:border-sky-400/40"
                  placeholder="예: 홍길동"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  이메일(이메일 또는 연락처 중 하나 필수)
                </label>
                <input
                  type="email"
                  aria-label="이메일"
                  value={consultEmail}
                  onChange={(e) => setConsultEmail(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/40 px-4 py-2.5 text-sm text-white outline-none placeholder:text-ink-500 focus:border-sky-400/40"
                  placeholder="예: name@example.com"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  연락처(이메일 또는 연락처 중 하나 필수)
                </label>
                <input
                  type="tel"
                  aria-label="연락처"
                  value={consultPhone}
                  onChange={(e) => setConsultPhone(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/40 px-4 py-2.5 text-sm text-white outline-none placeholder:text-ink-500 focus:border-sky-400/40"
                  placeholder="예: 010-1234-5678"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  제목(선택)
                </label>
                <input
                  aria-label="제목"
                  value={consultTitle}
                  onChange={(e) => setConsultTitle(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/40 px-4 py-2.5 text-sm text-white outline-none placeholder:text-ink-500 focus:border-sky-400/40"
                  placeholder="예: E-7 전문인력 상담 문의"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  내용(필수)
                </label>
                <textarea
                  aria-label="상담 내용"
                  value={consultBody}
                  onChange={(e) => setConsultBody(e.target.value)}
                  required
                  rows={6}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-ink-950/40 px-4 py-2.5 text-sm text-white outline-none placeholder:text-ink-500 focus:border-sky-400/40"
                  placeholder="상담하고 싶은 내용을 입력해 주세요."
                />
              </div>

              {sendState === "err" && sendError ? (
                <p role="alert" className="text-sm text-red-300">{sendError} 입력 내용은 유지됩니다. 위 전화 또는 카카오톡으로도 문의할 수 있습니다.</p>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a
                  href={KAKAO_OPENCHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="카카오톡 오픈채팅 상담 열기"
                  title="카카오톡 상담"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#FEE500]/40 bg-[#FEE500] p-1.5 transition hover:brightness-95"
                >
                  <img src={KAKAO_ICON_URL} alt="" className="h-full w-full rounded-lg object-cover" loading="lazy" decoding="async" />
                </a>
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
                  {sendState === "sending" ? "보내는 중…" : "상담 신청하기"}
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

