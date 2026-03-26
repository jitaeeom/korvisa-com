const phases = [
  {
    phase: "채용 전",
    items: [
      "직무·근로조건이 체류자격 요건과 맞는지 전문가 또는 법무와 사전 검토",
      "급여·근로시간·4대 보험 가입 시점을 입사일·비자 일정에 맞게 설계",
    ],
  },
  {
    phase: "서류·허가",
    items: [
      "고용허가 또는 관련 신고(해당 시)와 비자 발급 순서 파악",
      "초청장·근로계약서·사업자 증빙 등 제출물 목록을 담당 부서와 공유",
    ],
  },
  {
    phase: "입국 후",
    items: [
      "외국인등록·체류지 변경 신고 등 기한 있는 의무 안내",
      "사내 규정(보안·재택·출장)과 체류 조건 충돌 여부 점검",
    ],
  },
  {
    phase: "근무 중",
    items: [
      "4대보험 가입(국민·건강·고용·산재) 시기·대상·신고를 체류·고용 형태에 맞게 운영",
      "퇴사·계약 종료 등 시 고용·외국인력 관련 변동사유발생 신고 등 의무(해당 시) 일정에 맞춰 처리",
      "체류자격 변경·직무 변경·재취업 전환 시 내부 인사 일정과 출입국·고용 절차 리드타임을 함께 관리",
    ],
  },
];

const SIDE_IMG =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80";

export function HrChecklist() {
  return (
    <section
      id="hr"
      className="scroll-mt-24 bg-gradient-to-b from-ink-950 to-ink-900 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-300">
              For HR
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              기업 인사담당자 체크리스트
            </h2>
            <p className="mt-4 text-ink-300">
              실무에서 자주 놓치는 단계를 묶었습니다. 산업·고용 형태·개인 이력에 따라
              세부는 달라집니다.
            </p>
            <figure className="mt-8 overflow-hidden rounded-3xl border border-white/10 shadow-lift">
              <img
                src={SIDE_IMG}
                alt="협업하는 팀의 사무실 모습"
                width={900}
                height={600}
                className="aspect-[4/3] w-full object-cover sm:aspect-video lg:aspect-[4/5]"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="border-t border-white/10 bg-black/40 px-4 py-3 text-xs text-ink-400 backdrop-blur-sm">
                채용부터 온보딩까지 타임라인을 맞추면 리스크를 줄일 수 있습니다.
              </figcaption>
            </figure>
          </div>
          <ol className="relative space-y-5 before:absolute before:left-[1.35rem] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-accent-light/50 before:to-warm/40 sm:space-y-6 sm:before:left-[1.5rem]">
            {phases.map((p, i) => (
              <li
                key={p.phase}
                className="relative flex gap-4 rounded-3xl border border-white/10 bg-ink-900/50 p-5 shadow-soft backdrop-blur-sm transition hover:border-white/20 sm:gap-6 sm:p-7"
              >
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-warm text-lg font-bold text-white shadow-lg sm:h-12 sm:w-12">
                  {i + 1}
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-lg font-semibold text-white">{p.phase}</h3>
                  <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-300">
                    {p.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/20 text-xs text-accent-light"
                          aria-hidden
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
