import { SUCCESS_STORIES, storyImageSrc } from "../data/successStories";

export type StorySlide = {
  id: string;
  src: string;
  caption: string;
  alt: string;
};

/** 파일명만으로 캡션 추정 (예: 2025-10-28-E9-E74R-Myanmar.jpg) */
function captionFromPath(path: string): string {
  const name = path.split("/").pop() ?? "";
  const base = name.replace(/\.[^.]+$/i, "");
  if (!base) return "성공 사례";
  return base.replace(/_/g, " ").replace(/-/g, " · ");
}

/** 너무 적으면 같은 줄을 넓은 화면에서도 자연스럽게 보이도록 최소 개수까지 복제 */
function padForMarquee(slides: StorySlide[]): StorySlide[] {
  if (slides.length === 0) return [];
  const min = 10;
  if (slides.length >= min) return slides;
  const out: StorySlide[] = [];
  for (let i = 0; i < min; i++) {
    const s = slides[i % slides.length];
    out.push({
      ...s,
      id: `${s.id}__${i}`,
    });
  }
  return out;
}

/**
 * 1) `src/assets/success-stories/` 아래 jpg/png/webp 가 하나라도 있으면 → 전부 자동 로드 (정렬)
 * 2) 없으면 → `public/images/stories` + successStories.ts 폴백
 */
export function getSuccessStorySlides(): StorySlide[] {
  const modules = import.meta.glob("../assets/success-stories/**/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>;

  const assetEntries = Object.entries(modules).sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  );

  if (assetEntries.length > 0) {
    const slides: StorySlide[] = assetEntries.map(([path, src], i) => ({
      id: `a-${i}-${path}`,
      src,
      caption: captionFromPath(path),
      alt: `비자 성공 사례 이미지 ${i + 1}`,
    }));
    return padForMarquee(slides);
  }

  const fromPublic: StorySlide[] = SUCCESS_STORIES.map((s) => ({
    id: s.id,
    src: storyImageSrc(s.imageFile),
    caption: s.caption,
    alt: s.imageAlt,
  }));
  return padForMarquee(fromPublic);
}

/** 슬라이드 개수에 비례해 한 바퀴 시간을 늘려, 장수가 많아도 너무 빠르게 지나가지 않게 */
export function marqueeDurationSec(slideCount: number): number {
  if (slideCount <= 0) return 40;
  const raw = slideCount * 2.1;
  return Math.round(Math.max(22, Math.min(110, raw)));
}
