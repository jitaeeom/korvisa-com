const links = [
  {
    name: "Hi Korea",
    sub: "출입국·외국인청",
    href: "https://www.hikorea.go.kr",
    desc: "체류민원, 예약, 전자민원",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    alt: "서류와 펜",
  },
  {
    name: "비자 포털",
    sub: "Korea e-Visa",
    href: "https://www.visa.go.kr/main/openMain.do",
    desc: "사증 발급 및 목적별 개요",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    alt: "비행기 창밖 구름",
  },
  {
    name: "고용노동부",
    sub: "외국인고용",
    href: "https://www.eps.go.kr/eo/main.eo",
    desc: "고용허가·외국인력 정책",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    alt: "팀 회의",
  },
];

export function Resources() {
  return (
    <section
      id="resources"
      className="scroll-mt-24 border-t border-white/10 bg-ink-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-light">
            Official
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            공식 안내 바로가기
          </h2>
          <p className="mt-4 text-ink-300">
            법령·행정 해석은 수시로 바뀔 수 있습니다. 최종 확인은 공식 기관·유권해석을
            따르세요.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900/40 shadow-soft transition hover:border-sky-400/40 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={l.image}
                    alt={l.alt}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-200/90">
                      {l.sub}
                    </p>
                    <p className="mt-0.5 text-lg font-bold text-white">{l.name}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-sm leading-relaxed text-ink-300">{l.desc}</p>
                  <span className="mt-auto pt-5 text-sm font-semibold text-accent-light group-hover:underline">
                    새 창에서 열기 →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
