import { getVisaBySlug, type VisaDetail } from "../data/visaDetail";

export const SITE_ORIGIN = "https://korvisa.com";
export const SITE_NAME = "Korvisa.com";

export const PRERENDER_PATHS = [
  "/",
  "/visa/e7",
  "/visa/e7-1",
  "/visa/e9",
  "/visa/f2",
  "/visa/f5",
  "/visa/d8",
  "/visa/f6",
  "/housing",
  "/representative",
] as const;

export type PageMeta = {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogType: string;
  ogSiteName: string;
};

function canonicalFor(pathname: string): string {
  if (pathname === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${pathname}`;
}

function page(pathname: string, title: string, description: string): PageMeta {
  const canonical = canonicalFor(pathname);
  return {
    title,
    description,
    canonical,
    robots: "index,follow",
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    ogType: "website",
    ogSiteName: SITE_NAME,
  };
}

export function homePageMeta(): PageMeta {
  return page(
    "/",
    "Korvisa.com — 한국 비자·체류 전문 안내",
    "Korvisa.com — 한국 비자·체류·주거 안내. 외국인과 기업 인사담당자를 위한 정보 허브.",
  );
}

export function housingPageMeta(): PageMeta {
  return page(
    "/housing",
    "외국인 주거·임대차 상담 안내 | Korvisa.com",
    "외국인 전·월세, 임대차 계약 체크포인트, 비자·체류 일정과 연계한 주거 상담 정보를 한 번에 확인하세요.",
  );
}

export function representativePageMeta(): PageMeta {
  return page(
    "/representative",
    "대표행정사 소개 | 강남제일행정사 Korvisa.com",
    "강남제일행정사 엄지태 대표행정사의 경력과 전문 분야를 안내합니다. 외국인 비자·체류 및 기업 외국인 고용 관련 행정업무를 지원합니다.",
  );
}

export function visaPageMeta(visa: Pick<VisaDetail, "code" | "shortName" | "slug">): PageMeta {
  return page(
    `/visa/${visa.slug}`,
    `${visa.code} 비자 ${visa.shortName} 준비서류·절차·FAQ | Korvisa.com`,
    `${visa.code} 비자 ${visa.shortName} 준비서류, 신청 절차, 체크리스트와 FAQ를 한 페이지에서 확인하세요.`,
  );
}

export function visaE71PageMeta(): PageMeta {
  return page(
    "/visa/e7-1",
    "E-7-1 비자 자격요건·직종·회사조건·서류 | E7 전문인력 - Korvisa",
    "E-7-1 전문인력 비자의 학력·경력, 직종, 회사 요건, 2026년 임금기준, 필요서류와 신청절차를 확인하세요. 국내 체류자 변경과 해외 인재 초청 시 확인할 사항을 안내합니다.",
  );
}

export function getPageMeta(pathname: string): PageMeta {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/") return homePageMeta();
  if (path === "/housing") return housingPageMeta();
  if (path === "/representative") return representativePageMeta();
  if (path === "/visa/e7-1") return visaE71PageMeta();

  const visaMatch = path.match(/^\/visa\/([^/]+)$/);
  if (visaMatch) {
    const visa = getVisaBySlug(visaMatch[1]);
    if (visa) return visaPageMeta(visa);
  }

  return homePageMeta();
}
