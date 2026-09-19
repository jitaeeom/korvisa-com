import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  E7H_APPLICANT_ORGS,
  E7H_CAREER_CHECKS,
  E7H_CHOOSE_COORD,
  E7H_CHOOSE_PLANNER,
  E7H_COMPARE,
  E7H_COORD_DUTIES,
  E7H_COORD_PATHS,
  E7H_FAQ,
  E7H_FLOW,
  E7H_FOREIGN_DOCS,
  E7H_HEADCOUNT,
  E7H_HEADCOUNT_EXTRA,
  E7H_HIGHLIGHTS,
  E7H_INDUSTRY,
  E7H_JOB_CARDS,
  E7H_MYTHS,
  E7H_OFFICIAL_LINKS,
  E7H_ORG_DOCS,
  E7H_PERIOD_CHECKS,
  E7H_PLANNER_CAREERS,
  E7H_PLANNER_DUTIES,
  E7H_PLANNER_MAJORS,
  E7H_PLANNER_NON_MAJORS,
  E7H_PLANNER_PATHS,
  E7H_REASON_ITEMS,
  E7H_STEPS,
} from "../data/visaE7Hospital";

const HERO_IMAGE = "/images/e7-hospital-hero.png";
const WAGE_NOTICE_URL = "https://www.moj.go.kr/bbs/immigration/211/601892/artclView.do";

export function VisaE7HospitalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: E7H_FAQ.map((item) => ({
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
              alt="E-7 병원 비자 외국인 의료코디네이터 해외환자 상담"
              width={1400}
              height={560}
              className="aspect-[21/9] w-full object-cover object-center sm:aspect-[2.4/1]"
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption className="sr-only">병원 외국인 E-7 비자 안내용 대표 이미지</figcaption>
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
            <span className="text-white">병원 외국인 채용</span>
          </nav>
          <p className="mt-6 inline-flex rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
            병원 E-7 · 보건복지부 추천
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            병원에서 외국인을 E-7 비자로 채용하려면,
            <span className="mt-2 block">직종부터 정확히 선택해야 합니다</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-300">
            외국인환자 유치 업무를 담당할 외국인을 채용할 때 대표적으로 검토할 수 있는 직종은
            의료코디네이터 또는 상품기획전문가입니다. 두 직종은 담당업무와 외국인의 자격요건이 다르며,
            보건복지부 고용추천 절차를 먼저 검토해야 합니다.
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4 text-sm leading-relaxed text-orange-100">
            {E7H_FLOW}의 흐름이 중요합니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/visa/e7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 비자 전체 안내 보기
            </Link>
            <Link
              to="/visa/e7-1"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7-1 전문인력 안내 보기
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8 lg:space-y-16">
        <section className="-mt-2">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {E7H_HIGHLIGHTS.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-sky-400/25 bg-sky-500/[0.07] p-5"
              >
                <p className="text-sm font-semibold text-sky-100">{card.title}</p>
                <ul className="mt-3 space-y-1 text-sm leading-relaxed text-white">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            병원에 취업한다고 모두 같은 E-7 직종을 사용하는 것은 아닙니다
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            두 직종의 업무는 같지 않습니다. 단순히 외국어를 사용한다는 이유로 둘 중 아무 직종이나 선택할
            수 있는 것은 아닙니다.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            <article className="rounded-3xl border border-sky-400/25 bg-ink-950/50 p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">A</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{E7H_JOB_CARDS[0].title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">{E7H_JOB_CARDS[0].body}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-200">
                {E7H_JOB_CARDS[0].items.map((item) => (
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
            <article className="rounded-3xl border border-orange-400/25 bg-ink-950/50 p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-orange-200">B</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{E7H_JOB_CARDS[1].title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">{E7H_JOB_CARDS[1].body}</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-200">
                {E7H_JOB_CARDS[1].items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">의료코디네이터 vs 상품기획전문가</h2>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-white/10">
            <table className="min-w-[640px] w-full border-collapse text-left text-sm">
              <thead className="bg-ink-900/80 text-ink-200">
                <tr>
                  <th className="px-4 py-3 font-semibold">항목</th>
                  <th className="px-4 py-3 font-semibold">의료코디네이터</th>
                  <th className="px-4 py-3 font-semibold">상품기획전문가</th>
                </tr>
              </thead>
              <tbody>
                {E7H_COMPARE.map((row) => (
                  <tr key={row.item} className="border-t border-white/10">
                    <th className="px-4 py-3 align-top font-semibold text-white">{row.item}</th>
                    <td className="px-4 py-3 align-top text-ink-300">{row.coordinator}</td>
                    <td className="px-4 py-3 align-top text-ink-300">{row.planner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            보건복지부 추천서 발급이 E-7 자동허가를 의미하는 것은 아닙니다. 추천절차 후 출입국 심사가
            별도로 진행됩니다.
          </p>
        </section>

        <section className="rounded-3xl border border-orange-500/25 bg-warm/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            모든 병원이 동일하게 신청할 수 있는 것은 아닙니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            첨부된 두 보건복지부 지침에 따르면 신청기관 자격은 「의료 해외진출 및 외국인 환자 유치지원에
            관한 법률」 제6조 및 동법 시행규칙 제4조에 따라 등록된 기관입니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {E7H_APPLICANT_ORGS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed text-ink-200">
            병원 사업자등록만 있으면 가능하다고 보기 어렵습니다. 외국인환자 유치기관 등록 여부를 먼저
            확인해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">의료코디네이터는 어떤 일을 하나요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            보건복지부 지침은 의료코디네이터를 진료 목적으로 입국하는 외국인 환자에게 종합적인 서비스를
            제공하는 실무인력으로 정의합니다. 일반 사무직이나 일반 병원 직원과 동일하게 볼 수 없습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {E7H_COORD_DUTIES.map((item) => (
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
            누구나 의료코디네이터 E-7을 신청할 수 있는 것은 아닙니다
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            보건복지부 지침의 자격경로는 세 가지입니다. 경로를 임의로 합치지 않으며, 모든 외국인에게
            학사+1년 경력이라는 일반 E-7 공식을 적용하지 않습니다.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {E7H_COORD_PATHS.map((path) => (
              <article key={path.n} className="rounded-3xl border border-sky-400/20 bg-ink-950/50 p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{path.n}</p>
                <h3 className="mt-2 text-base font-semibold text-white">{path.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{path.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            의료코디네이터는 몇 명까지 고용할 수 있나요?
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {E7H_HEADCOUNT.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
                <h3 className="text-sm font-semibold text-ink-300">{item.title}</h3>
                <p className="mt-3 text-xl font-bold text-white">{item.value}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {E7H_HEADCOUNT_EXTRA.map((item) => (
              <article key={item.title} className="rounded-3xl border border-sky-400/20 bg-ink-900/30 p-6">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            지정 유치기관은 의료해외진출법 제14조에 따라 지정을 받은 기관입니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            병원에서 상품기획전문가로 채용하는 경우
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            보건산업분야 외국인 고용추천서 발급기준상 보건산업 분야에는 아래가 포함됩니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {E7H_INDUSTRY.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-4 text-center text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed text-ink-200">
            병원·의료서비스 분야에서 외국인환자 대상 상품·서비스, 마케팅, 사업기획, 상품개발 등 실제
            전문적인 기획업무를 수행하는 경우 상품기획전문가 직종을 검토할 수 있습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7H_PLANNER_DUTIES.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-orange-400/20 bg-ink-950/50 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-300">
            단순 통역·예약·고객안내 업무를 상품기획전문가라고 포장해서는 안 됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            상품기획전문가는 어떤 학력·경력이 필요할까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            아래는 첨부된 「보건산업분야 외국인 고용추천서 발급기준」상의 추천기준입니다. 법무부장관이
            정한 특별요건에 해당하는 자는 학력 또는 경력요건이 별도로 정해질 수 있습니다.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {E7H_PLANNER_PATHS.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-sky-400/20 bg-sky-500/[0.07] p-6">
            <h3 className="text-base font-semibold text-white">국내대학 졸업(예정) 학사 이상 특례</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              관련학과 전공자의 경우 경력 면제, 또는 해당 분야 3개월 이상 경력자의 경우 전공과 무관하게
              허용됩니다.
            </p>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">관련학과 예시</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7H_PLANNER_MAJORS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-400">
                지침에서 국문학·언어학·한국어학 등은 비관련학과 예시로 제시됩니다. ({E7H_PLANNER_NON_MAJORS.join("·")})
              </p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">관련경력 예시</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7H_PLANNER_CAREERS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-3xl border border-orange-500/25 bg-warm/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            출입국 신청 전에 보건복지부 추천절차를 확인해야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            첨부된 두 지침은 보건복지부장관의 외국인 고용추천서 발급기준을 별도로 두고 있습니다. 따라서
            병원·유치기관에서 해당 직종으로 외국인을 E-7 채용하는 경우, 외국인의 자격과 기관의 자격을 먼저
            검토하고 보건복지부 고용추천 절차를 거친 뒤 출입국 E-7 신청을 진행하는 구조입니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            보건복지부 추천서를 받으면 E-7이 자동 허가되는 것은 아닙니다. 추천서와 출입국의 체류자격 심사는
            별도 단계입니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">보건복지부 추천부터 E-7 신청까지</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7H_STEPS.map((step, i) => (
              <li key={step.n} className="relative rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{step.n}</p>
                <p className="mt-2 text-base font-semibold text-white">{step.title}</p>
                {i < E7H_STEPS.length - 1 ? (
                  <p className="mt-3 text-xs text-ink-500" aria-hidden>
                    ↓ 다음 단계
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">추천서 발급에는 얼마나 걸리나요?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-sky-400/20 bg-ink-950/50 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">처리기한</p>
              <p className="mt-3 text-2xl font-bold text-white">접수 후 10일 이내</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                제출서류에 흠결이 있거나 사실확인 등을 위한 보완기간은 처리기한에서 제외됩니다.
              </p>
            </article>
            <article className="rounded-3xl border border-orange-400/20 bg-ink-950/50 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                추천서 유효기간
              </p>
              <p className="mt-3 text-2xl font-bold text-white">발급일로부터 3개월</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                한 번 받은 추천서를 계속 사용할 수 있는 것은 아닙니다.
              </p>
            </article>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-300">
            현재 실제 접수방법, 담당부서, 연락처 등은 변경될 수 있습니다. 신청 전 보건복지부의 최신
            접수안내를 확인하세요.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            보건복지부 고용추천 신청에는 어떤 서류가 필요할까요?
          </h2>
          <p className="mt-3 text-sm text-ink-400">
            모든 신청자에게 항상 동일한 서류가 요구된다고 단정하지 않습니다. 직종과 해당 여부에 따라 달라질
            수 있습니다.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">고용기관 측</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7H_ORG_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">외국인 측</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7H_FOREIGN_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-400">
                의료코디네이터의 경우 해당되는 보건의료인 자격증 등 직종별 자격입증자료가 필요합니다.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            해외에서 발급받은 학위·경력서류도 확인해야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            첨부 지침에 따르면 외국에서 발급된 경력증명서·학위증명서 등은 외국인 본국의 아포스티유 인증
            또는 영사확인이 필요합니다. 이력서에 적은 학력·경력은 증명서류가 있는 내용만 인정됩니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {E7H_CAREER_CHECKS.map((item) => (
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
            허위 학력·경력서류는 특히 주의해야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            첨부 보건복지부 지침상 학위증명 및 경력증명 서류가 조작되거나 허위임이 발견되면 추천이 무효
            처리되고, 신청업체와 피고용인 모두 차후 5년간 보건복지부장관의 추천을 받을 수 없습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-sky-400/25 bg-sky-500/[0.07] p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">서류마다 고용기간이 다르면 안 됩니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            첨부 지침에서 아래 기간이 일치해야 한다고 명시하고 있습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {E7H_PERIOD_CHECKS.map((item) => (
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
            보건복지부 추천에서 고용사유서는 중요합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            첨부 상품기획전문가 지침의 고용사유서 양식에서는 아래 내용을 설명하도록 요구하고 있습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7H_REASON_ITEMS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-4 text-sm font-semibold text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-relaxed text-ink-200">
            단순히 외국어를 잘해서, 외국인 환자가 많아서만으로 작성하는 것이 아니라 기관의 실제 사업과
            외국인의 전문성을 연결해야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">어떤 직종으로 신청해야 할까요?</h2>
          <p className="mt-4 font-semibold text-white">
            비자가 쉬운 직종을 선택하는 것이 아니라 실제 수행할 업무에 맞는 직종을 선택해야 합니다.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-sky-400/20 bg-ink-950/50 p-6">
              <h3 className="text-base font-semibold text-white">의료코디네이터가 더 가까운 경우</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7H_CHOOSE_COORD.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-orange-400/20 bg-ink-950/50 p-6">
              <h3 className="text-base font-semibold text-white">상품기획전문가가 더 가까운 경우</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7H_CHOOSE_PLANNER.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7 의료코디네이터는 의료행위 자격이 아닙니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            의료코디네이터 E-7 체류자격 자체가 의사·간호사 등의 국내 의료행위를 허용하는 면허가 아닙니다.
            의료코디네이터 업무와 면허가 필요한 의료행위는 구분해서 봐야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-orange-500/25 bg-warm/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            2026년 E-7 임금기준도 함께 확인해야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            각 직종의 특정활동(E-7) 세부분류에 따라 2026년 법무부 임금요건을 적용해야 합니다. 의료코디네이터와
            상품기획전문가의 현재 신청 시 적용되는 세부분류와 임금은 최신 출입국 기준을 확인해야 합니다.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-orange-400/30 bg-ink-950/60 px-5 py-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                2026년 E-7-1 전문인력
              </p>
              <p className="mt-3 text-2xl font-bold tracking-tight text-white">연 3,112만원 이상</p>
            </article>
            <article className="rounded-2xl border border-orange-400/30 bg-ink-950/60 px-5 py-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                2026년 E-7-2 준전문인력
              </p>
              <p className="mt-3 text-2xl font-bold tracking-tight text-white">연 2,589만원 이상</p>
            </article>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            법무부 공고 제2025-406호 기준 · 적용기간 2026. 2. 1. ~ 2026. 12. 31. 법무부 장관이 직종별
            임금요건을 별도로 정한 경우에는 해당 별도기준이 적용될 수 있습니다.
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
            의료코디네이터가 병원을 옮길 때도 주의해야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            의료코디네이터는 고용업체별 허용인원 제한 등으로 사전관리가 필요한 직종입니다. 근무처
            변경·추가 시 단순 사후신고로 일반화하지 않고, 사전허가 여부를 확인해야 합니다.
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
          <h2 className="text-xl font-bold text-white sm:text-2xl">병원 E-7 비자에서 자주 오해하는 부분</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {E7H_MYTHS.map((item) => (
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
            {E7H_FAQ.map((item) => (
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
            이번 페이지는 보건복지부 외국인 고용추천서 발급지침 2개를 핵심 근거로 작성했습니다.
          </p>
          <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {E7H_OFFICIAL_LINKS.map((item) => (
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
            우리 병원은 어떤 E-7 직종으로 외국인을 채용해야 할까요?
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">
            외국인의 학력·경력만 보는 것이 아니라 실제 담당업무와 의료기관의 외국인환자 유치기관 등록
            여부, 의료코디네이터 고용가능 인원, 보건복지부 추천요건을 함께 확인해야 합니다.
          </p>
          <div className="mt-6">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              병원 외국인 E-7 채용 상담하기
            </Link>
          </div>
        </section>

        <aside className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-relaxed text-ink-400">
          본 페이지는 <strong className="text-ink-300">일반 안내</strong>이며 법률자문·행정 유권해석을
          대체하지 않습니다. 최종 신청·심사 기준은 보건복지부·출입국 공식 안내와{" "}
          <strong className="text-ink-300">전문가 상담</strong>을 따르세요.
        </aside>
      </div>
    </article>
  );
}
