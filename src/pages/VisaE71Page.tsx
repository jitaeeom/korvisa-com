import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  E71_APPLICANT_DOCS,
  E71_CHECKLIST,
  E71_COMPANY_CHECKS,
  E71_COMPANY_DOCS,
  E71_FAQ,
  E71_FIELDS,
  E71_PRECHECK,
  E71_REVIEW_POINTS,
} from "../data/visaE71";

const HERO_IMAGE = "/images/visas/e7.png?v=6";
const WAGE_NOTICE_URL = "https://www.moj.go.kr/bbs/immigration/211/601892/artclView.do";

export function VisaE71Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: E71_FAQ.map((item) => ({
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
              alt="E-7-1 전문인력 비자 안내"
              width={1400}
              height={560}
              className="aspect-[21/9] w-full object-cover sm:aspect-[2.4/1]"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent sm:bg-gradient-to-r sm:from-ink-950 sm:via-ink-950/70 sm:to-transparent" />
          </div>
          <figcaption className="sr-only">E-7-1 전문인력 안내용 대표 이미지</figcaption>
        </figure>
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8">
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
            <span className="text-white">E-7-1</span>
          </nav>
          <p className="mt-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
            E-7-1
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            E-7-1 전문인력 비자,
            <span className="mt-2 block">자격요건부터 회사조건까지</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-300">
            E-7-1은 전문적인 지식·기술 또는 기능을 가진 외국인이 대한민국의 관련 분야에서 근무하기 위해
            활용되는 특정활동(E-7) 전문인력 체류자격입니다. 학력이나 경력만으로 판단되는 것이 아니라,
            신청 직종, 실제 담당업무, 학력·경력과 직무의 관련성, 고용기업의 사업내용과 고용 필요성이 함께
            검토됩니다.
          </p>
          <p className="mt-4">
            <Link
              to="/visa/e7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 비자 전체 안내 보기
            </Link>
          </p>
          <p className="mt-2">
            <Link
              to="/visa/e7-workplace-change"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 근무처변경·이직 절차 확인하기 →
            </Link>
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8 lg:space-y-16">
        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-1 비자란?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            E-7 체류자격 가운데 전문인력에 해당하는 유형이 E-7-1입니다. 외국인이 보유한 전문성만 보는
            것이 아니라, 그 전문성이 한국의 해당 직무에서 실제로 필요한지, 회사의 사업과 어떻게 연결되는지를
            함께 살피는 구조입니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            2026년 법무부 자료 기준 E-7-1 전문인력은 67개 직종으로 운영되고 있습니다. 직종마다 자격
            요건과 고용 조건이 달라질 수 있어, 이 페이지에서는 전체 직종명을 나열하기보다 신청 전에 공통으로
            확인하는 축을 정리합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-1 신청 전 가장 먼저 확인할 사항</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {E71_PRECHECK.map((item, i) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-ink-900/40 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm leading-relaxed text-ink-200">
            학위가 있다는 사실만으로 E-7-1이 결정되는 것은 아닙니다. 전공·경력과 신청 직종 및 실제
            수행업무의 관련성을 함께 검토하는 것이 중요합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-1 학력·경력은 어떻게 검토할까?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            학력·경력은 보통 다음처럼 함께 살펴보는 경우가 많습니다. 다만 직종 및 신청 유형에 따라 세부
            기준과 특례가 달라질 수 있으므로, 모든 신청자에게 일률적으로 적용되는 것은 아닙니다.
          </p>
          <ul className="mt-5 space-y-3 text-ink-300">
            {[
              "관련 분야 석사 이상 학위",
              "관련 분야 학사 학위와 관련 경력",
              "학위가 없는 경우 관련 분야 장기 경력",
              "국내 대학 졸업자 등에 적용될 수 있는 특례",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            개별 직종별 자격요건 확인이 필요합니다. 같은 학력이라도 신청 직종과 실제 업무가 다르면 판단이
            달라질 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-1에는 어떤 직종이 있을까?</h2>
          <p className="mt-3 text-sm text-ink-400">
            아래는 대표적인 분야 구분입니다. 세부 직종코드는 신청 시점의 공식 안내를 기준으로 확인해야
            합니다.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {E71_FIELDS.map((field) => (
              <article
                key={field.id}
                id={field.id}
                className="rounded-3xl border border-white/10 bg-ink-900/40 p-6"
              >
                <h3 className="text-base font-semibold text-white">{field.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{field.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">외국인을 채용하는 회사도 확인해야 합니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            E-7-1은 외국인 개인의 학력·경력만으로 결정되지 않습니다. 고용기업과 채용 직무가 함께
            검토되며, 회사가 왜 그 전문인력이 필요한지가 서류와 실제 사업내용에서 드러나야 합니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {E71_COMPANY_CHECKS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-ink-200"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-300">
            회사 규모가 작다는 이유만으로 일률적으로 신청이 불가능한 것은 아니며, 직종별 기준과 회사의
            실제 사업내용을 함께 검토해야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-orange-500/25 bg-warm/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">2026년 E-7-1 임금기준</h2>
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
            법무부 장관이 별도의 임금기준을 정한 직종은 해당 직종의 기준이 적용될 수 있습니다.
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
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-1 비자 준비서류</h2>
          <p className="mt-3 text-sm text-ink-400">
            실제 제출서류는 신청 유형·직종·회사 및 신청자의 상황에 따라 달라질 수 있습니다.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">외국인 측 주요서류</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E71_APPLICANT_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">회사 측 주요서류</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E71_COMPANY_DOCS.map((item) => (
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
          <h2 className="text-xl font-bold text-white sm:text-2xl">국내 체류자 변경과 해외 인재 초청</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">국내 체류</p>
              <h3 className="mt-2 text-lg font-semibold text-white">국내 체류 외국인</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                현재 체류자격에서 E-7-1으로 체류자격 변경을 검토하는 경우입니다. 지금 가진 체류자격,
                체류기간, 담당하려는 업무와 고용계약 내용에 따라 준비 서류와 절차가 달라질 수 있습니다.
              </p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">해외 초청</p>
              <h3 className="mt-2 text-lg font-semibold text-white">해외 체류 외국인</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                고용계약 후 사증발급인정 등 필요한 절차를 거쳐 한국 입국을 준비하는 경우입니다. 입국 전
                단계와 입국 후 체류 절차가 나뉘며, 신청 상황에 따라 세부 순서가 달라질 수 있습니다.
              </p>
            </article>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-1 심사에서 자주 확인되는 부분</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            실무에서는 스펙의 나열보다, 직종·업무·회사 사업이 하나의 이야기로 연결되는지가 중요합니다.
            서류 사이 설명이 어긋나면 학력이나 경력이 있어도 보완 요청이나 불허로 이어질 수 있습니다.
          </p>
          <ul className="mt-6 space-y-3 text-ink-300">
            {E71_REVIEW_POINTS.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-orange-300" aria-hidden>
                  →
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-1 신청 전 체크리스트</h2>
          <ul className="mt-6 space-y-3">
            {E71_CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-ink-900/30 px-4 py-3 text-sm text-ink-200"
              >
                <span className="mt-0.5 shrink-0 text-sky-200" aria-hidden>
                  □
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">자주 묻는 질문(FAQ)</h2>
          <div className="mt-6 space-y-3">
            {E71_FAQ.map((item) => (
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

        <section className="rounded-3xl border border-white/10 bg-ink-900/30 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7-1 가능 여부, 신청 전에 먼저 확인하세요
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">
            외국인의 학력·경력과 담당업무, 회사의 사업내용을 함께 검토해야 보다 정확한 판단이 가능합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              E-7 비자 상담하기
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
