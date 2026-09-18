import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  F27F5_CAREER,
  F27F5_COMPARE,
  F27F5_CONDUCT,
  F27F5_DOCS,
  F27F5_FAQ,
  F27F5_HARD_CASES,
  F27F5_INCOME_DOCS,
  F27F5_MYTHS,
  F27F5_OFFICIAL_LINKS,
  F27F5_PATH,
  F27F5_QUICK_CHECKS,
  F27F5_STEPS,
} from "../data/visaF27ToF5";

const HERO_IMAGE = "/images/visas/f5.png?v=6";

export function VisaF27ToF5Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: F27F5_FAQ.map((item) => ({
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
              alt="F-2-7에서 F-5 영주권 변경 안내"
              width={1400}
              height={560}
              className="aspect-[21/9] w-full object-cover sm:aspect-[2.4/1]"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent sm:bg-gradient-to-r sm:from-ink-950 sm:via-ink-950/70 sm:to-transparent" />
          </div>
          <figcaption className="sr-only">F-2-7에서 F-5 영주권 변경 안내용 대표 이미지</figcaption>
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
            <Link to="/visa/f2-7" className="transition hover:text-white">
              F-2-7
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-white">F-5</span>
          </nav>
          <p className="mt-6 inline-flex rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
            F-2-7 → F-5
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            F-2-7에서 F-5 영주권,
            <span className="mt-2 block">3년 체류했다고 자동으로 되는 것은 아닙니다</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-300">
            점수제 거주(F-2) 자격으로 대한민국에서 3년 이상 체류한 사람은 점수제 영주자 경로를 검토할 수
            있습니다. 하지만 3년은 체류기간 요건입니다. 실제 영주자격 변경에서는 생계유지능력, 품행, 기본소양
            등 다른 요건도 함께 확인해야 합니다.
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4 text-sm leading-relaxed text-orange-100">
            F-2-7 3년 = 자동 영주권이 아닙니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/visa/f2-7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              F-2-7 점수제 우수인재 자격조건 확인하기 →
            </Link>
            <Link
              to="/visa/f5"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              F-5 영주권 전체 안내 →
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8 lg:space-y-16">
        <section className="-mt-2 rounded-3xl border border-sky-400/25 bg-sky-500/[0.07] p-6 shadow-soft sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7에서 영주권을 준비하고 있나요?</h2>
          <ul className="mt-6 space-y-2.5">
            {F27F5_QUICK_CHECKS.map((item) => (
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
            3년 체류기간만 보지 말고 신청 시점의 영주 공통요건과 세부요건을 함께 확인해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7에서 F-5로 어떻게 변경하나요?</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {F27F5_PATH.map((step, i) => (
              <li key={step.n} className="rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{step.n}</p>
                <p className="mt-2 text-base font-semibold text-white">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.body}</p>
                {i < F27F5_PATH.length - 1 ? (
                  <p className="mt-3 text-xs text-ink-500" aria-hidden>
                    ↓ 다음 단계
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-5 rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4 text-sm leading-relaxed text-orange-100">
            3년 경과 자체가 허가를 보장하는 것은 아닙니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            F-2-7이라면 &lsquo;5년&rsquo;이 아니라 &lsquo;3년&rsquo;인가요?
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {F27F5_COMPARE.map((item) => (
              <article
                key={item.side}
                className={`rounded-3xl border p-6 sm:p-8 ${
                  item.side === "점수제 영주 경로"
                    ? "border-sky-400/25 bg-sky-500/10"
                    : "border-white/10 bg-ink-900/40"
                }`}
              >
                <p className="text-xs font-semibold tracking-wider text-sky-300">{item.side}</p>
                <p className="mt-3 text-2xl font-bold text-white">{item.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-200">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm leading-relaxed text-ink-300">
            모든 F-2 체류자가 3년 기준을 적용받는 것은 아닙니다. F-2-7 등 점수제 거주자격인지 확인하는 것이
            중요합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            &lsquo;3년 이상 체류&rsquo;가 가장 먼저 확인할 조건입니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            점수제 거주(F-2) 자격으로 대한민국에서 3년 이상 체류한 사람이 점수제 영주자 경로의 대상이 될 수
            있습니다. 다만 다른 체류자격 기간까지 무조건 합산되거나, F-2-7 승인 전 E-7 기간이 모두 포함되거나,
            해외 체류기간도 모두 국내 체류기간으로 계산된다고 단정하지는 않습니다.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            체류기간 계산에 변수가 있는 경우 출입국 기록과 실제 체류이력을 확인해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            F-5 심사에서는 소득과 생계유지능력을 확인합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            영주자격 심사에는 생계유지능력이 중요한 공통요건입니다. 소득 관련 자료의 예는 다음과 같습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {F27F5_INCOME_DOCS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-3 text-sm text-ink-200"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm leading-relaxed text-ink-400">
            신청 시점의 현행 영주 세부심사기준을 확인해야 합니다. 이 페이지에서는 검증되지 않은 연봉 금액이나
            GNI 배수를 임의로 적지 않습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">범죄·출입국법 위반 이력도 확인합니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            영주자격은 품행단정 요건을 심사합니다. 다음 요소가 검토될 수 있습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {F27F5_CONDUCT.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-ink-200"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            위반 이력이 있으면 무조건 영주권 불가라고 단정하지는 않습니다. 개별 이력과 신청 시점 기준을 확인해야
            합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">한국어와 사회통합프로그램도 중요합니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            출입국·외국인정책본부 공식 체류 길잡이는 점수제 영주자의 경우 사회통합프로그램 5단계 이상 이수 시
            기본소양 요건을 충족하는 것으로 안내하고 있습니다.
          </p>
          <article className="mt-6 rounded-3xl border border-sky-400/25 bg-sky-500/10 p-6">
            <p className="text-xs font-semibold tracking-wider text-sky-300">기본소양</p>
            <p className="mt-2 text-lg font-semibold text-white">사회통합프로그램 5단계 이상 이수</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-200">기본소양 요건 충족 경로</p>
          </article>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            TOPIK 특정 급수가 무조건 동일한 대체기준이라고 단정하지는 않습니다. 최신 기준은 신청 시점의 공식
            안내를 확인해야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            F-2-7에서 받은 점수만으로 F-5가 결정되지는 않습니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            F-2-7 취득 시 사용한 연령·학력·소득·기본소양 등의 점수평가와 F-5 영주자격 변경 심사는 동일한 심사가
            아닙니다. F-2-7의 80점 이상 기준을 그대로 F-5 합격점수라고 볼 수 없습니다.
          </p>
          <p className="mt-4">
            <Link
              to="/visa/f2-7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              F-2-7 점수제 우수인재 자격조건 확인하기 →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">3년을 채웠어도 다른 요건을 확인해야 합니다</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {F27F5_HARD_CASES.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            위 항목이 있다고 해서 무조건 불허라고 단정하지는 않습니다. 신청 시점의 요건을 개별적으로 확인해야
            합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7 전문인력이 영주권까지 가는 경로</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {F27F5_CAREER.map((step, i) => (
              <li key={step.n} className="rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{step.n}</p>
                <p className="mt-2 text-base font-semibold text-white">{step.title}</p>
                {i < F27F5_CAREER.length - 1 ? (
                  <p className="mt-3 text-xs text-ink-500" aria-hidden>
                    ↓ 다음 단계
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            각 단계가 자동으로 이어진다고 보기 어렵습니다. 단계마다 대상요건과 심사기준을 별도로 확인해야 합니다.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <Link
              to="/visa/e7-1"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 전문인력 비자 →
            </Link>
            <Link
              to="/visa/f2-7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              F-2-7 점수제 우수인재 →
            </Link>
            <Link
              to="/visa/f5"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              F-5 영주권 전체 안내 →
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-5 영주자격을 취득하면 무엇이 달라질까요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            영주(F-5)는 일반적인 취업 체류자격과 달리 체류자격의 구분에 따른 활동 제한을 받지 않는 영주자격입니다.
            다만 대한민국 국적을 취득하는 것은 아니며, 모든 법적 권리가 국민과 완전히 동일하거나 영주자격이 절대
            취소되지 않는다고 단정할 수는 없습니다.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            영주증 갱신 등 영주자에게도 별도 체류관리 의무가 존재할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7에서 F-5 변경 시 무엇을 준비할까요?</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {F27F5_DOCS.map((item) => (
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
            신청자의 상황에 따라 추가서류가 달라질 수 있습니다. 모든 신청자에게 위 서류가 반드시 동일하게
            적용된다고 단정하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7에서 F-5 변경은 이렇게 검토합니다</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {F27F5_STEPS.map((step, i) => (
              <li key={step.n} className="relative rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{step.n}</p>
                <p className="mt-2 text-base font-semibold text-white">{step.title}</p>
                {i < F27F5_STEPS.length - 1 ? (
                  <p className="mt-3 text-xs text-ink-500" aria-hidden>
                    → 다음 단계
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">F-2-7 영주권 신청에서 자주 오해하는 부분</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {F27F5_MYTHS.map((item) => (
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
            {F27F5_FAQ.map((item) => (
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
            출입국관리법 시행령과 출입국·외국인정책본부 공식 안내를 함께 확인하세요.
          </p>
          <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {F27F5_OFFICIAL_LINKS.map((item) => (
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
            F-2-7에서 영주권 신청이 가능한지 확인하고 싶으신가요?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">
            F-2-7 체류기간뿐 아니라 소득, 품행, 기본소양과 실제 체류이력을 함께 확인해야 F-5 변경 가능성을
            검토할 수 있습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              F-5 영주권 상담하기
            </Link>
            <Link
              to="/visa/f2-7"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              F-2-7 안내 보기
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
