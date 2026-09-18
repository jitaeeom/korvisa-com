import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  E7CHEF_ALLOWED_EMPLOYERS,
  E7CHEF_APPLICANT_DOCS,
  E7CHEF_CHINESE_REQS,
  E7CHEF_COMPANY_DOCS,
  E7CHEF_CONTRACT_ITEMS,
  E7CHEF_EXPERIENCE_ITEMS,
  E7CHEF_FAQ,
  E7CHEF_GENERAL_REQS,
  E7CHEF_HEADCOUNT_FACTORS,
  E7CHEF_MYTHS,
  E7CHEF_OFFICIAL_LINKS,
  E7CHEF_QUAL_PATHS,
  E7CHEF_QUICK_CHECKS,
  E7CHEF_STEPS,
  E7CHEF_STEPS_REVIEW,
} from "../data/visaE7Chef";

const HERO_IMAGE = "/images/visas/e7.png?v=6";
const WAGE_NOTICE_URL = "https://www.moj.go.kr/bbs/immigration/211/601892/artclView.do";

export function VisaE7ChefPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: E7CHEF_FAQ.map((item) => ({
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
              alt="E-7 요리사 비자 안내"
              width={1400}
              height={560}
              className="aspect-[21/9] w-full object-cover sm:aspect-[2.4/1]"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent sm:bg-gradient-to-r sm:from-ink-950 sm:via-ink-950/70 sm:to-transparent" />
          </div>
          <figcaption className="sr-only">외국인 요리사 E-7 비자 안내용 대표 이미지</figcaption>
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
            <span className="text-white">요리사</span>
          </nav>
          <p className="mt-6 inline-flex rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
            주방장 및 조리사 · E-7-2
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            외국인 요리사 E-7 비자,
            <span className="mt-2 block">요리사 경력만 확인해서는 안 됩니다</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-300">
            E-7-2 주방장 및 조리사 비자는 외국인의 조리경력뿐 아니라 초청하는 음식점의 업종, 사업장 규모,
            납세실적, 내국인 고용현황 등을 함께 심사합니다.
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4 text-sm leading-relaxed text-orange-100">
            요리사의 자격 + 식당의 초청요건을 함께 충족해야 합니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/visa/e7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 비자 전체 안내 보기
            </Link>
            <Link
              to="/visa/e7-workplace-change"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 근무처변경·이직 절차 확인하기 →
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8 lg:space-y-16">
        <section className="-mt-2 rounded-3xl border border-sky-400/25 bg-sky-500/[0.07] p-6 shadow-soft sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">외국인 요리사를 초청하려고 하나요?</h2>
          <ul className="mt-6 space-y-2.5">
            {E7CHEF_QUICK_CHECKS.map((item) => (
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
            외국인 개인의 경력만 충족한다고 E-7 요리사 비자가 허가되는 것은 아닙니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7 요리사 비자는 어떤 체류자격인가요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            주방장 및 조리사는 E-7-2 준전문인력에 해당합니다. 호텔·음식점·선박 등에서 조리계획을 세우거나
            조리인력을 감독하는 주방장, 또는 직접 식재료를 준비하고 음식을 조리하는 전문 조리인력을 대상으로
            합니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            직업분류 코드는 자료의 기준시점에 따라 기존 코드와 개편 코드가 함께 확인될 수 있습니다. 현재 신청
            시 적용되는 세부 직종코드는 최신 출입국 기준을 확인해야 합니다.
          </p>
          <p className="mt-5">
            <Link
              to="/visa/e7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 비자 전체 안내 보기 →
            </Link>
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">요리사와 식당, 두 가지를 함께 봅니다</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            {E7CHEF_STEPS_REVIEW.map((step, i) => (
              <div key={step.n} className="contents">
                <article className="rounded-3xl border border-sky-400/20 bg-ink-950/50 p-6">
                  <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{step.n}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                    {step.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
                {i === 0 ? (
                  <p
                    className="flex items-center justify-center py-1 text-center text-lg text-sky-300 lg:px-1"
                    aria-hidden
                  >
                    ↓
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            어떤 경력을 가진 요리사를 초청할 수 있나요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            외국인 요리사의 자격은 하나의 경로만 있는 것이 아닙니다. 최근 공개 관리기준에서 확인되는 대표적인
            구조를 중심으로 검토합니다.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {E7CHEF_QUAL_PATHS.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            세부 자격요건은 자격증의 등급, 교육기간, 음식 종류, 국가별 자격체계에 따라 달라질 수 있습니다.
            자격증만 있으면 무조건 가능하거나, 무자격이면 10년이면 모든 음식이 가능하다고 보기 어렵습니다.
            특히 10년 경력 경로는 모든 중식·일식·양식에 일반 적용되는 기준이 아닙니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            경력증명서는 실제 경력을 입증할 수 있어야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            단순히 회사 이름과 근무기간만 적힌 문서가 아니라, 실제 조리경력을 확인할 수 있어야 합니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {E7CHEF_EXPERIENCE_ITEMS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-4 text-center text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed text-ink-200">
            해외 발급 자격증, 경력증명, 교육이수증 등에는 아포스티유 또는 재외공관 확인 등이 요구될 수
            있습니다. 위조·허위 경력자료는 비자심사에 중대한 문제가 될 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            모든 음식점이 E-7 요리사를 초청할 수 있는 것은 아닙니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            관리기준상 대표적인 허용 고용업체는 다음과 같습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E7CHEF_ALLOWED_EMPLOYERS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-sky-400/20 bg-sky-500/[0.07] px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed text-ink-200">
            일반적인 한식당이 단순히 외국인 요리사를 채용하고 싶다는 이유만으로 동일한 기준을 적용받는다고
            보기 어렵습니다. 외국음식 전문식당인지, 실제 판매 음식과 외국인 요리사의 전문성이 연결되는지를
            확인해야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-sky-400/25 bg-sky-500/[0.07] p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            일반 외국음식 전문식당은 어떤 조건을 확인하나요?
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {E7CHEF_GENERAL_REQS.map((item) => (
              <article
                key={item.label}
                className="rounded-3xl border border-white/10 bg-ink-950/60 px-5 py-6 text-center"
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-sky-200">{item.label}</p>
                <p className="mt-3 text-xl font-bold text-white sm:text-2xl">{item.value}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-300">
            이 기준은 모든 음식점에 동일하게 적용되는 단일 기준이라는 의미가 아니며, 음식점 유형과 세부
            상황에 따라 별도 기준을 확인해야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-orange-500/25 bg-warm/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">중식당은 별도 기준을 확인해야 합니다</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {E7CHEF_CHINESE_REQS.map((item) => (
              <article
                key={item.label}
                className="rounded-3xl border border-orange-400/20 bg-ink-950/60 px-5 py-6 text-center"
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-orange-200">{item.label}</p>
                <p className="mt-3 text-xl font-bold text-white sm:text-2xl">{item.value}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 leading-relaxed text-ink-200">
            중식당에는 일반 외국음식점과 다른 별도 관리기준이 적용될 수 있습니다. 2024년도 법무부 국정감사
            처리결과에서도 중식 조리사에 대한 별도 규제와 완화 여부가 검토된 사실이 확인되므로, 중식당 기준을
            일반식당 기준과 같다고 설명하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            &lsquo;연간 부가세 300만원&rsquo;은 매출 300만원이 아닙니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            관리기준에서 말하는 부가세액은 관할 세무서장이 발행하는 부가가치세과세표준증명 등에서 확인되는
            납부세액의 연간 합계액을 기준으로 설명되는 항목입니다. 매출액과 납부세액을 혼동하지 않도록
            확인해야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">내국인 고용현황도 확인합니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            관리기준상 고용보험가입자명부 등으로 실제 내국인 고용현황을 확인합니다. 공개 관리기준에서 일정
            기간 이상 고용보험에 등재된 인력을 기준으로 판단하는 구조가 존재합니다. 다만 예외 및 세부
            산정방식이 있을 수 있으므로, 모든 사업장에 동일하게 적용된다고 단정하지는 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7 요리사는 몇 명까지 고용할 수 있나요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            식당당 1명이라고 단정할 수 없습니다. 사업장의 조건에 따라 허용 가능한 외국인 요리사 인원이 달라질
            수 있습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {E7CHEF_HEADCOUNT_FACTORS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-4 text-center text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5">
            <Link
              to="/consult"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              우리 식당의 E-7 요리사 고용가능 인원 확인하기 →
            </Link>
          </p>
        </section>

        <section className="rounded-3xl border border-orange-500/25 bg-warm/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">2026년 E-7-2 임금기준</h2>
          <div className="mt-6 rounded-2xl border border-orange-400/30 bg-ink-950/60 px-5 py-6 text-center sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
              2026년 E-7-2 준전문인력 기본 임금요건
            </p>
            <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              연 2,589만원 이상
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            법무부 공고 제2025-406호 기준
            <br />
            적용기간: 2026. 2. 1. ~ 2026. 12. 31.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            법무부 장관이 국민 일자리 보호 등을 위해 직종별 임금요건을 별도로 정한 경우에는 해당 별도기준이
            적용될 수 있습니다.
          </p>
          <a
            href={WAGE_NOTICE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-sky-200 transition hover:border-sky-400/50 hover:bg-white/10"
          >
            법무부 공식 공고 보기 ↗
          </a>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            근로계약도 E-7 심사의 중요한 부분입니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            고용계약 내용과 실제 업무가 서로 일치해야 합니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {E7CHEF_CONTRACT_ITEMS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-4 text-center text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed text-ink-200">
            단순 주방보조, 홀서빙, 배달 등의 업무를 E-7 전문 조리업무인 것처럼 작성해서는 안 됩니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            해외에 있는 요리사도 E-7으로 초청할 수 있나요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            한국의 고용업체가 외국인 요리사의 자격과 음식점의 초청요건을 갖춘 상태에서 사증발급인정 관련
            절차를 통해 해외 전문 조리인력을 초청할 수 있습니다. 서류만 내면 자동 발급된다고 보기 어렵습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            한국에 체류 중인 외국인도 E-7 요리사로 변경할 수 있나요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            현재 체류자격, 변경 가능 여부, 요리사 자격, 고용업체 요건을 함께 확인해야 합니다. 모든
            체류자격에서 자유롭게 E-7-2로 변경할 수 있다고 보기 어렵습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7 요리사가 식당을 옮길 때도 주의해야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            주방장 및 조리사는 일반적인 E-7 사후신고 대상과 달리 근무처변경·추가에서 사전허가 여부를 반드시
            확인해야 하는 직종입니다. 퇴사 후 새 식당에서 먼저 근무하고 나중에 신고하면 된다고 보기
            어렵습니다.
          </p>
          <p className="mt-5">
            <Link
              to="/visa/e7-workplace-change"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 근무처변경·이직 절차 확인하기 →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7 요리사 신청에는 어떤 서류가 필요할까요?
          </h2>
          <p className="mt-3 text-sm text-ink-400">
            모든 신청자에게 동일한 서류가 요구된다고 단정하지 않습니다. 신청 유형과 상황에 따라 달라질 수
            있습니다.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">외국인 측 예시</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7CHEF_APPLICANT_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">고용업체 측 예시</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7CHEF_COMPANY_DOCS.map((item) => (
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
          <h2 className="text-xl font-bold text-white sm:text-2xl">외국인 요리사 초청은 이렇게 검토합니다</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7CHEF_STEPS.map((step, i) => (
              <li key={step.n} className="relative rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{step.n}</p>
                <p className="mt-2 text-base font-semibold text-white">{step.title}</p>
                {i < E7CHEF_STEPS.length - 1 ? (
                  <p className="mt-3 text-xs text-ink-500" aria-hidden>
                    → 다음 단계
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7 요리사 초청에서 자주 오해하는 부분
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {E7CHEF_MYTHS.map((item) => (
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
            {E7CHEF_FAQ.map((item) => (
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
          <p className="mt-2 text-sm text-ink-400">법무부·출입국외국인정책본부의 공식자료를 함께 확인하세요.</p>
          <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {E7CHEF_OFFICIAL_LINKS.map((item) => (
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
            우리 식당에서 외국인 요리사를 초청할 수 있을까요?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">
            외국인의 경력뿐 아니라 음식점의 업종, 면적, 납세실적, 내국인 고용현황과 고용가능 인원을 함께
            확인해야 합니다.
          </p>
          <div className="mt-6">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              E-7 요리사 초청 상담하기
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
