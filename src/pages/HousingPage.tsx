import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HOUSING_FAQ } from "../data/housingFaq";

export function HousingPage() {
  useEffect(() => {
    document.title = "외국인 주거·임대차 안내(공인중개사) | Korvisa.com";
  }, []);
  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOUSING_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }).replace(/<\//g, "<\\/");

  return (
    <main className="border-b border-white/10 bg-ink-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
          Licensed real estate broker
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          외국인 주거·임대차 안내
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-300">
          비자·체류와 함께 <strong className="font-semibold text-ink-100">집 구하기</strong>까지 한국 생활을
          연결해 드립니다. 강남제일행정사공인중개사사무소는{" "}
          <strong className="font-semibold text-ink-100">공인중개사 자격</strong>을 보유하고 있어, 외국인
          분들의 전·월세 등 임대차 중개·안내에도 도움을 드릴 수 있습니다.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <article className="rounded-3xl border border-white/10 bg-ink-900/45 p-6 shadow-soft sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">어떤 점을 도와드릴 수 있나요?</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-200">
            <li>희망 지역·예산에 맞는 매물 탐색 및 임대차 중개 절차 안내</li>
            <li>임대차 계약 전 확인할 만한 사항(보증금·관리비·계약 조건 등)을 쉽게 정리</li>
            <li>비자·체류 일정과 맞춰 주거 이전·등록 등 행정 흐름을 함께 조율하는 상담</li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-ink-500">
            구체적인 매물·계약은 지역·시점·당사자에 따라 달라집니다. 상담 시 희망 지역, 예산, 입주 희망일,
            비자 종류를 알려 주시면 맞춤으로 안내드리겠습니다.
          </p>
        </article>

        <article className="rounded-3xl border border-sky-500/20 bg-ink-900/35 p-6 shadow-soft sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">비자 안내와 함께</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-200">
            체류 자격과 직장·학교 위치에 따라 적합한 주거 형태가 달라질 수 있습니다. 비자·고용 관련 문의는
            기존 비자 안내와{" "}
            <Link to="/consult" className="font-medium text-sky-300 hover:underline">
              상담 문의
            </Link>
            를 이용해 주세요.
          </p>
        </article>

        <section className="rounded-3xl border border-white/10 bg-ink-900/30 p-6 shadow-soft sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">자주 묻는 질문(FAQ)</h2>
          <p className="mt-2 text-sm text-ink-400">외국인 한국 부동산 취득·임대차 관련 일반 안내입니다.</p>
          <div className="mt-6 space-y-3">
            {HOUSING_FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-ink-900/30 px-5 py-3"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-white">
                  <span className="inline-flex items-center gap-2">
                    <span
                      aria-hidden
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-xs text-accent-light"
                    >
                      Q
                    </span>
                    {item.q}
                  </span>
                </summary>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-300">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink-500">
            위 FAQ는 일반 안내입니다. 최종 판단은 공식 안내와 전문가 상담을 통해 확인하시기 바랍니다.
          </p>
        </section>

        <aside className="rounded-2xl border border-white/10 bg-black/30 p-5 text-xs leading-relaxed text-ink-500">
          본 페이지는 <strong className="text-ink-400">일반 안내</strong>이며, 개별 매물·계약·분쟁에 대한
          법률자문을 대체하지 않습니다. 중개·계약은 관련 법령 및 실제 조건에 따라 진행됩니다.
        </aside>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/consult"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
          >
            주거·임대차 상담 문의
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            ← 메인으로
          </Link>
        </div>
      </section>
    </main>
  );
}
