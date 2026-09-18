import { useEffect } from "react";
import { Link } from "react-router-dom";
import { JobServiceCta } from "../components/JobServiceCta";
import {
  D10E7_APPLICANT_DOCS,
  D10E7_APPLY_DOCS,
  D10E7_COMPANY_CHECKS,
  D10E7_COMPANY_DOCS,
  D10E7_EDUCATION,
  D10E7_FAQ,
  D10E7_MYTHS,
  D10E7_OFFICIAL_LINKS,
  D10E7_QUICK_CHECKS,
  D10E7_REVIEW_PILLARS,
  D10E7_STEPS,
  D10E7_WAGES,
} from "../data/visaD10ToE7";

const HERO_IMAGE = "/images/visas/e7.png?v=6";

export function VisaD10ToE7Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: D10E7_FAQ.map((item) => ({
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
              alt="D-10에서 E-7 취업비자 변경 안내"
              width={1400}
              height={560}
              className="aspect-[21/9] w-full object-cover sm:aspect-[2.4/1]"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent sm:bg-gradient-to-r sm:from-ink-950 sm:via-ink-950/70 sm:to-transparent" />
          </div>
          <figcaption className="sr-only">D-10 구직비자에서 E-7 취업비자 변경 안내용 대표 이미지</figcaption>
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
            <span className="text-white">D-10 → E-7</span>
          </nav>
          <p className="mt-6 inline-flex rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
            D-10 → E-7
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            D-10에서 E-7 취업비자로 변경,
            <span className="mt-2 block">취업했다고 바로 되는 것은 아닙니다</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-300">
            D-10 구직자가 취업할 회사를 찾았다면 외국인의 학력·경력뿐 아니라 실제 담당업무가 어느 E-7
            직종에 해당하는지, 회사가 해당 외국인을 고용할 수 있는지, 임금과 직종별 요건까지 함께 확인해야
            합니다.
          </p>
          <p className="mt-5 max-w-3xl rounded-2xl border border-sky-400/20 bg-sky-500/10 px-5 py-4 text-sm leading-relaxed text-sky-100">
            회사부터 정하기보다 E-7 직종과 외국인·기업 요건을 함께 확인하는 것이 중요합니다.
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
              E-7 전문인력 자격조건 자세히 보기 →
            </Link>
            <Link
              to="/visa/d10"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              D-10 구직비자 자격·기간·인턴 자세히 보기 →
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8 lg:space-y-16">
        <section className="-mt-2 rounded-3xl border border-sky-400/25 bg-sky-500/[0.07] p-6 shadow-soft sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10에서 E-7 변경 전 먼저 확인하세요</h2>
          <ul className="mt-6 space-y-2.5">
            {D10E7_QUICK_CHECKS.map((item) => (
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
            D-10에서 E-7 변경은 외국인 조건만으로 판단하지 않습니다. 외국인 + 직종 + 회사 + 근로조건을
            함께 검토해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10에서 E-7, 무엇을 심사할까?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {D10E7_REVIEW_PILLARS.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{item.n}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm leading-relaxed text-ink-300">
            네 가지 중 하나만 맞는다고 E-7 변경이 자동으로 허가되는 것은 아닙니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">내 학력이라면 경력이 얼마나 필요할까?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {D10E7_EDUCATION.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.body}</p>
                <p className="mt-4 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-xs leading-relaxed text-ink-400">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            위 내용은 E-7의 일반적인 학력·경력 기본요건 및 특례입니다. 개별 E-7 직종에 별도 자격기준이
            있다면 그 기준도 확인해야 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            국내 전문대와 4년제 대학 졸업자는 무엇이 다른가요?
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">국내 전문대</p>
              <h3 className="mt-2 text-lg font-semibold text-white">국내 전문대학 졸업(예정)</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                전공 관련 E-7 직종 취업 시 경력요건 면제 특례를 검토할 수 있습니다. 전공과 무관하게
                면제된다고 보기는 어렵습니다.
              </p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">국내 학사 이상</p>
              <h3 className="mt-2 text-lg font-semibold text-white">국내 대학 학사 이상 졸업(예정)</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">
                전공과 무관하게 일반적인 1년 경력요건 면제 특례를 검토할 수 있습니다. 이는 경력요건 특례에
                관한 것이며, 아무 E-7 직종이나 자동 허가된다는 뜻이 아닙니다.
              </p>
            </article>
          </div>
          <p className="mt-5 rounded-2xl border border-orange-400/20 bg-orange-500/10 px-5 py-4 text-sm leading-relaxed text-orange-100">
            국내 전문대 졸업자에게는 전공 관련성이 특히 중요합니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            한국 대학을 졸업했는데 전공과 취업직종이 다르면?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            국내 대학 학사 이상 졸업자의 경우 전공과 무관하게 일반적인 1년 경력요건 면제 특례를 검토할 수
            있습니다. 다만 한국에서 학사만 졸업했다고 해서 전공과 상관없이 E-7이 되는 것은 아닙니다.
          </p>
          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-ink-300">
            <li className="flex gap-3">
              <span className="text-sky-300" aria-hidden>
                →
              </span>
              <span>실제 담당업무가 E-7 직종에 해당해야 합니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-300" aria-hidden>
                →
              </span>
              <span>해당 직종의 별도 자격기준을 확인해야 합니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-300" aria-hidden>
                →
              </span>
              <span>회사의 사업내용과 직무의 연결성을 검토해야 합니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-300" aria-hidden>
                →
              </span>
              <span>임금 및 고용요건도 확인해야 합니다.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">해외대학 졸업자는 기준이 다를 수 있습니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            일반적인 해외대 학사 졸업자는 국내대학 졸업자 특례를 그대로 적용하는 것이 아니라, 관련 전공 +
            관련 경력 등 일반 E-7 기본요건을 먼저 검토합니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            다만 최근에는 일정한 해외 유망인재, 우수 해외대학 졸업자, 특정 전문인력 육성사업 대상자 등에
            대해 별도의 E-7 특례가 운영될 수 있으므로 특례 대상 여부를 별도로 확인해야 합니다.
          </p>
          <aside className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-5">
            <h3 className="text-sm font-semibold text-white">해외대 졸업자도 특례가 있을 수 있습니다</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              법무부는 해외 유망인재 유형에 따라 D-10 점수제·재정요건 특례 및 E-7 심사 시 전공·경력요건
              또는 경력요건을 면제하는 제도를 운영하고 있습니다. 따라서 해외대학 졸업자는 학교, 전공, 나이,
              한국어 능력 등 개별 조건에 따라 특례 대상 여부를 추가로 확인해야 합니다.
            </p>
          </aside>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            회사명보다 먼저 &apos;어떤 E-7 직종인지&apos; 확인해야 합니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            E-7 변경에서 중요한 것은 근로계약서의 직함만이 아니라 실제 수행업무입니다. 기계 관련 회사라고
            해서 무조건 기계공학기술자로 신청하는 것이 아니며, 마케팅 회사라고 해서 무조건 해외영업원으로
            신청하는 것도 아닙니다. 실제 담당업무와 E-7 직종의 직무내용이 연결되어야 합니다.
          </p>
          <p className="mt-5">
            <Link
              to="/visa/e7-1"
              className="text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              E-7 전문인력 자격조건 자세히 보기 →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            외국인이 자격을 갖춰도 회사 조건이 맞지 않으면 어렵습니다
          </h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            새 회사의 사업내용, 실제 외국인이 담당할 업무, 회사 규모 및 고용현황, 직종별 외국인 고용
            허용기준, 내국인 고용보호 관련 기준, 임금, 직종별 별도요건 등을 확인할 수 있습니다.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {D10E7_COMPANY_CHECKS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-ink-200"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            모든 E-7 직종에 동일한 내국인 고용인원 기준이나 외국인 비율이 적용되는 것은 아닙니다. 직종별
            기준이 다를 수 있습니다.
          </p>
        </section>

        <section className="rounded-3xl border border-orange-500/25 bg-warm/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">2026년 E-7 임금기준도 확인하세요</h2>
          <p className="mt-3 text-sm text-ink-400">
            법무부의 2026년 특정활동(E-7) 임금요건 공고 기준 일반 기준입니다.
          </p>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <caption className="sr-only">2026년 E-7 임금요건 일반 기준</caption>
              <thead className="bg-white/5 text-ink-200">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    체류자격
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    유형
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    일반 임금기준
                  </th>
                </tr>
              </thead>
              <tbody>
                {D10E7_WAGES.map((row) => (
                  <tr key={row.code} className="border-t border-white/10">
                    <th scope="row" className="px-4 py-3 font-semibold text-white sm:px-5">
                      {row.code}
                    </th>
                    <td className="px-4 py-3 text-ink-300 sm:px-5">{row.name}</td>
                    <td className="px-4 py-3 text-ink-100 sm:px-5">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-300">
            적용기간: 2026년 2월 1일 ~ 2026년 12월 31일
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-300">
            직종별로 별도의 임금기준이 정해진 경우에는 해당 직종의 별도 기준이 적용될 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">E-7 변경신청을 하면 바로 출근해도 될까요?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            D-10은 구직활동을 위한 체류자격이며, E-7에 해당하는 정식 취업활동을 하려면 해당 취업활동이
            가능한 체류자격을 갖추어야 합니다. 따라서 E-7 변경신청서를 접수했으니 심사 중에 정식근무를
            시작해도 된다고 일반화해서는 안 됩니다.
          </p>
          <p className="mt-4 leading-relaxed text-ink-200">
            정식 근무 시작일은 E-7 체류자격 변경허가 여부 및 개별적으로 허용된 활동범위를 확인하여 정해야
            합니다.
          </p>
          <p className="mt-5 rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4 text-base font-semibold text-orange-100">
            신청 접수 = E-7 취업허가가 아닙니다.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10 인턴활동과 E-7 정식취업은 다릅니다</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            D-10 구직자의 경우 요건을 충족하면 E-1~E-7 분야에서 허용된 인턴활동을 할 수 있는 제도가
            있습니다. 그러나 D-10 인턴활동과 E-7 정식취업은 같지 않습니다.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <article className="rounded-2xl border border-white/10 bg-black/25 p-5 text-center">
              <p className="text-xs font-semibold tracking-wider text-sky-300">D-10</p>
              <p className="mt-2 font-semibold text-white">인턴활동</p>
            </article>
            <p className="text-center text-lg font-bold text-orange-200" aria-hidden>
              ≠
            </p>
            <article className="rounded-2xl border border-white/10 bg-black/25 p-5 text-center">
              <p className="text-xs font-semibold tracking-wider text-sky-300">E-7</p>
              <p className="mt-2 font-semibold text-white">정식취업</p>
            </article>
          </div>
          <aside className="mt-6 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-200">최신 제도 변경</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              2025년 10월 29일부터 개편된 제도에서는 국내대학 졸업 외국인 구직자의 단일기업 인턴 가능기간이
              최대 1년으로 확대되고, 총 인턴기간 제한이 폐지된 제도개선이 있습니다. 모든 D-10 체류자가
              아무 회사에서나 1년간 인턴할 수 있다는 뜻은 아니며, 개인의 D-10 유형 및 인턴 허용요건을
              별도로 확인해야 합니다.
            </p>
          </aside>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10 구직기간도 확대되었습니다</h2>
          <aside className="mt-6 rounded-3xl border border-sky-400/25 bg-sky-500/[0.07] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-200">최신 제도변경</p>
            <p className="mt-3 leading-relaxed text-ink-200">
              2025년 10월 29일부터 국내대학 졸업 외국인의 구직기간 제도가 개선되었습니다.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-white/10 bg-ink-950/50 p-5">
                <p className="text-xs font-semibold text-ink-400">기존</p>
                <p className="mt-2 text-sm font-semibold text-white">1회 6개월씩, 최대 2년</p>
              </article>
              <article className="rounded-2xl border border-sky-400/20 bg-ink-950/50 p-5">
                <p className="text-xs font-semibold text-sky-300">개선</p>
                <p className="mt-2 text-sm font-semibold text-white">1회 1년씩, 최대 3년</p>
              </article>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-400">
              이 내용은 법무부의 국내대학 졸업 외국인 대상 제도개선입니다. 모든 D-10 세부유형에 무조건
              동일하게 적용된다고 확대하지 않습니다.
            </p>
          </aside>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">아직 취업할 회사를 찾지 못했다면?</h2>
          <p className="mt-4 leading-relaxed text-ink-200">
            D-10 구직자는 E-7 변경 전에 실제 취업할 회사와 직무가 정해져야 구체적인 E-7 가능성을 판단할 수
            있습니다.
          </p>
          <div className="mt-6">
            <JobServiceCta
              heading="D-10 체류 중 취업할 회사를 찾고 있나요?"
              description="E-7 변경 가능성을 검토하려면 실제 취업할 회사와 담당업무가 중요합니다. 구직자는 취업 정보를 등록하고, 기업은 필요한 외국인 인력 조건을 등록할 수 있습니다."
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10에서 E-7 변경에는 어떤 서류가 필요할까?</h2>
          <p className="mt-3 text-sm text-ink-400">
            모든 신청자가 동일한 서류를 제출한다고 단정하지 않습니다. 직종·회사·신청자 상황에 따라 달라질
            수 있습니다.
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">외국인</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {D10E7_APPLICANT_DOCS.map((item) => (
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
                {D10E7_COMPANY_DOCS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-ink-900/40 p-6">
              <h3 className="text-base font-semibold text-white">신청</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-300">
                {D10E7_APPLY_DOCS.map((item) => (
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
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10에서 E-7 변경 절차</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {D10E7_STEPS.map((step, i) => (
              <li key={step.n} className="relative rounded-3xl border border-white/10 bg-ink-900/40 p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-sky-300">{step.n}</p>
                <p className="mt-2 text-base font-semibold text-white">{step.title}</p>
                {i < D10E7_STEPS.length - 1 ? (
                  <p className="mt-3 text-xs text-ink-500" aria-hidden>
                    → 다음 단계
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white sm:text-2xl">D-10에서 E-7 변경할 때 많이 오해하는 부분</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {D10E7_MYTHS.map((item) => (
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
            {D10E7_FAQ.map((item) => (
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
          <h2 className="text-base font-semibold text-white">공식자료 확인</h2>
          <p className="mt-2 text-sm text-ink-400">법무부·출입국외국인정책본부의 공식자료를 함께 확인하세요.</p>
          <ul className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {D10E7_OFFICIAL_LINKS.map((item) => (
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
            취업할 회사가 정해졌다면 E-7 가능성부터 확인하세요
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">
            외국인의 학력·경력뿐 아니라 실제 담당업무, E-7 직종, 회사의 고용조건과 임금까지 함께 검토해야
            D-10에서 E-7 변경 가능성을 정확하게 판단할 수 있습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/consult"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              D-10 → E-7 변경 상담하기
            </Link>
            <Link
              to="/visa/e7"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              E-7 전체 안내 보기
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
