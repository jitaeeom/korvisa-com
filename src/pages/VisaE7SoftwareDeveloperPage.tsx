import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  E7SD_APPLICANT_DOCS,
  E7SD_BACKEND_TASKS,
  E7SD_CASE_CHECKS,
  E7SD_COMPANY_DOCS,
  E7SD_COMPANY_EVIDENCE,
  E7SD_COMPANY_FACTORS,
  E7SD_CONTRACT_GOOD,
  E7SD_DOMESTIC,
  E7SD_DUTY_EXAMPLES,
  E7SD_EDU_PATHS,
  E7SD_FAQ,
  E7SD_IT_JOBS,
  E7SD_MAJORS,
  E7SD_OFFICIAL_EXAMPLES,
  E7SD_OFFICIAL_LINKS,
  E7SD_REASON_FLOW,
  E7SD_ROLE_CARDS,
  E7SD_STACKS,
  E7SD_STRONG_CAREER,
  E7SD_WEAK_CAREER,
} from "../data/visaE7SoftwareDeveloper";

const HERO_IMAGE = "/images/e7-software-developer-hero.png";
const WAGE_NOTICE_URL = "https://www.moj.go.kr/bbs/immigration/211/601892/artclView.do";
const MSS_NOTICE_URL =
  "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065197&cbIdx=310&parentSeq=1065197";

export function VisaE7SoftwareDeveloperPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: E7SD_FAQ.map((item) => ({
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
              alt="E-7 소프트웨어개발자 비자 외국인 개발자 한국 IT 기업 취업"
              width={1400}
              height={560}
              className="aspect-[21/9] w-full object-cover object-center sm:aspect-[2.4/1]"
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption className="sr-only">외국인 개발자 E-7 비자 안내용 대표 이미지</figcaption>
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
            <span className="text-white">응용 소프트웨어 개발자</span>
          </nav>
          <p className="mt-6 inline-flex rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
            응용 소프트웨어 개발자 · E-7-1 · 2223
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            외국인 개발자 E-7 비자,
            <span className="mt-2 block">전공보다 실제 개발업무까지 함께 봐야 합니다</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-300">
            응용 소프트웨어 개발자는 E-7-1 전문인력의 대표적인 IT 직종입니다. 하지만 회사가 IT 회사라는
            이유만으로, 또는 외국인이 코딩을 할 수 있다는 이유만으로 응용 소프트웨어 개발자에 해당하는 것은
            아닙니다. 외국인의 학력·경력, 실제 담당할 개발업무, 회사의 사업내용과 개발 필요성을 함께 검토해야
            합니다.
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4 text-sm leading-relaxed text-orange-100">
            &ldquo;개발자&rdquo;라는 직함보다 실제로 어떤 소프트웨어를 개발하는지가 중요합니다.
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
            E-7 응용 소프트웨어 개발자는 어떤 직종인가요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            응용 소프트웨어 개발자는 E-7-1 전문인력에 해당하는 직종입니다. 직종코드는 2223입니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            2026년 중소벤처기업부 외국전문인력(E-7-1) 고용추천 공고는 이 직종을, 기업이나 개인 등이 사용하는
            각종 소프트웨어를 개발하고 컴퓨터시스템의 사용환경에 따라 소프트웨어 환경을 변경하는 전문
            개발업무로 설명합니다.
          </p>
          <p className="mt-4 text-sm font-semibold text-white">공식 직종 예시</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {E7SD_OFFICIAL_EXAMPLES.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-ink-950/50 px-3 py-1.5 text-sm text-ink-200"
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
            모든 개발자가 같은 E-7 직종은 아닙니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            회사의 채용직함만 보고 판단하지 말고, 실제 업무를 기준으로 적절한 직종을 검토해야 합니다. 응용
            소프트웨어 개발자와 웹 개발자는 같은 직종이 아닙니다.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {E7SD_IT_JOBS.map((job) => (
              <article
                key={job.code}
                className={`rounded-3xl border p-6 ${
                  job.highlight
                    ? "border-sky-400/40 bg-sky-500/[0.08]"
                    : "border-white/10 bg-ink-900/40"
                }`}
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{job.code}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{job.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{job.body}</p>
                {"examples" in job && job.examples ? (
                  <p className="mt-3 text-xs leading-relaxed text-ink-400">
                    공식 예시: {job.examples.join(", ")}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            어떤 개발업무를 응용 소프트웨어 개발자로 검토할 수 있을까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            아래는 실무에서 자주 연결되는 개발업무의 예시입니다. 법무부의 공식 허용직업 목록이 아닙니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E7SD_DUTY_EXAMPLES.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-3 text-sm text-ink-200"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed text-ink-200">
            백엔드, 프론트엔드, 풀스택 등 현대적인 개발자 직함은 실제 담당업무를 기준으로 2223 응용
            소프트웨어 개발자인지, 2224 웹 개발자인지, 2222 시스템 소프트웨어 개발자인지, 다른 IT
            전문직종인지를 검토해야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            백엔드 개발자는 E-7 응용 소프트웨어 개발자로 신청할 수 있을까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            Backend Engineer라는 직함만으로 2223이라고 보기 어렵습니다. 아래와 같은 실제 업무가 응용
            소프트웨어 개발과 어떻게 연결되는지를 확인해야 합니다.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {E7SD_BACKEND_TASKS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-ink-950/50 px-3 py-1.5 text-sm text-ink-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            프론트엔드·풀스택 개발자는 어떻게 봐야 할까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            프론트엔드 또는 풀스택이라는 채용 직함만으로 직종을 결정하지 않습니다. 웹서비스 개발 비중,
            응용프로그램 개발 내용, 백엔드 개발 내용, 실제 담당 기능 등을 검토하여 2223 응용 소프트웨어
            개발자인지 2224 웹 개발자인지 구분할 필요가 있습니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            웹 개발자(2224)는 응용 소프트웨어 개발자(2223)의 하위직종이 아닙니다. 두 직종은 별도로
            검토해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">앱 개발자와 게임 개발자도 가능한가요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            게임 프로그래머, 온라인 게임 프로그래머는 2026년 중소벤처기업부 고용추천 공고의 응용 소프트웨어
            개발자 공식 예시에 포함됩니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            모바일 앱 개발은 실제 응용프로그램 개발업무의 내용에 따라 2223 해당 여부를 검토할 수 있습니다.
            모바일 앱 개발자라고 자동으로 2223이 되는 것은 아닙니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            AI·머신러닝 개발자도 응용 소프트웨어 개발자일까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            AI Engineer, Machine Learning Engineer, Data Engineer, Data Scientist라는 직함만으로 2223이라고
            보지 않습니다. 실제 업무에 따라 응용 소프트웨어 개발자, 데이터 전문가, 기타 관련 IT 전문직종
            등의 검토가 필요할 수 있습니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            AI 모델 연구 자체와 AI 기능을 적용한 응용서비스 개발도 구분할 필요가 있습니다. 이 페이지는 AI
            전용 E-7 직종코드를 임의로 정하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            블록체인·Web3 개발자는 어떤 직종으로 신청할까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            Blockchain Developer, Web3 Backend Engineer 등의 직함 자체로 직종을 결정하지 않습니다.
            블록체인 기반 응용서비스 개발, 백엔드 서비스 개발, API 개발, 서비스 로직 구현, 스마트컨트랙트
            연동, 데이터 처리 등 실제 담당업무를 기준으로 응용 소프트웨어 개발자 등 적절한 IT 전문직종을
            검토해야 합니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            블록체인 개발자라고 해서 무조건 2223이라고 보기 어렵습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            직함보다 실제 업무를 기준으로 봅니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            같은 개발자 직함이라도 실제 담당업무에 따라 직종 검토가 달라질 수 있습니다.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {E7SD_ROLE_CARDS.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-ink-950/50 p-5">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            외국인 개발자는 어떤 학력과 경력이 필요할까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            응용 소프트웨어 개발자는 E-7-1 전문인력 일반 자격요건을 기본으로 검토합니다. 학력·경력은 보통
            다음처럼 안내됩니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {E7SD_EDU_PATHS.map((item) => (
              <li key={item.title} className="rounded-2xl border border-white/10 bg-ink-900/40 p-5">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-base font-semibold text-white">관련 전공 예시</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-400">
            전공명만으로 자동 인정된다고 보기 어렵습니다. 학위증의 실제 전공과 담당업무의 관련성을 함께
            봐야 합니다.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {E7SD_MAJORS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-ink-900/40 px-3 py-1.5 text-sm text-ink-200"
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
              E-7-1 학력·경력 기준 자세히 보기 →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            컴퓨터공학 전공이 아니어도 E-7 개발자가 될 수 있을까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            비전공자라고 해서 불가능하다고 단정하지 않습니다. E-7-1 일반 학력·경력 기준에 따라 학위 수준,
            전공 관련성, 관련 경력, 국내대학 졸업 여부 등을 종합적으로 검토해야 합니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            반대로 개발경력만 있으면 누구나 가능하다고 보기도 어렵습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            한국 대학을 졸업한 외국인 개발자는 무엇이 다른가요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            국내대학 졸업자 관련 예외·특례는 기존 E-7-1·D-10→E-7 안내와 같습니다. 새로운 특례를 만들지
            않습니다.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {E7SD_DOMESTIC.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-ink-950/50 p-5">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
                <p className="mt-3 text-xs leading-relaxed text-ink-400">{item.note}</p>
              </article>
            ))}
          </div>
          <p className="mt-5">
            <Link
              to="/visa/d10-to-e7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              D-10에서 E-7 변경 안내 보기 →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            D-10 구직비자에서 개발자 E-7으로 변경할 수 있을까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            D-10 자체가 E-7을 자동 보장하지 않습니다. 취업할 회사, 담당직무, 학력·경력, 근로계약, 임금 등
            E-7 요건을 별도로 충족해야 합니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/visa/d10"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              D-10 구직비자 안내 보기 →
            </Link>
            <Link
              to="/visa/d10-to-e7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              D-10에서 E-7 변경 안내 보기 →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">개발자 경력증명서에는 무엇이 중요할까요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            Software Engineer, Developer, Programmer처럼 직책만 있는 것보다 실제 수행업무가 확인되는 것이
            중요합니다. 특정 영문표현을 쓰면 허가된다고 보기 어렵습니다. 경력증명서 내용은 실제 업무와
            일치해야 합니다.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-ink-400">직책만 있는 경우</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-300">
                {E7SD_WEAK_CAREER.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-sky-400/25 bg-ink-900/40 p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">수행업무가 보이는 방향</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-300">
                {E7SD_STRONG_CAREER.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">GitHub이나 개발 포트폴리오도 도움이 될까요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            GitHub나 개발 포트폴리오는 법정 필수서류가 아닙니다. 프로젝트, 개발기술, 담당기능, 실제
            개발경험 등을 설명하는 보조자료로 활용될 수 있습니다. GitHub 계정이 없으면 불리하다거나
            필수라고 보기 어렵습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            스타트업도 외국인 개발자를 채용할 수 있을까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            회사 규모만으로 가능하거나 불가능하다고 단정하지 않습니다. 스타트업도 실제 개발업무와 E-7 요건을
            갖추었다면 검토할 수 있습니다. 매출이 없어도 무조건 가능하다고 보기는 어렵습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {E7SD_COMPANY_FACTORS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-4 text-center text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-orange-400/30 bg-orange-500/[0.07] p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            응용 소프트웨어 개발자와 웹 개발자는 회사조건도 같을까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            2026년 중소벤처기업부 외국전문인력(E-7-1) 고용추천 공고에서는 응용 소프트웨어 개발자(2223)와
            웹 개발자(2224)를 별도 직종으로 구분합니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            해당 공고의 사업장 요건표에서는 웹 개발자(2224)에 대해 국민고용자 20% 범위 등의 별도 고용기준이
            표시되어 있지만, 응용 소프트웨어 개발자(2223)에는 동일한 표시가 없습니다. 웹개발자 20% 기준을
            2223에 그대로 적용하지 않습니다.
          </p>
          <p className="mt-5 rounded-2xl border border-orange-400/30 bg-ink-950/50 px-5 py-4 text-sm leading-relaxed text-orange-100">
            이는 중소벤처기업부 고용추천 제도의 사업장 기준이며, 실제 E-7 심사는 출입국의 해당 직종 기준과
            개별 신청조건을 함께 확인해야 합니다. 2223은 출입국 심사에서 고용인원 제한이 전혀 없다고 확대해석하지
            않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            중소기업의 외국인 개발자 채용에는 고용추천 제도도 있습니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            2026년 중소벤처기업부 외국전문인력(E-7-1) 고용추천 공고에서 응용 소프트웨어 개발자(2223)는
            고용추천 대상 직종에 포함되어 있습니다. 중소기업이 외국인 유학생을 해당 직종으로 채용할 때
            검토할 수 있는 제도입니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            모든 2223 신청자가 중기부 추천서를 반드시 받아야 하는 것은 아니며, 추천이 있다고 해서 E-7이
            자동 허가되는 것도 아닙니다. 공고도 비자 심사·발급은 법무부 소관이며, 고용추천을 받았더라도
            E-7-1이 발급되지 않을 수 있다고 안내합니다.
          </p>
          <a
            href={MSS_NOTICE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-sky-200 transition hover:border-sky-400/50 hover:bg-white/10"
          >
            중소벤처기업부 고용추천 공고 보기 ↗
          </a>
        </section>

        <section className="rounded-3xl border border-orange-500/25 bg-warm/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">2026년 외국인 개발자 E-7 임금기준</h2>
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
            법무부 장관이 직종별로 별도 임금기준을 정한 경우 해당 기준이 적용됩니다.
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
            출입국에는 외국인 개발자가 필요한 이유도 설명해야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            &ldquo;개발자가 부족해서 외국인을 채용한다&rdquo;로 끝내지 않는 것이 중요합니다.
          </p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7SD_REASON_FLOW.map((item, i) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">근로계약서에는 실제 개발업무가 보여야 합니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            Software Engineer, Developer만 기재하면 실제 개발업무가 잘 보이지 않을 수 있습니다. 아래는
            실제 업무에 맞게 간결하게 적을 수 있는 방향의 예시입니다. 문구를 복사하면 허가된다고 보기
            어렵습니다. 실제 업무와 일치해야 합니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {E7SD_CONTRACT_GOOD.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-3 text-sm text-ink-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Python·Java·JavaScript 같은 개발언어가 비자 직종을 결정할까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            아닙니다. 특정 언어나 프레임워크 자체가 E-7 직종을 결정하는 것이 아닙니다. 같은 Python
            개발자라도 실제 업무에 따라 직종 검토가 달라질 수 있습니다. 핵심은 기술스택보다 실제 직무입니다.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {E7SD_STACKS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-ink-900/40 px-3 py-1.5 text-sm text-ink-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            외국인 개발자 E-7 신청에는 어떤 서류가 필요할까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            모든 신청에 동일한 서류가 항상 요구된다고 단정하지 않습니다. 신청 경로와 심사 상황에 따라
            추가자료가 필요할 수 있습니다.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">외국인</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7SD_APPLICANT_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">회사</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7SD_COMPANY_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            회사도 실제로 소프트웨어 개발이 필요한 곳인지 설명해야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            아래 자료는 필요에 따라 활용할 수 있습니다. 모두 법정 필수라고 보기 어렵습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {E7SD_COMPANY_EVIDENCE.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-4 text-center text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            외국인 개발자가 회사를 옮기면 어떻게 해야 할까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            응용 소프트웨어 개발자(2223)의 근무처변경이 무조건 사전허가이거나, 무조건 15일 내 사후신고라고
            단정하지 않습니다. 현재 직종, 새 회사, 담당업무, 체류상태 등을 확인해야 합니다.
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

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7 개발자에서 F-2-7로 변경할 수도 있을까요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            E-7-1 전문직 종사자는 F-2-7 신청대상 검토가 가능한 경우가 있습니다. 자동변경은 아닙니다.
            체류기간, 직종, 소득, 점수, 기타 요건을 별도로 심사합니다.
          </p>
          <p className="mt-5">
            <Link
              to="/visa/f2-7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              F-2-7 점수제 거주비자 확인하기 →
            </Link>
          </p>
        </section>

        <section className="rounded-3xl border border-sky-400/25 bg-sky-500/[0.07] p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            예를 들어 이런 외국인 개발자는 무엇을 확인할까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            한국 IT 스타트업이 외국인 Backend Engineer를 채용하는 경우를 가정합니다. 후보자는 Computer
            Science 관련 학위, Backend/Web3 개발경력, Java/Python/Node.js 등 개발경험, API 및 서버 개발,
            데이터 처리, 서비스 개발 프로젝트 경험이 있습니다.
          </p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E7SD_CASE_CHECKS.map((item, i) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-ink-950/50 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{item}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 leading-relaxed text-ink-200">
            Backend Engineer라는 직함이 곧 2223인 것은 아닙니다. 외국인의 전문성, 실제 개발업무, 회사의
            개발수요가 연결되어야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/30 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            우리 회사도 외국인 개발자를 E-7으로 채용할 수 있을까요?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">
            외국인의 학력·경력뿐 아니라 실제 개발업무, 적절한 E-7 IT 직종, 회사의 사업내용, 임금과 고용
            필요성을 함께 검토해야 합니다.
          </p>
          <div className="mt-6">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              외국인 개발자 E-7 상담하기
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">자주 묻는 질문(FAQ)</h2>
          <div className="mt-6 space-y-3">
            {E7SD_FAQ.map((item) => (
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
          <p className="mt-2 text-sm text-ink-400">법무부·출입국·중소벤처기업부 공식자료를 함께 확인하세요.</p>
          <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {E7SD_OFFICIAL_LINKS.map((item) => (
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

        <aside className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-relaxed text-ink-400">
          본 페이지는 <strong className="text-ink-300">일반 안내</strong>이며 법률자문·행정 유권해석을
          대체하지 않습니다. 최종 신청·심사 기준은 출입국·법무부 공식 안내와{" "}
          <strong className="text-ink-300">전문가 상담</strong>을 따르세요.
        </aside>
      </div>
    </article>
  );
}
