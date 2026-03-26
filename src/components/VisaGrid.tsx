import { Link } from "react-router-dom";
import { getVisaCardsForGrid } from "../data/visaDetail";

const cards = getVisaCardsForGrid();

export function VisaGrid() {
  return (
    <section
      id="visas"
      className="scroll-mt-24 border-y border-white/10 bg-ink-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-light">
              Visa types
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              자주 검토되는 체류·취업 유형
            </h2>
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((v) => (
            <Link
              key={v.slug}
              to={`/visa/${v.slug}`}
              className="group flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900/40 transition hover:border-sky-500/35 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light"
            >
              <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.alt}
                  width={600}
                  height={375}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-lg bg-white/15 px-2.5 py-1 font-mono text-xs font-bold text-white backdrop-blur-md">
                    {v.code}
                  </span>
                  <h3 className="text-base font-semibold text-white">{v.name}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm leading-relaxed text-ink-300">{v.note}</p>
                <span className="mt-auto inline-flex pt-4 text-sm font-semibold text-accent-light group-hover:underline">
                  상세 가이드 보기 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
