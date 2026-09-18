import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  E7WC_ALREADY_MOVED_CHECKS,
  E7WC_APPLICANT_DOCS,
  E7WC_COMPANY_DOCS,
  E7WC_COMPARE,
  E7WC_EXCLUDED_JOBS,
  E7WC_FAQ,
  E7WC_NEW_COMPANY_CHECKS,
  E7WC_OFFICIAL_LINKS,
  E7WC_QUICK_CHECKS,
  E7WC_SITUATION_DOCS,
  E7WC_STEPS,
} from "../data/visaE7WorkplaceChange";

const HERO_IMAGE = "/images/visas/e7.png?v=6";

export function VisaE7WorkplaceChangePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: E7WC_FAQ.map((item) => ({
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
              alt="E-7 근무처변경·이직 안내"
              width={1400}
              height={560}
              className="aspect-[21/9] w-full object-cover sm:aspect-[2.4/1]"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent sm:bg-gradient-to-r sm:from-ink-950 sm:via-ink-950/70 sm:to-transparent" />
          </div>
          <figcaption className="sr-only">E-7 근무처변경 안내용 대표 이미지</figcaption>
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
            <span className="text-white">근무처변경</span>
          </nav>
          <p className="mt-6 inline-flex rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
            E-7 이직 · 근무처변경
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            E-7 이직·근무처변경,
            <span className="mt-2 block">먼저 &apos;허가&apos;인지 &apos;신고&apos;인지 확인하세요</span>
          </h1>
          <p className="mt-4 max-w-3xl rounded-2xl border border-sky-400/25 bg-sky-500/[0.08] px-4 py-3 text-sm leading-relaxed text-sky-100">
            새 회사에 출근하기 전에 내 근무처변경 방식부터 확인하는 것이 중요합니다.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-300">
            E-7 비자를 가지고 있다고 해서 모든 외국인이 회사를 옮긴 뒤 신고만 하면 되는 것은 아닙니다.
            E-7 세부 직종과 퇴직 상황 등에 따라 근무처 변경 전에 허가가 필요한 경우와 변경 후 신고할 수
            있는 경우가 구분됩니다.
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
              E-7-1 전문인력 자세히 보기
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8 lg:space-y-16">
        <section className="-mt-2 rounded-3xl border border-sky-400/25 bg-sky-500/[0.07] p-6 shadow-soft sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7 이직 전 먼저 확인하세요</h2>
          <p className="mt-2 text-sm text-ink-400">출근일보다 먼저, 허가인지 신고인지를 짚어 보세요.</p>
          <ul className="mt-6 space-y-2.5">
            {E7WC_QUICK_CHECKS.map((item) => (
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
            E-7 근무처변경은 직종과 퇴직 상황에 따라 처리방식이 달라질 수 있습니다. 15일이라는 신고기한만
            보고 먼저 이직해서는 안 됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">사전허가와 사후신고, 무엇이 다른가요?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {E7WC_COMPARE.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm leading-relaxed text-ink-300">
            사후신고가 가능한지는 단순히 E-7이라는 사실만으로 결정되지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            &apos;E-7은 15일 안에 신고하면 된다&apos;는 말이 항상 맞을까?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            아닙니다. 15일은 신고제 적용대상자가 근무처를 변경하거나 추가한 경우의 신고기한입니다.
            사전허가 대상이라면 &quot;먼저 이직하고 15일 안에 신고&quot;라는 방식으로 처리해서는 안 됩니다.
          </p>
          <aside className="mt-6 rounded-3xl border border-sky-400/30 bg-sky-500/[0.08] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">확인</p>
            <p className="mt-2 text-lg font-semibold text-white">
              15일 = 모든 E-7 이직자의 공통 유예기간이 아닙니다.
            </p>
          </aside>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            사후신고 방식이 적용되지 않는 E-7 직종도 있습니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            법무부 고시를 기준으로 E-7 신고제 적용제외 대상으로 명시된 직종입니다. 아래 표는 고시 문언을
            읽기 쉽게 정리한 것이며, E-7의 모든 사전허가 대상 직종을 영구적으로 확정한 표는 아닙니다.
          </p>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <caption className="sr-only">E-7 신고제 적용제외 직종</caption>
              <thead className="bg-white/5 text-ink-200">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    직종
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    코드
                  </th>
                </tr>
              </thead>
              <tbody>
                {E7WC_EXCLUDED_JOBS.map((row) => (
                  <tr key={row.code} className="border-t border-white/10">
                    <th scope="row" className="px-4 py-3 font-medium text-white sm:px-5">
                      {row.name}
                    </th>
                    <td className="px-4 py-3 text-ink-300 sm:px-5">{row.code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            <Link
              to="/visa/e7-chef"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 요리사·주방장 초청조건 확인하기 →
            </Link>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            해외영업원이라고 해서 모두 해당하는 것이 아니라, 고시 문언에 따라 해외영업원(2742) 중 해외
            온라인상품판매원을 구분합니다. 최신 법령·고시 및 신청자의 구체적인 활동내용은 신청 시점에 다시
            확인해야 합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            예를 들어 E-7 기계공학기술자가 이직한다면?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            기계공학기술자(2351)는 위 신고제 적용제외 직종에 포함되어 있습니다. 따라서 단순히 새 회사에
            입사한 뒤 15일 안에 근무처변경 신고를 하면 된다고 판단해서는 안 됩니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            새 회사의 업종, 직무내용, 외국인의 학력·경력, 고용계약 및 E-7 고용요건 등을 검토한 후
            근무처변경 절차를 진행해야 합니다. 이 예시는 실무적으로 자주 묻는 경우를 설명하기 위한 것이며,
            특정 사건의 허가를 보장하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            기존 E-7이 있어도 새 회사의 조건을 다시 봅니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            기존 회사에서 E-7 허가를 받았다는 이유만으로 새 회사에서 자동으로 E-7 활동이 인정되는 것은
            아닙니다. 새 근무처에서도 아래 사항을 확인해야 합니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {E7WC_NEW_COMPANY_CHECKS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-3 text-sm text-ink-200"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            모든 E-7 직종에 동일한 회사요건이나 고용인원 제한이 있는 것은 아닙니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            같은 E-7 직종으로 이직하면 무조건 가능한가요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            같은 직종으로 이동하는 것은 새로운 직종으로 변경하는 경우보다 검토구조가 단순할 수 있습니다.
            다만 동일 직종이라는 이유만으로 근무처변경이 자동 허가 또는 자동 신고수리되는 것은 아닙니다.
            새 회사의 사업내용, 실제 담당업무, 근로조건, 직종별 고용요건 등을 함께 검토해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">이직하면서 E-7 직종까지 바뀐다면?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            기존 E-7 직종과 새 회사에서 수행할 E-7 직종이 다르다면 단순한 회사명 변경 문제로 생각해서는 안
            됩니다. 새로운 활동의 직종코드, 외국인의 학력·경력, 새 회사의 사업내용과 직무, 해당 직종의 별도
            요건 등을 다시 검토해야 합니다. 필요한 체류절차가 단순 근무처변경과 달라질 수 있으므로 사전에
            확인해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">중도퇴사라면 퇴직사유도 중요합니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            신고제 적용요건에서는 본인의 귀책사유로 해고되거나 계약기간 중 중도퇴직한 경우의 처리에
            주의해야 합니다. 특히 원 고용주의 이적동의를 받지 못하는 경우 신고제 적용에서 제외될 수
            있습니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            반면 고용계약기간 만료, 사업장의 휴업·폐업 등 외국인의 귀책으로 보기 어려운 사정은 동일하게
            취급되지 않을 수 있습니다. 자진퇴사하면 E-7 이직이 무조건 불가능하다거나, 이적동의서가 항상
            필요하다고 단정하지는 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">이적동의서는 언제 필요할까?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            원 근무처장의 동의서가 근무처변경 과정에서 요구될 수 있습니다. 다만 시행규칙상 고용계약기간
            만료, 휴업·폐업 등 일정한 경우에는 제출 예외가 있을 수 있습니다. 실제 제출 필요 여부는
            퇴직사유와 신청유형을 함께 확인해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            근무처변경 전에 새 회사에서 먼저 일해도 될까요?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            사전허가 대상이라면 허가 전에 새 근무처에서 E-7 활동을 시작하는 것은 체류자격 관련 문제가
            발생할 수 있습니다. 먼저 근무처변경 절차를 확인해야 합니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            사후신고 대상도 자신이 실제 신고대상인지 확인하지 않은 상태에서 &quot;15일 이내니까 괜찮다&quot;고
            임의로 판단하는 것은 위험합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            이미 이직했는데 근무처변경을 하지 않았다면?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">먼저 아래 항목부터 확인해야 합니다.</p>
          <ol className="mt-6 space-y-2 text-sm text-ink-100">
            {E7WC_ALREADY_MOVED_CHECKS.map((item, i) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-ink-900/40 px-4 py-3">
                <span className="font-semibold text-sky-300">{String(i + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            신고기한을 넘겼거나 사전허가가 필요한 상황에서 먼저 근무한 경우에는, 일반적인 정상 근무처변경
            사건과 다르게 검토해야 할 수 있습니다. 개별 사건의 처분이나 벌금액을 확정적으로 예측하지는
            않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            회사를 완전히 옮기지 않고 근무처를 추가하는 경우는?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            근무처 변경뿐 아니라 기존 근무처를 유지하면서 다른 근무처에서 E-7 활동을 추가하는 경우에도
            근무처 추가 절차를 확인해야 합니다. 투잡이면 무조건 가능하거나 불가능하다고 단정하지는 않습니다.
            추가하려는 활동이 현재 E-7 체류자격 범위에 해당하는지와 허가/신고 대상 여부를 먼저 검토해야
            합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7-4 숙련기능인력의 이직은 별도로 확인하세요
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            E-7-4 숙련기능인력 계열은 신고제 적용제외 대상에 포함되어 있으며, 근무처변경과 관련한 별도
            요건과 정책 변경도 있습니다. 일반 E-7-1 전문인력의 이직과 동일한 기준으로 단순화해서는 안
            됩니다.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <Link
              to="/visa/e7-4"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7-4 숙련기능인력 자격조건 자세히 보기 →
            </Link>
            <Link
              to="/visa/e7-4r"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7-4R 지역특화형 숙련기능인력 자세히 보기 →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            E-7 근무처변경에는 어떤 서류가 필요할까?
          </h2>
          <p className="mt-3 text-sm text-ink-400">
            아래는 일반적인 검토자료입니다. 모든 신청자가 위 서류를 전부 제출하는 것은 아닙니다.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">외국인</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7WC_APPLICANT_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">새 회사</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7WC_COMPANY_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">상황에 따라</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {E7WC_SITUATION_DOCS.map((item) => (
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
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7 근무처변경 절차</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {E7WC_STEPS.map((step, i) => (
              <li key={step.n} className="relative rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{step.n}</p>
                <p className="mt-2 text-base font-semibold text-white">{step.title}</p>
                {i < E7WC_STEPS.length - 1 ? (
                  <p className="mt-3 text-xs text-ink-500" aria-hidden>
                    → 다음 단계
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            사전허가 대상과 사후신고 대상의 실제 순서와 준비사항이 완전히 같지는 않습니다. 방식 결정
            이후의 서류와 접수 시점은 유형에 따라 달라질 수 있습니다.
          </p>
        </section>

        <aside className="rounded-3xl border border-sky-400/30 bg-sky-500/[0.08] p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">이직 날짜부터 정하기 전에 확인할 것</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            E-7 외국인이 새 회사와 근로계약서를 작성할 때는 실제 근무 시작일을 정하기 전에 근무처변경이
            사전허가 대상인지 확인하는 것이 안전합니다. 특히 사전허가 대상이라면 입사일과 허가신청 일정이
            서로 맞지 않아 문제가 생기지 않도록 준비해야 합니다.
          </p>
        </aside>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">자주 묻는 질문(FAQ)</h2>
          <div className="mt-6 space-y-3">
            {E7WC_FAQ.map((item) => (
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

        <section className="rounded-3xl border border-white/10 bg-black/25 p-6 sm:p-8">
          <h2 className="text-base font-semibold text-white">공식자료 확인</h2>
          <p className="mt-2 text-sm text-ink-400">
            법령과 고시는 개정될 수 있으므로 신청 시점의 최신 기준을 확인해야 합니다.
          </p>
          <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {E7WC_OFFICIAL_LINKS.map((item) => (
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
            E-7 이직, 새 회사에 출근하기 전에 확인하세요
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">
            현재 E-7 직종과 퇴직사유, 새 회사의 업무 및 고용조건을 확인하면 근무처변경이 사전허가인지
            사후신고인지부터 검토할 수 있습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              E-7 근무처변경 상담하기
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
