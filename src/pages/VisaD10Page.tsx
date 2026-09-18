import { useEffect } from "react";
import { Link } from "react-router-dom";
import { JobServiceCta } from "../components/JobServiceCta";
import {
  D10_CASES,
  D10_COMPARE,
  D10_DOCS,
  D10_E7_CHECKS,
  D10_FAQ,
  D10_MYTHS,
  D10_OFFICIAL_LINKS,
  D10_QUICK_CHECKS,
  D10_STEPS,
} from "../data/visaD10";

const HERO_IMAGE = "/images/visas/e7.png?v=6";

export function VisaD10Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: D10_FAQ.map((item) => ({
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
              alt="D-10 구직비자 안내"
              width={1400}
              height={560}
              className="aspect-[21/9] w-full object-cover sm:aspect-[2.4/1]"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent sm:bg-gradient-to-r sm:from-ink-950 sm:via-ink-950/70 sm:to-transparent" />
          </div>
          <figcaption className="sr-only">D-10 구직비자 안내용 대표 이미지</figcaption>
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
            <span className="text-white">D-10</span>
          </nav>
          <p className="mt-6 inline-flex rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
            D-10
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            2026 D-10 구직비자,
            <span className="mt-2 block">한국에서 취업을 준비한다면 먼저 확인하세요</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-300">
            D-10은 한국에서 전문분야 취업을 준비하는 외국인이 구직활동을 할 수 있도록 하는 체류자격입니다.
            특히 국내 대학 졸업 후 취업을 준비하는 외국인은 최근 제도개선으로 구직기간과 인턴활동 기회가
            확대되었습니다.
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4 text-sm leading-relaxed text-orange-100">
            D-10은 취업비자가 아닙니다. 구직활동과 정식 취업활동은 구분해야 합니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/visa/d10-to-e7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              D-10에서 E-7 취업비자 변경조건 확인하기 →
            </Link>
            <Link
              to="/visa/e7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 비자 전체 안내 보기
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8 lg:space-y-16">
        <section className="-mt-2 rounded-3xl border border-sky-400/25 bg-sky-500/[0.07] p-6 shadow-soft sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10 구직비자를 준비하고 있나요?</h2>
          <ul className="mt-6 space-y-2.5">
            {D10_QUICK_CHECKS.map((item) => (
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
            D-10 가능 여부와 필요한 서류는 현재 체류자격, 학력, 구직분야와 개인별 상황에 따라 달라질 수
            있습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10 구직비자는 어떤 비자인가요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            D-10은 한국에서 구직활동 등을 하기 위한 체류자격이며, 전문분야 취업을 준비하는 외국인에게
            활용되는 구직 체류자격입니다. 한국에서 자유롭게 일할 수 있는 비자라고 보기 어렵습니다.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <article className="rounded-2xl border border-white/10 bg-black/25 p-5 text-center">
              <p className="text-xs font-semibold tracking-wider text-sky-300">D-10</p>
              <p className="mt-2 font-semibold text-white">구직활동</p>
            </article>
            <p className="text-center text-lg font-bold text-orange-200" aria-hidden>
              ≠
            </p>
            <article className="rounded-2xl border border-white/10 bg-black/25 p-5 text-center">
              <p className="text-xs font-semibold tracking-wider text-sky-300">E-7 등</p>
              <p className="mt-2 font-semibold text-white">정식 취업활동</p>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">이런 경우 D-10을 검토합니다</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {D10_CASES.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{item.n}</p>
                <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            D-10이 모든 외국인에게 자동으로 허용되는 일반적인 취업준비 비자는 아닙니다. 현재 체류자격과
            신청요건을 함께 확인해야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            한국 대학 졸업자는 D-10을 어떻게 활용할 수 있을까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            국내 대학 졸업 외국인은 졸업 후 한국에서 취업처를 찾는 과정에서 D-10을 활용할 수 있습니다. 최근
            제도개선으로 국내 대학 졸업 유학생의 안정적인 구직과 취업 연계를 지원하기 위해 구직기간과
            인턴기간이 확대되었습니다.
          </p>
          <p className="mt-4 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm leading-relaxed text-ink-300">
            국내 대학 졸업만으로 D-10이 자동 허가되는 것은 아닙니다. 개별 체류상태 및 신청요건을 확인해야
            합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            국내 대학 졸업자의 D-10 구직기간이 확대되었습니다
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <p className="text-xs font-semibold text-ink-400">기존</p>
              <p className="mt-3 text-lg font-semibold text-white">최대 2년</p>
              <p className="mt-1 text-sm text-ink-300">1회 6개월씩 연장</p>
            </article>
            <article className="rounded-3xl border border-sky-400/25 bg-sky-500/10 p-6">
              <p className="text-xs font-semibold text-sky-300">개선</p>
              <p className="mt-3 text-lg font-semibold text-white">최대 3년</p>
              <p className="mt-1 text-sm text-ink-200">1회 1년씩 연장</p>
            </article>
          </div>
          <p className="mt-5 leading-relaxed text-ink-200">
            법무부는 국내 대학 졸업 유학생의 안정적인 구직활동과 취업 연계를 지원하기 위해 D-10 구직기간을
            확대했습니다.
          </p>
          <p className="mt-4 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm leading-relaxed text-ink-400">
            위 구직기간 확대는 법무부가 발표한 국내 대학 졸업 유학생 대상 제도개선 내용입니다. 모든 D-10
            세부유형에 무조건 최대 3년이 적용된다고 보기 어렵습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10으로 인턴활동도 가능한가요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            D-10 구직자의 경우 개별 자격과 허용범위에 따라 구직과 연계된 인턴활동을 할 수 있는 제도가
            있습니다.
          </p>
          <p className="mt-4 text-sm font-semibold text-sky-200">국내 대학 졸업 유학생 관련 최신 제도개선</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-black/25 p-5">
              <p className="text-xs font-semibold text-ink-400">기존</p>
              <p className="mt-2 text-sm font-semibold text-white">총 인턴기간 최대 1년</p>
              <p className="mt-1 text-sm text-ink-300">동일 기업 최대 6개월</p>
            </article>
            <article className="rounded-2xl border border-sky-400/20 bg-sky-500/10 p-5">
              <p className="text-xs font-semibold text-sky-300">개선</p>
              <p className="mt-2 text-sm font-semibold text-white">총 인턴기간 제한 해제</p>
              <p className="mt-1 text-sm text-ink-200">동일 기업 최대 1년</p>
            </article>
          </div>
          <p className="mt-5 rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4 text-sm font-semibold text-orange-100">
            D-10 인턴 = 일반적인 정식 취업은 아닙니다.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            모든 D-10 체류자가 모든 회사에서 자유롭게 1년 동안 일할 수 있는 것은 아닙니다. 인턴 가능 여부는
            D-10 세부유형, 활동분야 및 허용요건을 개별적으로 확인해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10 구직비자와 E-7 취업비자는 다릅니다</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {D10_COMPARE.map((item) => (
              <article key={item.side} className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">{item.side}</p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-ink-400">목적</dt>
                    <dd className="mt-1 font-semibold text-white">{item.purpose}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-400">상태</dt>
                    <dd className="mt-1 font-semibold text-white">{item.status}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-400">핵심</dt>
                    <dd className="mt-1 font-semibold text-white">{item.core}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-5 rounded-2xl border border-orange-400/20 bg-orange-500/10 px-5 py-4 text-sm leading-relaxed text-orange-100">
            취업할 회사를 찾았다면 D-10 체류자격만으로 정식 E-7 업무를 시작하는 것이 아니라, 적절한 취업
            체류자격으로 변경해야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            취업할 회사를 찾았다면 다음 단계는 E-7 검토입니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            D-10 구직자가 취업처를 찾으면 실제 담당업무, E-7 직종, 학력·경력, 회사요건, 근로계약, 임금요건
            등을 확인해야 합니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {D10_E7_CHECKS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-ink-200"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2">
            <Link
              to="/visa/d10-to-e7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              D-10에서 E-7 취업비자 변경조건 확인하기 →
            </Link>
            <Link
              to="/visa/e7-1"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 전문인력 자격조건 확인하기 →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">아직 취업할 회사를 찾지 못했다면?</h2>
          <div className="mt-6">
            <JobServiceCta
              heading="한국에서 취업할 회사를 찾고 있나요?"
              description="D-10 체류 중 취업을 준비하고 있다면 희망 직무와 경력을 등록해 두고 채용 가능 기업을 찾아볼 수 있습니다."
            />
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10 체류기간 연장은 어떻게 준비할까요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            단순히 체류기간이 남아 있다는 이유만으로 자동 연장되는 것은 아닙니다. 연장 시에는 개인의 D-10
            유형과 상황에 따라 실제 구직활동 및 체류요건 관련 자료가 요구될 수 있습니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            국내 대학 졸업 유학생의 최신 제도개선에서는 1회 연장 단위가 1년으로 확대되었습니다. 모든
            신청자에게 동일한 서류가 반드시 요구된다고 단정하지는 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10 신청에는 어떤 자료를 준비할까요?</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {D10_DOCS.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-3 text-sm text-ink-200"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            실제 제출서류는 신청자의 현재 체류자격과 D-10 세부유형에 따라 달라질 수 있습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10은 점수도 확인해야 하나요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            D-10 구직 체류자격에는 점수제 요건을 검토하는 유형이 있습니다. 평가 시 학력, 경력, 국내
            유학경력, 한국어 능력 등 여러 요소가 관련될 수 있습니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            일부 대상자는 점수제 적용과 관련한 별도 특례 또는 면제요건이 있을 수 있으므로 개별 확인이
            필요합니다. 모든 D-10 신청자가 동일한 점수제를 적용받는다고 보기 어렵습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            D-10이라고 모든 취업활동이 허용되는 것은 아닙니다
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {D10_MYTHS.map((item) => (
              <article key={item.myth} className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
                <p className="text-sm font-semibold text-white">&ldquo;{item.myth}&rdquo;</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.fact}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">졸업 후 취업까지의 일반적인 흐름</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {D10_STEPS.map((step, i) => (
              <li key={step.n} className="relative rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{step.n}</p>
                <p className="mt-2 text-base font-semibold text-white">{step.title}</p>
                {i < D10_STEPS.length - 1 ? (
                  <p className="mt-3 text-xs text-ink-500" aria-hidden>
                    → 다음 단계
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">자주 묻는 질문(FAQ)</h2>
          <div className="mt-6 space-y-3">
            {D10_FAQ.map((item) => (
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
            위 FAQ는 일반 안내입니다. 허가 가능성을 보장하지 않으며, 최종 판단은 공식 안내와 전문가 상담을
            통해 확인하시기 바랍니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-black/25 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">공식자료 확인</h2>
          <p className="mt-2 text-sm text-ink-400">법무부·출입국외국인정책본부의 공식자료를 함께 확인하세요.</p>
          <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {D10_OFFICIAL_LINKS.map((item) => (
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

        <section className="rounded-3xl border border-white/10 bg-ink-900/30 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            D-10 신청·연장 또는 취업비자 변경을 준비하고 있나요?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">
            현재 체류자격과 학력, 구직상황과 향후 취업계획에 따라 D-10 신청·연장 또는 E-7 변경에 필요한
            검토사항이 달라질 수 있습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              D-10 비자 상담하기
            </Link>
            <Link
              to="/visa/d10-to-e7"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              D-10 → E-7 변경 안내 보기
            </Link>
          </div>
        </section>

        <aside className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-relaxed text-ink-400">
          본 페이지는 <strong className="text-ink-300">일반 안내</strong>이며 법률자문·행정 유권해석을
          대체하지 않습니다. 최종 신청·심사 기준은 출입국·법무부 공식 안내와{" "}
          <strong className="text-ink-300">전문가 상담</strong>을 따르세요.
        </aside>
      </div>
    </article>
  );
}
