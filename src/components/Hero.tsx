import { useState } from "react";
import { Link } from "react-router-dom";

/** 서울 주간 도심·한강 — 전문 톤, 로컬 파일 */
const HERO_KOREA = "/images/hero-korea.png?v=6";
const HERO_DIVERSE = "/images/hero-diverse.jpg?v=1";

export function Hero() {
  const [heroImageOk, setHeroImageOk] = useState(true);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10"
      style={{ overflowX: "clip" }}
    >
      {/* ─── 풀블리드 배경 이미지 (첫 화면 전문가 톤) ─── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {heroImageOk ? (
          <img
            src={HERO_KOREA}
            alt=""
            className="h-full w-full min-w-full object-cover object-center"
            width={3840}
            height={2560}
            sizes="100vw"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onError={() => setHeroImageOk(false)}
          />
        ) : null}
        {!heroImageOk && (
          <div
            className="absolute inset-0 bg-mesh"
            style={{
              background:
                "linear-gradient(145deg, #0c4a6e 0%, #172554 45%, #1e1b4b 70%, #9a3412 100%)",
            }}
          />
        )}
        {/* 글자 대비는 유지하되, 오른쪽·상단은 사진 디테일이 살아 보이게 */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/[0.96] via-ink-950/82 to-ink-950/25 sm:from-ink-950/[0.94] sm:via-ink-950/72 sm:to-ink-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_90%_15%,transparent_0%,rgba(15,23,42,0.35)_50%,rgba(15,23,42,0.75)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,56rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:min-h-[min(92svh,52rem)] sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid min-w-0 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="min-w-0 space-y-6 lg:col-span-7 lg:max-w-none xl:col-span-6 xl:space-y-8">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full border border-sky-300/35 bg-sky-500/15 px-3 py-1 font-medium text-sky-100 shadow-sm backdrop-blur-md">
              강남제일행정사 홈페이지
            </span>
            <Link
              to="/consult"
              className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-ink-100 backdrop-blur-md transition hover:border-sky-400/50 hover:text-white"
            >
              admin@korvisa.com
            </Link>
          </div>

          <p className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-2xl border border-white/20 bg-black/30 px-4 py-2 text-sm font-medium text-sky-100 shadow-sm backdrop-blur-md">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-accent-light shadow-[0_0_12px_rgba(56,189,248,0.85)]"
              aria-hidden
            />
            외국인 근로자 · 기업 인사담당자를 위한 한국 비자·체류·주거 허브
          </p>

          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.12] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-[3.2rem] lg:leading-[1.08]">
            한국 취업·체류·주거,
            <span className="mt-2 block bg-gradient-to-r from-sky-200 via-white to-orange-100 bg-clip-text text-transparent">
              복잡한 준비를 한번에
            </span>
          </h1>

          <p className="max-w-2xl break-keep text-pretty text-sm leading-[1.75] text-ink-300 sm:text-[0.9375rem] sm:leading-[1.72]">
            국적·직종·고용 형태에 따라 달라지는 출입국·고용 흐름과, 외국인의 주거·임대차까지
            한곳에서 이어지도록 정리했습니다.{" "}
            <strong className="font-medium text-ink-100">시작점과 체크리스트</strong>로 취업부터
            주거까지 단계를 맞출 수 있게 안내합니다.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#audience"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-2xl bg-white px-8 py-3.5 text-base font-semibold text-ink-950 shadow-lift transition hover:bg-sky-50"
            >
              대상별 안내 보기
            </a>
            <a
              href="#visas"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white shadow-sm backdrop-blur-sm transition hover:border-sky-300/60 hover:bg-white/15"
            >
              비자 유형 둘러보기
            </a>
          </div>
        </div>

        <div className="hidden min-w-0 lg:col-span-5 lg:block xl:col-span-6">
          <figure className="mx-auto max-w-md lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-white/20 shadow-2xl ring-1 ring-white/10">
              <img
                src={HERO_DIVERSE}
                alt="다양한 국적을 가진 사람들이 함께하는 모습 — 한국 체류·취업을 상징"
                width={1600}
                height={1067}
                className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
                loading="eager"
                decoding="async"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs leading-relaxed text-ink-200">
              한국에서 일하고 머무는 <strong className="text-white">글로벌 인재</strong>와 기업을
              잇는 취업·체류·주거 안내
            </figcaption>
          </figure>
        </div>

        <div className="col-span-full lg:hidden">
          <figure className="mx-auto max-w-lg">
            <div className="overflow-hidden rounded-2xl border border-white/20 shadow-xl ring-1 ring-white/10">
              <img
                src={HERO_DIVERSE}
                alt="다양한 국적을 가진 사람들이 함께하는 모습"
                width={1600}
                height={1067}
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>
        </div>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-4 lg:mt-20">
          {[
            ["비자 유형", "요약 + 준비 서류 + FAQ"],
            ["기업 HR", "단계별 체크리스트"],
            ["공식 링크", "Hi Korea · 비자포털"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-2xl border border-white/15 bg-black/35 px-4 py-4 text-left shadow-sm backdrop-blur-md sm:text-center"
            >
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-sky-200/95">
                {k}
              </dt>
              <dd className="mt-1.5 text-sm font-bold leading-snug text-white">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-sky-500/30 bg-black/40 p-5 backdrop-blur-md sm:col-span-2 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">Tip</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-100">
              비자 심사는 사안마다 다릅니다. 최종 판단은 항상{" "}
              <strong className="font-semibold text-white">공식 민원 안내</strong>와{" "}
              <strong className="font-semibold text-white">유권해석</strong>을 따르세요.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-black/35 p-5 text-center backdrop-blur-md">
            <p className="text-xs text-ink-300">상담 문의</p>
            <Link
              to="/consult"
              className="mt-2 block text-sm font-semibold text-sky-300 hover:underline"
            >
              admin@korvisa.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
