import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getSuccessStorySlides, marqueeDurationSec, type StorySlide } from "../lib/successStorySlides";

function StoryLightbox({
  slide,
  onClose,
}: {
  slide: StorySlide | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!slide) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [slide, onClose]);

  if (!slide) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        aria-label="닫기"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col gap-4">
        <div className="flex items-start justify-end gap-2">
          <h3 id="lightbox-title" className="sr-only">
            성공 사례 확대 보기 — {slide.caption}
          </h3>
          <button
            ref={closeRef}
            type="button"
            className="rounded-xl border border-white/20 bg-ink-900/90 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
            onClick={onClose}
          >
            닫기 (Esc)
          </button>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-ink-950 shadow-2xl ring-1 ring-white/10">
          <img
            src={slide.src}
            alt={slide.alt || slide.caption}
            className="max-h-[min(78vh,900px)] w-full object-contain object-center"
            width={1600}
            height={1200}
            decoding="async"
          />
        </div>
        <p className="text-center text-sm leading-relaxed text-ink-200 sm:text-base">{slide.caption}</p>
      </div>
    </div>
  );
}

function StoryThumb({
  slide,
  listItem,
  onOpen,
}: {
  slide: StorySlide;
  listItem?: boolean;
  onOpen: (s: StorySlide) => void;
}) {
  const [broken, setBroken] = useState(false);

  return (
    <article
      className="w-[9.5rem] shrink-0 sm:w-44"
      role={listItem ? "listitem" : undefined}
    >
      <button
        type="button"
        aria-label={`${slide.caption} — 크게 보기`}
        className="group/thumb w-full rounded-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141a22]"
        onClick={() => onOpen(slide)}
      >
        <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-900/50 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.04] transition group-hover/thumb:border-sky-500/40 group-hover/thumb:ring-sky-500/20">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-900">
            {!broken ? (
              <img
                src={slide.src}
                alt=""
                width={400}
                height={300}
                className="h-full w-full object-cover object-center transition duration-300 ease-out group-hover/thumb:scale-[1.04]"
                loading="lazy"
                decoding="async"
                draggable={false}
                onError={() => setBroken(true)}
              />
            ) : (
              <div className="flex h-full items-center justify-center p-3 text-center">
                <p className="text-[10px] text-ink-500">이미지 로드 실패</p>
              </div>
            )}
          </div>
        </div>
      </button>
      <p
        className="mt-2 line-clamp-2 px-0.5 text-center text-[11px] leading-tight text-ink-400 sm:text-xs"
        title={slide.caption}
      >
        {slide.caption}
      </p>
    </article>
  );
}

function StoryRow({
  slides,
  list,
  onOpen,
}: {
  slides: StorySlide[];
  list?: boolean;
  onOpen: (s: StorySlide) => void;
}) {
  return (
    <div
      className="flex w-max shrink-0 items-start gap-3 pr-3 sm:gap-4 sm:pr-4"
      role={list ? "list" : undefined}
      aria-label={list ? "성공 사례 썸네일" : undefined}
    >
      {slides.map((s) => (
        <StoryThumb key={s.id} slide={s} listItem={list} onOpen={onOpen} />
      ))}
    </div>
  );
}

export function SuccessStories() {
  const slides = useMemo(() => getSuccessStorySlides(), []);
  const durationSec = useMemo(() => marqueeDurationSec(slides.length), [slides.length]);
  const [lightbox, setLightbox] = useState<StorySlide | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const openLightbox = useCallback((s: StorySlide) => setLightbox(s), []);

  const marqueeStyle = {
    "--marquee-sec": `${durationSec}s`,
    willChange: "transform" as const,
    ...(lightbox ? { animationPlayState: "paused" as const } : {}),
  };

  return (
    <section
      id="stories"
      className="scroll-mt-24 border-t border-white/10 bg-ink-950 py-14 sm:py-16 lg:py-20"
      aria-labelledby="stories-heading"
    >
      <StoryLightbox slide={lightbox} onClose={closeLightbox} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[1.75rem] border-2 border-sky-500/25 bg-gradient-to-b from-ink-900/55 via-ink-900/35 to-ink-950/70 p-6 shadow-glow ring-1 ring-inset ring-white/10 backdrop-blur-sm sm:rounded-[2rem] sm:p-8 lg:p-10">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
              Success cases
            </p>
            <h2
              id="stories-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              비자·체류 성공 사례
            </h2>
            {/*
             * 개발용 재생 주기 안내 문구는 숨김(요청 반영).
             */}
          </div>

          {slides.length === 0 ? (
            <p className="mt-8 text-center text-sm text-ink-500">
              표시할 성공 사례 이미지가 없습니다. 에셋 폴더 또는 public 경로를 확인해 주세요.
            </p>
          ) : (
            <>
              <div className="relative mt-8 w-full motion-reduce:hidden">
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#141a22] to-transparent sm:w-12"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#141a22] to-transparent sm:w-12"
                  aria-hidden
                />

                <div className="group relative overflow-hidden rounded-xl py-1">
                  <div
                    className="flex w-max motion-safe:animate-marquee-slides group-hover:[animation-play-state:paused] motion-reduce:animate-none"
                    style={marqueeStyle}
                  >
                    <StoryRow slides={slides} list onOpen={openLightbox} />
                    <div aria-hidden>
                      <StoryRow slides={slides} onOpen={openLightbox} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 hidden motion-reduce:flex flex-wrap justify-center gap-4">
                {slides.map((s) => (
                  <StoryThumb key={`static-${s.id}`} slide={s} onOpen={openLightbox} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
