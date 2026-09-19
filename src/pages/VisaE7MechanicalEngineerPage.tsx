import { useEffect } from "react";
import { Link } from "react-router-dom";
import { JobServiceCta } from "../components/JobServiceCta";
import {
  E7ME_APPLICANT_DOCS,
  E7ME_CASE_CHECKS,
  E7ME_CNC_TASKS,
  E7ME_COMPANY_DOCS,
  E7ME_COMPANY_EVIDENCE,
  E7ME_COMPANY_FACTORS,
  E7ME_CONTRACT_BAD,
  E7ME_CONTRACT_GOOD,
  E7ME_DUTIES,
  E7ME_EDU_PATHS,
  E7ME_FAQ,
  E7ME_HIRE_EFFORT,
  E7ME_INDUSTRIES,
  E7ME_MAJORS,
  E7ME_MISMATCH,
  E7ME_OFFICIAL_LINKS,
  E7ME_PILLARS,
  E7ME_REASON_FLOW,
  E7ME_SIMPLE_JOBS,
  E7ME_SKILLED_JOBS,
  E7ME_STRONG_CAREER,
  E7ME_WEAK_CAREER,
} from "../data/visaE7MechanicalEngineer";

const HERO_IMAGE = "/images/e7-mechanical-engineer-hero.png";
const WAGE_NOTICE_URL = "https://www.moj.go.kr/bbs/immigration/211/601892/artclView.do";

export function VisaE7MechanicalEngineerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: E7ME_FAQ.map((item) => ({
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
              alt="E-7 기계공학기술자 비자 외국인 기계 엔지니어 제조업 CNC MCT"
              width={1400}
              height={560}
              className="aspect-[21/9] w-full object-cover object-center sm:aspect-[2.4/1]"
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption className="sr-only">제조업 외국인 기계공학기술자 E-7 비자 안내용 대표 이미지</figcaption>
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
            <span className="text-white">기계공학기술자</span>
          </nav>
          <p className="mt-6 inline-flex rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
            기계공학기술자 · E-7-1
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            제조업 외국인 E-7 채용,
            <span className="mt-2 block">기계공학기술자는 실제 업무가 중요합니다</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-300">
            MCT·CNC·금형·자동차부품·산업기계 등 제조업체에서 외국인 기술자를 채용한다고 해서 모두 E-7
            기계공학기술자로 인정되는 것은 아닙니다. 외국인의 학력·경력뿐 아니라 회사가 실제 어떤 제품을
            생산하는지, 외국인이 어떤 기술업무를 담당하는지, 단순 생산직이 아닌 전문기술 업무인지, 회사의
            외국인 전문인력 고용요건을 충족하는지를 함께 검토해야 합니다.
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4 text-sm leading-relaxed text-orange-100">
            &ldquo;기계를 다루는 사람&rdquo;과 &ldquo;E-7 기계공학기술자&rdquo;는 다릅니다.
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
        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7 기계공학기술자는 어떤 직종인가요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            기계공학기술자는 E-7-1 전문인력에 해당하는 직종입니다. 직종번호 2351로 안내되는 경우가 있으나,
            코드보다 직종명과 실제 담당업무를 중심으로 봐야 합니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            기계장치 및 시스템의 연구, 설계, 개발, 기술검토, 평가, 설치, 운영, 유지관리 등 기계공학적
            전문지식이 필요한 업무를 수행하는 전문기술인력을 대상으로 합니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7ME_DUTIES.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-4 text-center text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5">
            <Link
              to="/visa/e7-1"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7-1 전문인력 전체 안내 보기 →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            공장에서 일한다고 모두 기계공학기술자는 아닙니다
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            <article className="rounded-3xl border border-sky-400/25 bg-ink-900/40 p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">전문기술 업무</p>
              <h3 className="mt-2 text-lg font-semibold text-white">전문기술 업무</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7ME_SKILLED_JOBS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <p className="flex items-center justify-center text-sm font-bold tracking-[0.2em] text-orange-200">
              VS
            </p>
            <article className="rounded-3xl border border-orange-400/25 bg-ink-900/40 p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-orange-200">단순 생산 업무</p>
              <h3 className="mt-2 text-lg font-semibold text-white">단순 생산 업무</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7ME_SIMPLE_JOBS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            위 업무명을 허가 또는 불허 업무로 단정하지 않습니다. 실제 업무의 난이도, 전문성, 외국인의
            학력·경력, 회사의 사업내용을 종합하여 판단됩니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            MCT·CNC 업체도 E-7 기계공학기술자를 채용할 수 있을까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            MCT나 CNC 장비가 있다는 사실만으로 기계공학기술자 채용 필요성이 인정되는 것은 아닙니다. 실제
            담당업무가 중요합니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            예를 들어 아래와 같은 업무가 실제로 포함된다면, 기계공학 전문업무와의 관련성을 구체적으로 검토할
            필요가 있습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {E7ME_CNC_TASKS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-300">
            CNC 프로그램을 작성하면 무조건 기계공학기술자로 인정된다고 보기 어렵습니다. 실제 업무 전체를
            기준으로 판단해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            어떤 제조업체에서 많이 검토할 수 있을까요?
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {E7ME_INDUSTRIES.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed text-ink-200">
            이 업종이면 E-7이 허가된다고 보기 어렵습니다. 회사의 업종보다 실제 사업내용과 외국인의 담당업무가
            중요합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            외국인은 어떤 학력과 경력이 필요할까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            기계공학기술자는 E-7-1 전문인력 일반 자격요건을 기본으로 검토합니다. 학력·경력은 보통 다음처럼
            함께 살펴보는 경우가 많습니다. 다만 직종 및 신청 유형에 따라 세부 기준과 특례가 달라질 수
            있습니다.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {E7ME_EDU_PATHS.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-ink-950/50 p-6">
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
          <h3 className="mt-8 text-base font-semibold text-white">기계공학 관련 전공 예시</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E7ME_MAJORS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-300">
            전공명만으로 자동 인정된다고 보기 어렵습니다. 학위증의 실제 전공과 담당업무의 관련성을 검토해야
            합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">경력증명서에는 무엇이 중요할까요?</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">직책만 적힌 경력 예</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7ME_WEAK_CAREER.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-sky-400/20 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">전문업무가 확인되는 경력 예</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7ME_STRONG_CAREER.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-5 leading-relaxed text-ink-200">
            영문 직책만으로 자격이 결정된다고 보기 어렵습니다. 실제 수행업무를 입증할 수 있어야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            외국인의 경력만 맞는다고 E-7이 허가되는 것은 아닙니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            회사의 아래 사항도 함께 검토될 수 있습니다. 특히 기계공학기술자는 국민고용 보호 및 고용업체별
            허용인원 등 사전관리가 필요한 직종입니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7ME_COMPANY_FACTORS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            직원이 적은 제조업체도 신청할 수 있을까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            기계공학기술자는 고용업체별 허용인원 제한 등이 있어 사전관리가 필요한 직종으로 분류됩니다. 회사
            규모가 작다는 이유만으로 일률적으로 불가능한 것은 아니지만, 상시근로자 수와 기존 E-7 고용인원을
            사전에 확인해야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-orange-500/25 bg-warm/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">2026년 기계공학기술자 E-7 임금기준</h2>
          <div className="mt-6 rounded-2xl border border-orange-400/30 bg-ink-950/60 px-5 py-6 text-center sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
              2026년 E-7-1 전문인력 기본 임금요건
            </p>
            <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              연 31,120,000원 이상
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            법무부 공고 제2025-406호 기준
            <br />
            적용기간: 2026. 2. 1. ~ 2026. 12. 31.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            법무부가 특정 직종에 별도 임금기준을 정한 경우 해당 기준이 우선합니다.
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
            출입국은 왜 이 외국인이 필요한지도 봅니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            &ldquo;한국인을 구하기 어려워 외국인을 채용합니다.&rdquo;만으로 끝내지 않는 것이 중요합니다.
          </p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7ME_REASON_FLOW.map((item, i) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">내국인 구인 노력도 중요합니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            기계공학기술자는 국민고용 보호 심사가 중요한 직종입니다. 회사가 실제로 필요한 기술인력을
            국내에서 채용하려고 노력했다는 자료가 있다면 고용 필요성을 설명하는 데 도움이 될 수 있습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {E7ME_HIRE_EFFORT.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-4 text-center text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            특정 플랫폼 공고가 법정 필수라고 단정하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            근로계약서에 &lsquo;생산직&rsquo;이라고 쓰면 문제가 될 수 있습니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            기계공학기술자로 신청하면서 직무내용을 아래처럼만 작성하면, 전문인력 직종과 실제 업무 사이의
            불일치 문제가 발생할 수 있습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7ME_CONTRACT_BAD.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-4 text-center text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed text-ink-200">
            반대로 실제 업무가 전문기술 업무라면 간결하면서도 정확하게 기재해야 합니다. 아래는 예시이며, 모든
            회사가 그대로 복사할 문구가 아닙니다. 실제 담당업무와 일치해야 합니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E7ME_CONTRACT_GOOD.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-sky-400/20 bg-ink-900/40 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-orange-500/25 bg-warm/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            실제 업무와 신청 직종이 달라서는 안 됩니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            외국인이 실제로 하는 일이 아래와 같은데 서류에만 Mechanical Engineer라고 작성하는 방식은
            피해야 합니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7ME_MISMATCH.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed text-ink-200">
            E-7 신청서, 근로계약서, 고용사유서, 회사소개자료, 외국인의 학력·경력 사이에 직무의 일관성이
            중요합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7 기계공학기술자 신청에는 어떤 서류가 필요할까요?
          </h2>
          <p className="mt-3 text-sm text-ink-400">
            모든 신청자에게 항상 동일한 서류가 요구된다고 단정하지 않습니다. 신청 유형과 상황에 따라 달라질 수
            있습니다.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">외국인</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7ME_APPLICANT_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">회사</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7ME_COMPANY_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            제조업체는 실제 사업내용을 보여주는 것이 중요합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            아래 자료가 회사의 실제 사업과 기계공학 전문인력 필요성을 설명하는 데 활용될 수 있습니다. 모두
            법정 필수서류라고 보지 않습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7ME_COMPANY_EVIDENCE.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            기계공학기술자가 회사를 옮길 때는 특히 주의해야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            국가법령정보센터에 공개된 「출입국관리법시행령 제26조의2제1항에 따라 신고만으로 근무처
            변경·추가를 할 수 있는 외국인의 요건 고시」에서 기계공학기술자(2351)는 고용업체별 허용인원 제한
            등이 있어 사전관리가 필요한 직종으로 신고제 적용 제외 대상에 명시되어 있습니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            따라서 새 회사에 입사한 뒤 15일 이내 신고하면 된다고 일반화해서는 안 됩니다.
          </p>
          <p className="mt-5">
            <Link
              to="/visa/e7-workplace-change"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 근무처변경 확인하기 →
            </Link>
          </p>
        </section>

        <section className="rounded-3xl border border-sky-400/25 bg-sky-500/[0.07] p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            예를 들어 이런 MCT 회사라면 무엇을 확인할까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            자동차·산업기계 부품을 MCT/CNC로 정밀가공하는 중소 제조업체가 있다고 가정합니다. 외국인 후보자는
            기계공학 관련 학력, CNC/MCT 경력, G-code 또는 CNC programming 경험, CAD 활용, 공정계획,
            정밀측정, 품질관리 경험이 있습니다.
          </p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E7ME_CASE_CHECKS.map((item, i) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-ink-950/50 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{item}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 leading-relaxed text-ink-200">
            MCT 경력이 있다고 해서 E-7이 가능한 것은 아닙니다. 외국인의 전문성, 실제 직무, 회사의 기술수요가
            서로 연결되어야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-9 생산인력과 E-7 기계공학기술자는 무엇이 다른가요?
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">E-9</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                비전문취업 체류자격으로 제조업 생산현장의 업무와 관련된 체류자격입니다.
              </p>
            </article>
            <article className="rounded-3xl border border-sky-400/20 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">E-7-1 기계공학기술자</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                전문적인 기계공학 지식과 학력·경력 등을 바탕으로 전문기술 업무를 수행하는 체류자격입니다.
              </p>
            </article>
          </div>
          <p className="mt-5 leading-relaxed text-ink-200">
            두 체류자격의 활동범위와 목적이 다릅니다. E-7을 E-9보다 좋은 비자라고 보지 않습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4 숙련기능인력과도 다릅니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            E-7-4는 국내에서 일정기간 근무하며 숙련도가 축적된 비전문 인력을 점수제 등으로 검증하여 전환하는
            숙련기능인력 제도입니다. E-7-1 기계공학기술자는 학력·경력과 전문기술 직무를 바탕으로 전문인력으로
            심사합니다. 둘을 동일한 제도로 볼 수 없습니다.
          </p>
          <p className="mt-5">
            <Link
              to="/visa/e7-4"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7-4 숙련기능인력 확인하기 →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7 기계공학기술자는 이렇게 종합 검토합니다</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {E7ME_PILLARS.map((item) => (
              <article key={item.n} className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{item.n}</p>
                <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <JobServiceCta
          heading="외국인 기계·제조 인력을 찾고 계신가요?"
          description="제조업 현장에 필요한 외국인 인력을 찾고 있다면 제조 숙련 브릿지에서 인력 요청을 등록할 수 있습니다."
        />

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">자주 묻는 질문(FAQ)</h2>
          <div className="mt-6 space-y-3">
            {E7ME_FAQ.map((item) => (
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
          <p className="mt-2 text-sm text-ink-400">법무부·출입국 공식자료를 함께 확인하세요.</p>
          <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {E7ME_OFFICIAL_LINKS.map((item) => (
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
            우리 회사도 E-7 기계공학기술자를 채용할 수 있을까요?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">
            외국인의 학력·경력뿐 아니라 회사의 사업내용, 실제 담당업무, 상시근로자와 기존 외국인 고용현황,
            임금, 고용 필요성을 함께 검토해야 합니다.
          </p>
          <div className="mt-6">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              E-7 기계공학기술자 상담하기
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
