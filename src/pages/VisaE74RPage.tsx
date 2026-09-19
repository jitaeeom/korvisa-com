import { useEffect } from "react";
import { Link } from "react-router-dom";
import { JobServiceCta } from "../components/JobServiceCta";
import {
  E74R_APPLICANT_DOCS,
  E74R_COMPARE_ROWS,
  E74R_COMPANY_CHECKS,
  E74R_COMPANY_DOCS,
  E74R_FAQ,
  E74R_LOCAL_DOCS,
  E74R_OFFICIAL_LINKS,
  E74R_QUICK_CHECKS,
  E74R_REGION_CHECKS,
  E74R_STEPS,
} from "../data/visaE74r";

const HERO_IMAGE = "/images/e7-4r-hero.png";

export function VisaE74RPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: E74R_FAQ.map((item) => ({
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
              alt="E-7-4R 지역특화형 숙련기능인력 제조업 외국인 근로자"
              width={1400}
              height={560}
              className="aspect-[21/9] w-full object-cover object-center sm:aspect-[2.4/1]"
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption className="sr-only">E-7-4R 지역특화형 숙련기능인력 안내용 대표 이미지</figcaption>
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
            <span className="text-white">E-7-4R</span>
          </nav>
          <p className="mt-6 inline-flex rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200">
            E-7-4R · 지역특화형
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            2026 E-7-4R 지역특화형 숙련기능인력,
            <span className="mt-2 block">2년 체류부터 지역 정착의 기회를 확인하세요</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-300">
            E-7-4R은 인구감소지역 및 인구감소관심지역에서 숙련 외국인근로자의 장기 취업과 지역 정착을
            지원하기 위한 지역특화형 체류자격입니다. 일반 E-7-4와 달리 지역요건과 지자체 추천 등을 함께
            확인해야 합니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/visa/e7"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 비자 전체 안내 보기
            </Link>
            <Link
              to="/visa/e7-4"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              일반 E-7-4 숙련기능인력 자세히 보기 →
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8 lg:space-y-16">
        <section className="-mt-2 rounded-3xl border border-emerald-400/25 bg-emerald-500/[0.07] p-6 shadow-soft sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4R 신청 전 빠른 확인</h2>
          <p className="mt-2 text-sm text-ink-400">점수보다 먼저, 지역·기업·지자체 조건을 짚어 보세요.</p>
          <ul className="mt-6 space-y-2.5">
            {E74R_QUICK_CHECKS.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-ink-950/50 px-4 py-3 text-sm leading-relaxed text-ink-100"
              >
                <span className="mt-0.5 shrink-0 text-emerald-200" aria-hidden>
                  □
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-300">
            E-7-4R은 외국인 개인의 점수뿐 아니라 근무지역, 기업, 지자체 추천 및 지역 정착요건을 함께
            확인해야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4R 지역특화형 숙련기능인력이란?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            2025년 신설된 지역특화형 숙련기능인력 제도입니다. E-9 비전문취업, E-10 선원취업, H-2
            방문취업 등의 숙련 외국인근로자가 지역 기업에서 장기적으로 근무하고 정착할 수 있도록, 일반
            E-7-4와 다른 특례요건을 적용합니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            2026년에도 지역특화형 비자사업으로 운영되고 있습니다. 체류경력만 보는 제도가 아니라, 대상지역과
            지자체 추천을 전제로 하는 지역 정착형 체류자격입니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4와 E-7-4R, 무엇이 다른가요?</h2>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <caption className="sr-only">일반 E-7-4와 지역특화형 E-7-4R 비교</caption>
              <thead className="bg-white/5 text-ink-200">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    비교 항목
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    일반 E-7-4
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    E-7-4R
                  </th>
                </tr>
              </thead>
              <tbody>
                {E74R_COMPARE_ROWS.map((row) => (
                  <tr key={row.item} className="border-t border-white/10 align-top">
                    <th scope="row" className="px-4 py-3 font-semibold text-white sm:px-5">
                      {row.item}
                    </th>
                    <td className="px-4 py-3 text-ink-300 sm:px-5">{row.e74}</td>
                    <td className="px-4 py-3 text-ink-300 sm:px-5">{row.e74r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm leading-relaxed text-ink-300">
            2년만 채우면 허가된다는 의미가 아닙니다. 체류경력은 기본 구조일 뿐, 지역·기업·지자체 추천과
            출입국 심사를 함께 확인해야 합니다.
          </p>
          <p className="mt-4">
            <Link
              to="/visa/e7-4"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              일반 E-7-4 숙련기능인력 자세히 보기 →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7-4R은 어느 지역에서 신청할 수 있을까?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            E-7-4R은 전국 어디에서나 가능한 비자가 아닙니다. 2026년 법무부 정책자료 기준, 인구감소지역뿐
            아니라 인구감소관심지역까지 포함해 운영되는 제도입니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            2025년 제도 확대 당시 기준으로 인구감소지역 89곳과 인구감소관심지역 18곳, 총 107개 지역으로
            대상 범위가 확대되었습니다. 그렇다고 107개 모든 지역에서 언제든 신청할 수 있는 것은 아닙니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-300">
            실제 추천사업 운영 여부, 지역별 배정인원(쿼터), 접수기간 및 잔여인원은 각 광역·기초지자체
            공고를 확인해야 합니다.
          </p>
          <aside className="mt-6 rounded-3xl border border-emerald-400/30 bg-emerald-500/[0.08] p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">내 회사가 있는 지역부터 확인하세요</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              E-7-4R은 회사 소재지가 어느 지역인지가 중요합니다. 같은 광역자치단체 안에서도 대상지역
              여부와 지자체별 모집상황이 다를 수 있습니다.
            </p>
            <ol className="mt-5 space-y-2 text-sm text-ink-100">
              {E74R_REGION_CHECKS.map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="font-semibold text-emerald-200">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs text-ink-400">
              변동 가능한 지역별 쿼터 숫자는 이 페이지에 고정해 두지 않습니다. 신청 시점의 지자체 공고를
              확인하세요.
            </p>
          </aside>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4R은 왜 &apos;2년&apos;이 중요한가?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            최근 10년간 E-9, E-10, H-2 등 대상 체류자격으로 2년 이상 체류한 사람이 기본 대상입니다.
            단순히 대한민국에 2년 거주했다는 의미가 아니라, 대상 체류자격으로 적법하게 체류·취업한 경력을
            확인해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">현재 회사에서 얼마나 근무해야 할까?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            2026년 실제 지자체 공고에서 현재 사업장 1년 이상 근무를 중요한 추천요건으로 운영하는 사례가
            있습니다. 다만 지역별 공고와 최신 지침을 확인해야 하므로, 전국 모든 신청자에게 완전히 동일한
            조건이라고 단정하지는 않습니다.
          </p>
          <aside className="mt-6 rounded-3xl border border-sky-400/30 bg-sky-500/[0.08] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">2026 변경사항</p>
            <h3 className="mt-2 text-lg font-semibold text-white">근무처 변경 시 근무기간 합산</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              사업주 귀책사유 등 외국인근로자에게 책임이 없는 사유로 근무처를 변경한 경우, 일부 최신 지침
              및 지자체 공고에서는 직전 근무처와 현재 근무처의 근무기간을 합산해 근무기간 요건을 판단할 수
              있도록 개선되었습니다.
            </p>
            <p className="mt-4 text-xs text-ink-400">모든 자진퇴사가 합산되는 것은 아닙니다.</p>
          </aside>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7-4R의 임금과 근로계약도 확인해야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            지역특화형 숙련기능인력은 일정 수준 이상의 임금과 장기 근로계약을 요구합니다. 2026년 지자체
            공고에서 2년 이상의 근로계약을 요구하는 구조가 확인됩니다. 업종별 임금기준은 변경될 수 있어
            모든 업종에 하나의 숫자를 적용하지 않습니다.
          </p>
          <aside className="mt-6 rounded-3xl border border-sky-400/30 bg-sky-500/[0.08] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
              2026년 최신 확인사항
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">농·축산업, 어업, 내항상선 급여 기준</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              2026년 8월 지침 개정에 따라 농·축산업, 어업, 내항상선 종사자의 급여 기준액이 연 2,500만원에서
              연 2,589만원으로 변경된 최신 지자체 공고 사례가 있습니다. 신청 시점과 업종에 맞는 최신 기준을
              반드시 확인해야 합니다.
            </p>
          </aside>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">한국어 능력과 점수도 심사합니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            E-7-4R도 K-point E-7-4 체계와 연계되어 한국어 능력과 점수제 요건 등을 검토합니다. 2026년
            지자체 공고에서 TOPIK 2급 또는 이에 준하는 한국어 능력을 기준으로 운영하는 사례가 있습니다.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            지역 또는 한시적 특례에 따라 한국어 요건 적용이 달라질 수 있습니다. 전국 공통으로 무조건 TOPIK
            2급이라고 단정하지 않으며, 이 페이지에서는 과거 점수표 숫자를 옮기지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4R은 지자체 추천이 중요합니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            일반 E-7-4와 구별되는 핵심요소 중 하나는, 지역특화형 비자사업을 운영하는 지방자치단체의 추천
            절차입니다. 지자체 추천이 곧 출입국 허가는 아니며, 최종 체류자격 변경 허가는 출입국 심사를
            거칩니다.
          </p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {["외국인·기업 요건 확인", "기초지자체 등에 추천 신청", "지자체 심사", "추천", "출입국 체류자격 변경 신청"].map(
              (step, i) => (
                <li key={step} className="rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                  <p className="text-xs font-semibold tracking-[0.16em] text-emerald-300">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">{step}</p>
                </li>
              ),
            )}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            지역에 따라 접수기관과 세부절차가 달라질 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7-4R으로 변경하면 지역에서 얼마나 근무해야 할까?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            E-7-4R은 지역 정착을 목적으로 하는 제도이므로, 추천지역에서 일정 기간 거주·취업해야 합니다.
            현재 운영자료에서는 숙련기능인력의 지역 거주·취업 제한기간이 3년으로 안내되고 있습니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            일정 기간 경과 후 같은 광역자치단체 내 다른 대상지역으로 이동할 수 있는 제도가 있을 수
            있습니다. 실제 이동 가능 여부는 최신 체류관리 지침을 확인해야 하며, 3년 동안 절대 한 회사에서만
            근무해야 한다고 단정하지는 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4R 외국인을 채용하려는 기업이라면</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            E-7-4R은 외국인 개인의 조건만 확인해서는 판단하기 어렵습니다. 회사 소재지와 지자체 추천 운영
            여부부터 함께 봐야 합니다.
          </p>
          <ul className="mt-6 space-y-2.5">
            {E74R_COMPANY_CHECKS.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-3 text-sm leading-relaxed text-ink-100"
              >
                <span className="mt-0.5 shrink-0 text-emerald-200" aria-hidden>
                  □
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">현재 구직 중이라면 E-7-4R이 가능할까?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            일부 지역 운영자료에서는 인구감소지역의 경우 구직 중인 외국인에게도 구직등록 등 일정 조건
            아래 신청 기회를 두는 사례가 있습니다. 다만 인구감소지역과 인구감소관심지역, 그리고 각 지자체
            공고에 따라 조건이 달라질 수 있어 구직자도 모두 신청 가능하다고 일반화하지는 않습니다.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            취업 정보를 미리 정리해 두는 것은 도움이 될 수 있습니다. 다만 Korvisa의 구직 정보 등록은
            정부기관의 구직등록필증이나 법정 구직등록 절차를 대체하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4R 신청에는 어떤 서류가 필요할까?</h2>
          <p className="mt-3 text-sm text-ink-400">
            실제 목록은 지역별 공고와 신청자의 상황에 따라 달라질 수 있습니다.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">외국인</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E74R_APPLICANT_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">기업</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E74R_COMPANY_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">지자체 추천</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E74R_LOCAL_DOCS.map((item) => (
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
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7-4R 변경 절차</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E74R_STEPS.map((step, i) => (
              <li key={step.n} className="relative rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-emerald-300">{step.n}</p>
                <p className="mt-2 text-base font-semibold text-white">{step.title}</p>
                {i < E74R_STEPS.length - 1 ? (
                  <p className="mt-3 text-xs text-ink-500" aria-hidden>
                    → 다음 단계
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            개별 신청 유형과 지자체 공고에 따라 실제 절차와 준비사항은 달라질 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">자주 묻는 질문(FAQ)</h2>
          <div className="mt-6 space-y-3">
            {E74R_FAQ.map((item) => (
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
            위 FAQ는 일반 안내입니다. 최종 판단은 공식 안내, 지자체 공고와 전문가 상담을 통해 확인하시기
            바랍니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-black/25 p-6 sm:p-8">
          <h2 className="text-base font-semibold text-white">공식 자료 확인</h2>
          <p className="mt-2 text-sm text-ink-400">
            법무부 출입국·외국인정책본부 자료를 함께 확인하세요. 지역별 신청은 각 광역·기초지자체의 최신
            공고를 반드시 확인해야 합니다.
          </p>
          <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {E74R_OFFICIAL_LINKS.map((item) => (
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
          heading="E-7-4R 지역 취업·채용을 준비하고 있나요?"
          description="지역특화형 숙련기능인력은 외국인의 조건뿐 아니라 근무할 지역과 기업의 조건도 중요합니다. 구직자는 취업 정보를 등록하고, 기업은 필요한 외국인 인력 조건을 등록할 수 있습니다."
        />

        <section className="rounded-3xl border border-white/10 bg-ink-900/30 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7-4R 가능 여부, 지역과 회사 조건부터 확인하세요
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">
            체류·근무경력뿐 아니라 회사 소재지, 지자체 추천, 고용조건과 지역 정착요건까지 함께 검토해야
            정확한 신청 가능성을 판단할 수 있습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              E-7-4R 비자 상담하기
            </Link>
            <Link
              to="/visa/e7-4"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              일반 E-7-4 안내 보기
            </Link>
          </div>
        </section>

        <aside className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-relaxed text-ink-400">
          본 페이지는 <strong className="text-ink-300">일반 안내</strong>이며 법률자문·행정 유권해석을
          대체하지 않습니다. 최종 신청·심사 기준은 출입국·법무부, 해당 지자체 공고와{" "}
          <strong className="text-ink-300">전문가 상담</strong>을 따르세요.
        </aside>
      </div>
    </article>
  );
}
