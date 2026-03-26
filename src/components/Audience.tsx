const cards = [
  {
    title: "한국에 거주하는 외국인",
    subtitle: "체류 연장 · 자격 변경 · 취업 전환",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    imageAlt: "다양한 사람들이 함께 있는 장면",
    points: [
      "체류자격별 활동 범위 확인",
      "E·D·F 등 자격 변경 요건 정리",
      "외국인등록·재입국 허가 체크",
    ],
    href: "#visas",
    ring: "ring-sky-400/30",
  },
  {
    title: "외국인을 고용하는 기업 인사",
    subtitle: "고용 허가 · 비자 · 온보딩",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
    imageAlt: "회의 중인 비즈니스 팀",
    points: [
      "고용 형태별 서류·순서",
      "임금·근로조건 법 준수 포인트",
      "입사 일정과 비자 일정 정렬",
    ],
    href: "#hr",
    ring: "ring-orange-400/30",
  },
];

export function Audience() {
  return (
    <section
      id="audience"
      className="scroll-mt-24 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-light">
            For you
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            누구를 위한 사이트인가요?
          </h2>
          <p className="mt-4 text-ink-300">
            같은 &apos;비자&apos;라도 개인과 고용주의 준비가 다릅니다. 카드를 눌러 해당
            섹션으로 이동하세요.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900/50 shadow-lift ring-2 ring-transparent transition hover:-translate-y-1 hover:border-white/20 hover:ring-2 ${card.ring} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light`}
            >
              <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[2/1]">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  width={900}
                  height={500}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="text-xl font-bold text-white sm:text-2xl">{card.title}</h3>
                <p className="mt-1 text-sm font-medium text-sky-200/90">{card.subtitle}</p>
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink-200">
                  {card.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-light"
                        aria-hidden
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center text-sm font-semibold text-white group-hover:gap-2">
                  섹션 이동
                  <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
