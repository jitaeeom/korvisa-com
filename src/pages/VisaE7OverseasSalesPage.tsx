import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  E7OS_APPLICANT_DOCS,
  E7OS_BAD_JOBS,
  E7OS_COMPANY_DOCS,
  E7OS_COMPANY_FACTORS,
  E7OS_DUTIES,
  E7OS_EDU_PATHS,
  E7OS_EXPORT_DOCS,
  E7OS_FAQ,
  E7OS_GOOD_JOBS,
  E7OS_HIRE_EFFORT,
  E7OS_LANGUAGE_ITEMS,
  E7OS_MAJORS,
  E7OS_MYTHS,
  E7OS_NOT_PRIMARY,
  E7OS_OFFICIAL_LINKS,
  E7OS_QUICK_CHECKS,
  E7OS_REASON_FLOW,
  E7OS_REVIEW_STEPS,
  E7OS_STEPS,
} from "../data/visaE7OverseasSales";

const HERO_IMAGE = "/images/visas/e7.png?v=6";
const WAGE_NOTICE_URL = "https://www.moj.go.kr/bbs/immigration/211/601892/artclView.do";

export function VisaE7OverseasSalesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: E7OS_FAQ.map((item) => ({
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
              alt="E-7 해외영업원 비자 안내"
              width={1400}
              height={560}
              className="aspect-[21/9] w-full object-cover sm:aspect-[2.4/1]"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent sm:bg-gradient-to-r sm:from-ink-950 sm:via-ink-950/70 sm:to-transparent" />
          </div>
          <figcaption className="sr-only">외국인 해외영업원 E-7 비자 안내용 대표 이미지</figcaption>
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
            <Link to="/visa/e7-1" className="transition hover:text-white">
              E-7-1
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-white">해외영업원</span>
          </nav>
          <p className="mt-6 inline-flex rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
            해외영업원 · E-7-1
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            외국인 해외영업 E-7 비자,
            <span className="mt-2 block">외국어를 잘한다고 허가되는 것은 아닙니다</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-300">
            E-7-1 해외영업원은 외국인의 학력·경력뿐 아니라 실제 담당업무, 회사의 해외영업 필요성, 수출입
            활동, 내국인 고용현황 등을 함께 검토합니다.
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4 text-sm leading-relaxed text-orange-100">
            외국인의 자격 + 실제 해외영업 직무 + 회사의 고용 필요성, 세 가지를 함께 확인해야 합니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/visa/e7-1"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7-1 전문인력 전체 안내 보기
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
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            외국인 해외영업 직원을 채용하려고 하나요?
          </h2>
          <ul className="mt-6 space-y-2.5">
            {E7OS_QUICK_CHECKS.map((item) => (
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
            외국어 능력이나 외국 국적 자체가 E-7 해외영업원 자격을 만들어 주는 것은 아닙니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7 해외영업원은 어떤 체류자격인가요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            해외영업원은 E-7-1 전문인력 직종입니다. 기업의 제품·서비스를 해외시장에 판매하거나 해외 거래처를
            발굴·관리하고, 수출입 계약 및 해외영업 활동을 수행하는 전문인력을 대상으로 합니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            직업분류 개편 및 자료 기준시점에 따라 직종코드 표기가 달라질 수 있습니다. 현재 신청 시 적용되는
            세부 직종코드는 최신 출입국 기준을 확인해야 합니다.
          </p>
          <p className="mt-5">
            <Link
              to="/visa/e7-1"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7-1 전문인력 전체 안내 보기 →
            </Link>
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">세 가지를 함께 봅니다</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {E7OS_REVIEW_STEPS.map((step) => (
              <article key={step.n} className="rounded-3xl border border-sky-400/20 bg-ink-950/50 p-6">
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
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">실제 업무가 &lsquo;해외영업&rsquo;이어야 합니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            대표적인 해외영업 업무는 다음과 같습니다. 외국인이 외국어를 사용한다는 이유만으로 해외영업원이
            되는 것은 아닙니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {E7OS_DUTIES.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-sky-400/20 bg-sky-500/[0.07] px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            단순 사무·통역 업무와는 구분해야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            다음 업무가 주된 업무인 경우에는 해외영업 전문직무와 차이가 있습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7OS_NOT_PRIMARY.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-4 text-sm font-semibold text-ink-100"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed text-ink-200">
            이러한 업무가 해외영업 과정에서 부수적으로 발생하는 것까지 금지된다고 보기 어렵습니다. 핵심은
            주된 업무가 전문적인 해외영업 활동인지입니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            해외영업원은 어떤 학력·경력이 필요할까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            해외영업원은 E-7-1 일반 전문인력의 학력·경력 기본구조를 따릅니다. 직종 및 신청 유형에 따라 세부
            기준과 특례가 달라질 수 있습니다.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {E7OS_EDU_PATHS.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5">
            <Link
              to="/visa/e7-1"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7-1 학력·경력 기본구조 확인하기 →
            </Link>
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">전공이 반드시 무역학이어야 하나요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            해외영업과 관련될 수 있는 다양한 전공·경력 조합을 실제 담당업무와 함께 검토할 수 있습니다.
            전공명이 무역이 아니면 불가능하다고 보기 어렵고, 반대로 학사학위만 있으면 전공과 상관없이
            가능하다고 보기도 어렵습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E7OS_MAJORS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-4 text-center text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">해외영업원은 회사의 조건도 중요합니다</h2>
          <div className="mt-4 rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4">
            <p className="text-xs font-semibold tracking-[0.16em] text-orange-200">핵심</p>
            <p className="mt-2 text-lg font-semibold text-white">국민고용 보호 심사대상</p>
            <p className="mt-2 text-sm leading-relaxed text-orange-100">
              해외영업원은 외국인의 스펙만으로 판단하는 직종이 아닙니다. 회사의 해외영업 필요성도 함께
              확인합니다.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E7OS_COMPANY_FACTORS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            직원이 적은 회사도 해외영업원을 채용할 수 있을까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            국민고용 보호 일반 심사기준상 &ldquo;국민고용자가 5명 미만이고 내수 위주인 업체&rdquo;는 원칙적으로
            초청이 제한되는 구조가 있습니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            내국인 5명 미만이면 무조건 E-7이 불가하다고 단정할 수 없습니다. 수출업체, 외국인투자업체,
            특수언어지역 대상 업체 등에는 별도 특례가 적용될 수 있으므로, 업체와 직종의 세부조건을 개별적으로
            확인해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7 외국인을 몇 명까지 채용할 수 있나요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            국민고용 보호 심사대상 E-7 외국인은 원칙적으로 국민고용자의 20% 범위에서 허용 여부를 검토하는
            구조가 있습니다. 내국인 고용규모에 따라 추가 E-7 해외영업원 채용 가능 여부가 달라질 수 있습니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            무조건 내국인 5명당 외국인 1명이라고 단정하지 않습니다. 별도 특례가 존재할 수 있습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">수출실적이 반드시 있어야 하나요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            기존 수출실적은 해외영업 인력의 필요성을 설명하는 중요한 자료가 될 수 있습니다. 수출실적이 없으면
            무조건 불허된다고 보기 어렵습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E7OS_EXPORT_DOCS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed text-ink-200">
            신규 해외시장 진출을 추진하는 기업이라면 사업계획, 제품 경쟁력, 목표시장, 외국인의 역할 등을 통해
            해외영업 필요성을 구체적으로 설명해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            수출기업에는 별도 고용특례가 적용될 수 있습니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            공개된 E-7 세부 관리기준에는 외국인투자업체 및 특수언어지역 대상 수출업체 등에 대해 일반적인
            국민고용 보호기준과 다른 별도 고용특례가 존재하는 구조가 있습니다. 과거 기준을 2026년 신규
            기준이라고 보기는 어렵습니다.
          </p>
          <p className="mt-5">
            <Link
              to="/consult"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              우리 회사가 특례 대상인지 확인하기 →
            </Link>
          </p>
        </section>

        <section className="rounded-3xl border border-orange-500/25 bg-warm/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            &lsquo;해외 온라인 상품 판매원&rsquo;은 별도 기준을 확인해야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            일반적인 해외 영업원, 무역 영업원, 수출입 영업원과 &ldquo;해외 온라인 상품 판매원&rdquo;에는 별도의
            세부 관리기준이 존재할 수 있습니다. 해외 온라인 상품 판매원의 별도 업체요건을 일반 해외영업원
            전체에 적용하지 않으며, 온라인 쇼핑몰 업무라는 이유만으로 일반 해외영업원과 동일하다고 보기
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

        <section className="rounded-3xl border border-orange-500/25 bg-warm/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">2026년 E-7-1 해외영업원 임금기준</h2>
          <div className="mt-6 rounded-2xl border border-orange-400/30 bg-ink-950/60 px-5 py-6 text-center sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
              2026년 E-7-1 전문인력 기본 임금요건
            </p>
            <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              연 3,112만원 이상
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            법무부 공고 제2025-406호 기준
            <br />
            적용기간: 2026. 2. 1. ~ 2026. 12. 31.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            법무부 장관이 국민 일자리 보호 등을 위해 직종별 임금요건을 별도로 정한 경우 해당 별도기준이
            적용됩니다.
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
            외국어를 잘하면 유리하지만, 그것만으로는 부족합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            외국인의 언어와 시장 이해는 고용 필요성을 설명하는 요소가 될 수 있습니다. 원어민이거나 특정
            국적이라는 이유만으로 E-7이 가능하다고 보기 어렵습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {E7OS_LANGUAGE_ITEMS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-4 text-center text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">고용사유는 구체적이어야 합니다</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7OS_REASON_FLOW.map((item, i) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-ink-950/50 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{item}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 leading-relaxed text-ink-200">
            &ldquo;외국인이 영어를 잘해서&rdquo;, &ldquo;외국인이 필요해서&rdquo;, &ldquo;해외진출 예정이라서&rdquo; 정도로 끝내지
            않는 것이 중요합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            내국인 채용 노력도 중요한 자료가 될 수 있습니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            해외영업원은 국민고용 보호 심사대상입니다. 아래와 같은 자료를 통해 외국인 전문인력을 고용하게
            된 경위를 구체적으로 설명할 수 있습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E7OS_HIRE_EFFORT.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            근로계약서의 직무도 실제 업무와 맞아야 합니다
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-sky-400/20 bg-ink-950/50 p-6">
              <h3 className="text-base font-semibold text-white">실제 해외영업 직무 예</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7OS_GOOD_JOBS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-950/50 p-6">
              <h3 className="text-base font-semibold text-white">주된 업무로 구성하기 어려운 예</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7OS_BAD_JOBS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-5 leading-relaxed text-ink-200">
            직무명만 &ldquo;해외영업&rdquo;으로 쓰는 것이 아니라 실제 업무가 일치해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            D-10 구직비자에서 E-7 해외영업원으로 변경할 수 있나요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            현재 D-10 체류자가 해외영업원 자격요건과 고용업체 요건을 충족하고 적합한 근로계약을 체결한 경우
            E-7 변경 가능성을 검토할 수 있습니다. 모든 D-10 보유자가 자동 변경 가능하다고 보기 어렵습니다.
          </p>
          <p className="mt-5">
            <Link
              to="/visa/d10-to-e7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              D-10에서 E-7 변경조건 확인하기 →
            </Link>
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            해외에 있는 외국인도 해외영업원으로 초청할 수 있나요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            고용업체와 외국인이 각각의 요건을 갖춘 경우 사증발급인정 등 적절한 절차를 통해 해외 인재를 초청할
            수 있습니다. 서류만 내면 자동 허가된다고 보기 어렵습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7 해외영업원 신청에는 어떤 서류가 필요할까요?
          </h2>
          <p className="mt-3 text-sm text-ink-400">
            모든 신청자에게 동일한 서류가 요구된다고 단정하지 않습니다. 신청 유형과 상황에 따라 달라질 수
            있습니다.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">외국인 측 예시</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7OS_APPLICANT_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">회사 측 예시</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7OS_COMPANY_DOCS.map((item) => (
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
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7 해외영업원 채용은 이렇게 검토합니다</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E7OS_STEPS.map((step, i) => (
              <li key={step.n} className="relative rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{step.n}</p>
                <p className="mt-2 text-base font-semibold text-white">{step.title}</p>
                {i < E7OS_STEPS.length - 1 ? (
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
            E-7 해외영업원 신청에서 자주 오해하는 부분
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {E7OS_MYTHS.map((item) => (
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
            {E7OS_FAQ.map((item) => (
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
            {E7OS_OFFICIAL_LINKS.map((item) => (
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
            우리 회사에서 외국인 해외영업원을 채용할 수 있을까요?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">
            외국인의 학력·경력뿐 아니라 실제 담당업무, 내국인 고용현황, 수출입 활동, 해외영업 필요성을 함께
            확인해야 합니다.
          </p>
          <div className="mt-6">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              E-7 해외영업원 채용 상담하기
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
