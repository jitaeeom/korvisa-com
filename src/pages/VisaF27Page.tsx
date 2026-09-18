import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  F27_DISQUALIFY,
  F27_DOCS,
  F27_FAQ,
  F27_MYTHS,
  F27_OFFICIAL_LINKS,
  F27_QUICK_CHECKS,
  F27_SCORE_AXES,
  F27_STEPS,
  F27_TARGETS,
} from "../data/visaF27";

const HERO_IMAGE = "/images/visas/f2.png?v=6";

export function VisaF27Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: F27_FAQ.map((item) => ({
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
              alt="F-2-7 점수제 우수인재 거주비자 안내"
              width={1400}
              height={560}
              className="aspect-[21/9] w-full object-cover sm:aspect-[2.4/1]"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent sm:bg-gradient-to-r sm:from-ink-950 sm:via-ink-950/70 sm:to-transparent" />
          </div>
          <figcaption className="sr-only">F-2-7 점수제 우수인재 안내용 대표 이미지</figcaption>
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
            <Link to="/visa/f2" className="transition hover:text-white">
              F-2
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-white">F-2-7</span>
          </nav>
          <p className="mt-6 inline-flex rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
            F-2-7
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            2026 F-2-7 점수제 우수인재,
            <span className="mt-2 block">점수보다 먼저 신청대상인지 확인하세요</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-300">
            F-2-7은 연령·학력·소득·한국어 능력 등 여러 요소를 평가하는 점수제 거주 체류자격입니다. 그러나
            단순히 일정 점수를 넘는다고 누구나 신청할 수 있는 비자는 아닙니다. 현행 법무부 고시에 따른
            대상자 유형과 기본요건을 먼저 확인해야 합니다.
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4 text-sm leading-relaxed text-orange-100">
            F-2-7은 점수만 계산해서 결정되는 비자가 아닙니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/visa/f2"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              F-2 거주비자 전체 유형 확인하기 →
            </Link>
            <Link
              to="/visa/e7-1"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 전문인력 자격조건 확인하기 →
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8 lg:space-y-16">
        <section className="-mt-2 rounded-3xl border border-sky-400/25 bg-sky-500/[0.07] p-6 shadow-soft sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7을 준비하고 있나요?</h2>
          <ul className="mt-6 space-y-2.5">
            {F27_QUICK_CHECKS.map((item) => (
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
            점수 계산 전에 신청대상과 결격요건을 먼저 확인해야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7 점수제 우수인재 비자란?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            F-2-7은 F-2 거주 체류자격 중 연령·학력·소득·기본소양 등의 평가기준을 활용하는 점수제 우수인재
            체류자격입니다. F-2 전체 유형과 혼동하지 않도록, 이 페이지는 점수제 우수인재(F-2-7)만 다룹니다.
          </p>
          <p className="mt-4">
            <Link
              to="/visa/f2"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              F-2 거주비자 전체 유형 확인하기 →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            F-2-7은 &lsquo;대상자 확인 → 점수평가&rsquo; 순서입니다
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
            <article className="rounded-3xl border border-sky-400/25 bg-sky-500/10 p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">STEP 1</p>
              <h3 className="mt-3 text-lg font-semibold text-white">대상자 유형인지 확인</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-200">
                현행 법무부 고시의 대상자 유형인지 확인합니다.
              </p>
            </article>
            <p className="flex items-center justify-center text-lg font-bold text-sky-200" aria-hidden>
              ↓
            </p>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">STEP 2</p>
              <h3 className="mt-3 text-lg font-semibold text-white">점수평가</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-200">
                연령·학력·소득·기본소양 및 가점·감점 등을 종합적으로 평가합니다.
              </p>
            </article>
          </div>
          <p className="mt-5 rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4 text-sm leading-relaxed text-orange-100">
            점수가 높다는 이유만으로 대상자가 아닌 외국인이 자동으로 F-2-7 신청대상이 되는 것은 아닙니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">누가 F-2-7 신청대상이 될 수 있나요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            법무부고시 제2025-408호 제2조는 거주(F-2) 자목 체류자격의 대상자를 아래 유형으로 정하고 있습니다.
            확인되지 않은 대상유형을 임의로 추가하지 않으며, 세부 요건은 고시 원문을 기준으로 확인해야 합니다.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {F27_TARGETS.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{item.n}</p>
                <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            상장법인 종사자는 KOSPI 또는 KOSDAQ 상장법인 취업·취업확정과 관련 직종요건을 함께 봅니다. 유망산업
            분야 종사자는 첨단기술 분야 종사와 함께, 전년도(발표되지 않은 경우 전전년도) 1인당 국민총소득의
            1.5배 이상 연간소득 요건이 있습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7 점수는 무엇을 평가하나요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            현행 고시 제3조는 [붙임 2] 평가항목의 합산점수 80점 이상을 충족하도록 정하고 있습니다. 평가의
            주요 축은 연령, 학력, 기본소양, 연간소득, 가점, 감점입니다.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {F27_SCORE_AXES.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm leading-relaxed text-ink-400">
            최신 세부 배점은 신청 시점의 현행 고시 및 출입국 기준을 확인해야 합니다. 이 페이지에서는 과거
            블로그의 나이별·학력별·TOPIK 단계별·소득구간별 점수표를 현행 기준으로 옮겨 적지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7에서 소득이 중요한 이유</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            연간소득은 주요 평가항목 중 하나이며, 대상유형에 따라 별도의 소득요건이 적용될 수도 있습니다. 특히
            유망산업 분야 종사자는 현행 고시에 별도의 소득요건이 있습니다.
          </p>
          <p className="mt-4 rounded-2xl border border-white/10 bg-ink-900/40 px-5 py-4 text-sm leading-relaxed text-ink-300">
            고시에서 전년도 또는 필요한 경우 전전년도 1인당 국민총소득을 기준으로 삼는 유형이 있을 수 있습니다.
            매년 변동 가능한 금액을 검증 없이 환산해 단정하지는 않습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">한국어 능력도 점수에 반영될 수 있습니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            TOPIK 및 사회통합프로그램 등 기본소양 평가와 관련된 자료가 점수평가에 사용될 수 있습니다. 최신
            세부 단계별 점수가 신청 시점마다 달라질 수 있으므로, TOPIK 몇 급이 몇 점인지 이 페이지에서 숫자로
            단정하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">학력과 연령도 함께 평가합니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            학력과 연령은 공통 평가항목에 포함됩니다. 다만 석사라고 무조건 가능하거나, 젊다고 무조건 유리해서
            허가되거나, 박사라고 점수와 관계없이 F-2-7이 되는 것은 아닙니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">가점만큼 감점과 결격요건도 중요합니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            가점 요소와 함께 출입국법 위반 및 형사처벌 등의 이력이 심사에 영향을 줄 수 있습니다. 현행 고시
            제4조는 다음을 결격사유로 정하고 있습니다.
          </p>
          <ul className="mt-6 space-y-3">
            {F27_DISQUALIFY.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm leading-relaxed text-ink-200"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7에서 F-2-7으로 변경할 수 있나요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            E-7 전문인력이 F-2-7 대상요건과 점수요건 등을 충족하는 경우 변경을 검토할 수 있습니다. 다만 E-7으로
            몇 년 있으면 자동으로 F-2-7이 되는 것은 아닙니다.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <Link
              to="/visa/e7-1"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 전문인력 자격조건 →
            </Link>
            <Link
              to="/visa/e7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 비자 전체 안내 →
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7으로 변경하면 무엇이 달라질까요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            E-7처럼 특정 고용관계와 직종에 직접 연결되는 취업 체류자격과 F-2 거주자격은 체류·취업 구조가
            다릅니다. 다만 아무 직업이나 제한 없이 가능하거나, 근무처 제한이 완전히 없다고 단정하지는 않습니다.
            구체적인 취업활동 범위는 체류자격 및 관련 제한을 확인해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">배우자와 자녀의 체류자격도 확인하세요</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            점수제 우수인재의 배우자와 미성년 자녀의 체류자격은 주 체류자의 소득 등 요건에 따라 F-2 또는 다른
            체류자격 적용 여부가 달라질 수 있습니다. 본인이 F-2-7이면 가족도 자동으로 F-2-7이 되는 것은
            아닙니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7에서 영주권까지 이어질 수 있나요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            점수제 거주자격으로 일정 기간 체류한 사람에게 별도의 점수제 영주자 유형이 존재합니다. 다만 F-2-7
            3년이 곧 자동 영주권은 아닙니다. 체류기간 외에도 해당 F-5 유형의 소득·품행·기본소양 등 요건을
            별도로 검토해야 합니다.
          </p>
          <p className="mt-4">
            <Link
              to="/visa/f5"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              F-5 영주권 전체 안내 →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7 신청에는 어떤 자료를 준비할까요?</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {F27_DOCS.map((item) => (
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
            모든 신청자에게 동일한 서류가 요구된다고 단정하지 않습니다. 실제 제출자료는 대상유형과 개인 상황에
            따라 달라질 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7 변경은 이렇게 검토합니다</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {F27_STEPS.map((step, i) => (
              <li key={step.n} className="relative rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{step.n}</p>
                <p className="mt-2 text-base font-semibold text-white">{step.title}</p>
                {i < F27_STEPS.length - 1 ? (
                  <p className="mt-3 text-xs text-ink-500" aria-hidden>
                    → 다음 단계
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7 신청에서 자주 오해하는 부분</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {F27_MYTHS.map((item) => (
              <article key={item.myth} className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
                <p className="text-sm font-semibold text-white">&ldquo;{item.myth}&rdquo;</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.fact}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">자주 묻는 질문(FAQ)</h2>
          <div className="mt-6 space-y-3">
            {F27_FAQ.map((item) => (
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
          <h2 className="text-xl font-bold text-white sm:text-2xl">공식 기준 확인</h2>
          <p className="mt-2 text-sm text-ink-400">
            법무부고시 제2025-408호와 출입국 공식 안내를 함께 확인하세요.
          </p>
          <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {F27_OFFICIAL_LINKS.map((item) => (
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
            F-2-7 가능 여부와 점수를 확인하고 싶으신가요?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">
            현재 체류자격, 직업, 학력, 연간소득, 한국어 능력과 가점·감점 요소를 함께 확인해야 실제 F-2-7
            가능성을 검토할 수 있습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              F-2-7 비자 상담하기
            </Link>
            <Link
              to="/visa/f2"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              F-2 전체 안내 보기
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
