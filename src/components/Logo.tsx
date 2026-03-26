import { useId } from "react";

const sizes = {
  sm: { box: "h-8 w-8", text: "text-sm", domain: "text-xs", sub: "text-[9px]" },
  md: { box: "h-10 w-10", text: "text-base sm:text-lg", domain: "text-sm sm:text-base", sub: "text-[10px]" },
  lg: { box: "h-12 w-12", text: "text-xl", domain: "text-base", sub: "text-[11px]" },
} as const;

type LogoProps = {
  className?: string;
  size?: keyof typeof sizes;
  /** false면 “Korvisa”만 (모바일 헤더 등) */
  showDomain?: boolean;
  /** 푸터용 한 줄 부제 */
  showTagline?: boolean;
};

/**
 * Korvisa.com 브랜드 로고 — 마크(K + 비자 스탬프 느낌) + 워드마크
 */
export function KorvisaLogo({
  className = "",
  size = "md",
  showDomain = true,
  showTagline = false,
}: LogoProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `korvisa-grad-${uid}`;
  const s = sizes[size];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        className={`${s.box} shrink-0 overflow-visible`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradId} x1="6" y1="4" x2="36" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.45" stopColor="#0ea5e9" />
            <stop offset="1" stopColor="#0369a1" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="38" height="38" rx="11" fill={`url(#${gradId})`} />
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="11"
          stroke="white"
          strokeOpacity={0.18}
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M12 11v18M12 20l9-8M12 20l9 9"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 스탬프/승인 연상 */}
        <circle cx="29" cy="29" r="4.5" fill="#0c4a6e" stroke="#7dd3fc" strokeWidth="1.2" opacity={0.95} />
        <path
          d="M27.2 29h3.6M29 27.2v3.6"
          stroke="#e0f2fe"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="flex flex-wrap items-baseline gap-x-1">
          <span className={`font-bold tracking-tight text-white ${s.text}`}>Korvisa</span>
          {showDomain && (
            <span className={`font-semibold tracking-tight text-sky-300/95 ${s.domain}`}>.com</span>
          )}
        </span>
        {showTagline && (
          <span
            className={`mt-1 font-semibold uppercase tracking-[0.2em] text-sky-200/60 ${s.sub}`}
          >
            Korea Visa Hub
          </span>
        )}
      </span>
    </span>
  );
}
