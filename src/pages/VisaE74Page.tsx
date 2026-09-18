import { useEffect } from "react";
import { Link } from "react-router-dom";
import { JobServiceCta } from "../components/JobServiceCta";
import {
  E74_APPLICANT_DOCS,
  E74_BASICS_BEFORE_SCORE,
  E74_COMPANY_DOCS,
  E74_FAQ,
  E74_OFFICIAL_LINKS,
  E74_QUICK_CHECKS,
  E74_RECOMMEND_CHECKS,
  E74_RESTRICTIONS,
  E74_SCORE_FACTORS,
  E74_STEPS,
  E74_TARGET_STATUSES,
} from "../data/visaE74";

const HERO_IMAGE = "/images/visas/e9.jpg?v=6";

export function VisaE74Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: E74_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }).replace(/<\//g, "<\\/");

  return (
    <article className="min-h-screen bg-ink-950 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      <header className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/90 to-ink-950" />
        <figure className="relative mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-lift">
            <img
              src={HERO_IMAGE}
              alt="E-7-4 숙련기능인력 비자 안내"
              width={1400}
              height={560}
              className="aspect-[21/9] w-full object-cover sm:aspect-[2.4/1]"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent sm:bg-gradient-to-r sm:from-ink-950 sm:via-ink-950/70 sm:to-transparent" />
          </div>
          <figcaption className="sr-only">E-7-4 숙련기능인력 안내용 대표 이미지</figcaption>
        </figure>
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10 lg:px-8">
          <nav aria-label="breadcrumb" className="text-sm text-ink-400">
            <Link to="/" className="transition hover:text-white">
              홈
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <Link to="/#visas" className="transition hover:text-white">
              주요 비자
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <Link to="/visa/e7" className="transition hover:text-white">
              E-7
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-white">E-7-4</span>
          </nav>
          <p className="mt-6 inline-flex rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
            K-point E74 · 숙련기능인력
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            2026 E-7-4 숙련기능인력 비자,
            <span className="mt-2 block">내가 변경할 수 있는지 먼저 확인하세요</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-300">
            E-9·E-10·H-2 체류자가 장기간 쌓은 경력과 숙련도, 한국어 능력 등을 평가하여 장기취업이 가능한
            E-7-4 체류자격으로 변경하는 제도입니다.
          </p>
          <p className="mt-4">
            <Link
              to="/visa/e7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 비자 전체 안내 보기
            </Link>
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8 lg:space-y-16">
        <section className="-mt-2 rounded-3xl border border-sky-400/25 bg-sky-500/[0.07] p-6 shadow-soft sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4 신청 전 빠른 확인</h2>
          <p className="mt-2 text-sm text-ink-400">점수 계산보다 먼저, 아래 기본 항목을 짚어 보세요.</p>
          <ul className="mt-6 space-y-2.5">
            {E74_QUICK_CHECKS.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-3 text-sm leading-relaxed text-ink-100"
              >
                <span className="mt-0.5 shrink-0 text-sky-200" aria-hidden>
                  □
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-300">
            위 항목 중 하나라도 불확실하다면 점수 계산 전에 기본 신청요건부터 확인하는 것이 좋습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4 숙련기능인력 비자란?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            법무부 현재 공식 안내 기준, 최근 10년간 국내에서 비전문취업(E-9), 선원취업(E-10), 방문취업(H-2)
            자격으로 4년 이상 체류한 등록외국인이 숙련도·연령·경력·한국어 능력 등의 점수요건을 충족할 경우
            E-7-4로 변경할 수 있는 제도입니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            2026년 연간 E-7-4 발급규모는 33,000명입니다. 2023년부터 확대된 K-point E74 체계와 연결되는
            숙련기능인력 제도로, E-9 등에서 쌓은 현장 숙련을 장기 취업 체류로 이어 보려는 경우에 주로
            검토됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4 기본 신청대상</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {E74_TARGET_STATUSES.map((item) => (
              <article
                key={item.code}
                className="rounded-3xl border border-white/10 bg-ink-900/40 px-5 py-6 text-center"
              >
                <p className="text-2xl font-bold tracking-tight text-white">{item.code}</p>
                <p className="mt-2 text-sm text-ink-300">{item.name}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 leading-relaxed text-ink-200">
            최근 10년 이내 해당 자격으로 총 4년 이상 체류한 등록외국인이 기본 대상입니다. 단순히 한국에
            4년 살았다는 의미가 아니라, 대상 체류자격과 정상적인 취업·체류경력을 확인해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            점수가 높아도 기본요건을 먼저 확인해야 합니다
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-200">
            E-7-4는 단순히 점수표의 합계만 계산해서 신청 가능 여부를 판단하는 제도가 아닙니다. 각 항목의
            적용기준과 예외는 신청 시점의 최신 법무부 기준을 확인해야 합니다.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {E74_BASICS_BEFORE_SCORE.map((item, i) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-wider text-sky-300">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4 점수는 어떻게 평가할까?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            숙련도, 연령, 경력, 한국어 능력, 근속 및 추천 등 여러 요소가 신청 판단에 영향을 줄 수 있습니다.
            항목별 배점과 가점 기준은 개정될 수 있으므로, 이 페이지에서는 과거 점수표 숫자를 그대로 옮기지
            않습니다.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {E74_SCORE_FACTORS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-ink-100"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            총점 충족 여부는 신청 시점의 공식 안내와 본인 증빙을 기준으로 확인하는 것이 안전합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4에서 회사 추천이 중요한 이유</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            현재 근무기업의 추천은 중요한 신청요소입니다. 추천서 한 장만 제출하면 끝나는 구조가 아니라,
            실제 근무관계와 고용이 서류와 맞는지가 함께 살펴집니다. 기업 담당자라면 “우리 회사가 E-7-4
            외국인을 몇 명까지 고용할 수 있는가?”도 같은 맥락에서 확인하게 됩니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E74_RECOMMEND_CHECKS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-ink-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            회사가 E-7-4 외국인을 몇 명까지 고용할 수 있을까?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            제조업, 건설업, 농축어업 등은 업종 및 국민 고용인원 등에 따라 고용 허용인원이 달라질 수
            있습니다. 업종별 전체 표를 여기에 복사하지 않으며, 회사의 업종·국민 고용인원·현재 외국인
            고용 현황을 기준으로 확인하는 것이 맞습니다.
          </p>
          <aside className="mt-6 rounded-3xl border border-sky-400/30 bg-sky-500/[0.08] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">2026 제도개선</p>
            <h3 className="mt-2 text-lg font-semibold text-white">농축어업 고용허용 한도</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              2026년 6월 제도개선 사항으로, 농축어업 분야의 숙련기능인력 고용허용 한도가 기존 국민
              고용인원의 30%에서 최대 50%까지 확대되었습니다. 국민 고용인원 4인 이하의 영세 농축어업
              사업장은 외국인 고용허용 비율과 관계없이 E-7-4 숙련기능인력을 2명까지 고용할 수 있도록
              개선되었습니다.
            </p>
            <p className="mt-4 text-xs text-ink-400">이 내용은 2026. 6. 1. 법무부 보도자료 기준입니다.</p>
          </aside>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">불가피하게 사업장을 변경했다면?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            2026년 6월 제도개선으로, 사업장 휴·폐업, 폭행·임금체불 등 부당한 처우처럼 외국인 근로자에게
            책임이 없는 사유로 사업장을 변경한 경우, E-7-4 변경 및 체류기간 연장 시 이전 사업장의
            근무기간까지 인정할 수 있도록 근속기간 산정 특례가 신설되었습니다.
          </p>
          <p className="mt-5 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm leading-relaxed text-ink-300">
            모든 자진 이직이 합산되는 것은 아닙니다. 불가피한 사유에 해당하는지는 개별 사실관계와
            증빙자료를 확인해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4 신청이 제한될 수 있는 경우</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            점수요건을 충족하더라도 아래와 같은 사유가 있으면 신청이 제한될 수 있습니다. 세부 적용 여부는
            개별 사안별 확인이 필요합니다.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {E74_RESTRICTIONS.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4 변경 시 어떤 서류를 준비할까?</h2>
          <p className="mt-3 text-sm text-ink-400">
            실제 제출서류는 신청자의 체류경력, 업종, 회사 및 적용되는 추천트랙 등에 따라 달라질 수
            있습니다.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">외국인 측</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E74_APPLICANT_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">회사 측</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E74_COMPANY_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-9·E-10·H-2에서 E-7-4 변경까지</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E74_STEPS.map((step, i) => (
              <li
                key={step.n}
                className="relative rounded-3xl border border-white/10 bg-ink-900/40 p-5"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{step.n}</p>
                <p className="mt-2 text-base font-semibold text-white">{step.title}</p>
                {i < E74_STEPS.length - 1 ? (
                  <p className="mt-3 text-xs text-ink-500" aria-hidden>
                    → 다음 단계
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            개별 신청 유형에 따라 실제 절차와 준비사항은 달라질 수 있습니다.
          </p>
        </section>

        <aside className="rounded-3xl border border-white/15 bg-ink-900/30 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-white">인구감소지역에서 근무하고 있나요?</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-300">
            일반 E-7-4와 별도로 지역특화형 숙련기능인력 E-7-4R 제도가 운영되고 있습니다. E-7-4R은 일반
            E-7-4와 체류경력, 지역요건, 추천 및 취업·거주 조건 등이 다르므로 별도로 검토해야 합니다.
          </p>
        </aside>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">자주 묻는 질문(FAQ)</h2>
          <div className="mt-6 space-y-3">
            {E74_FAQ.map((item) => (
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

        <section className="rounded-3xl border border-white/10 bg-black/25 p-6 sm:p-8">
          <h2 className="text-base font-semibold text-white">공식 자료 확인</h2>
          <p className="mt-2 text-sm text-ink-400">법무부 출입국·외국인정책본부 자료를 함께 확인하세요.</p>
          <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {E74_OFFICIAL_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-sky-200 transition hover:border-sky-400/50 hover:bg-white/10"
                >
                  {item.label} ↗
                </a>
                <p className="mt-2 text-xs text-ink-500">{item.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <JobServiceCta
          heading="E-7-4 취업·채용을 준비하고 있나요?"
          description="비자요건 확인과 함께 실제 취업·채용 기회도 찾아보세요. 외국인은 구직 정보를 등록하고, 기업은 필요한 외국인 인력 조건을 등록할 수 있습니다."
        />

        <section className="rounded-3xl border border-white/10 bg-ink-900/30 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7-4 변경 가능 여부, 점수 계산 전에 확인하세요
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">
            체류·근무경력, 소득과 한국어 능력, 회사 추천 및 고용조건을 함께 검토해야 보다 정확하게 신청
            가능성을 판단할 수 있습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              E-7-4 비자 상담하기
            </Link>
            <Link
              to="/visa/e7"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              E-7 비자 전체 안내 보기
            </Link>
          </div>
        </section>

        <aside className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-relaxed text-ink-400">
          본 페이지는 <strong className="text-ink-300">일반 안내</strong>이며 법률자문·행정 유권해석을
          대체하지 않습니다. 최종 신청·심사 기준은 출입국·법무부 등{" "}
          <strong className="text-ink-300">공식 안내와 전문가 상담</strong>을 따르세요.
        </aside>
      </div>
    </article>
  );
}
