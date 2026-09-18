import { getVisaBySlug, type VisaDetail } from "../data/visaDetail";

export const SITE_ORIGIN = "https://korvisa.com";
export const SITE_NAME = "Korvisa.com";

export const PRERENDER_PATHS = [
  "/",
  "/visa/e7",
  "/visa/e7-1",
  "/visa/e7-chef",
  "/visa/e7-4",
  "/visa/e7-4r",
  "/visa/e7-workplace-change",
  "/visa/d10-to-e7",
  "/visa/d10",
  "/visa/e9",
  "/visa/f2",
  "/visa/f2-7",
  "/visa/f2-7-to-f5",
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

export function visaE74PageMeta(): PageMeta {
  return page(
    "/visa/e7-4",
    "E-7-4 비자 자격조건·점수·회사추천 | 2026 숙련기능인력 - Korvisa",
    "2026년 E-7-4 숙련기능인력(K-point E74) 비자의 체류기간, 점수, 소득·한국어 요건, 회사추천, 고용조건과 필요서류를 확인하세요.",
  );
}

export function visaE74RPageMeta(): PageMeta {
  return page(
    "/visa/e7-4r",
    "E-7-4R 비자 자격조건·대상지역·회사요건 | 2026 지역특화 숙련기능인력 - Korvisa",
    "2026년 E-7-4R 지역특화형 숙련기능인력 비자의 체류경력, 대상지역, 회사 근무요건, 지자체 추천, 소득·한국어 요건과 신청절차를 확인하세요.",
  );
}

export function visaE7ChefPageMeta(): PageMeta {
  return page(
    "/visa/e7-chef",
    "E-7 요리사 비자 자격조건·경력·식당조건 | 외국인 주방장 초청 - Korvisa",
    "외국인 요리사·주방장을 E-7-2 비자로 초청할 때 필요한 조리경력과 자격증, 외국음식 전문식당의 면적·납세·내국인 고용요건, 2026년 임금기준과 신청절차를 확인하세요.",
  );
}

export function visaE7WorkplaceChangePageMeta(): PageMeta {
  return page(
    "/visa/e7-workplace-change",
    "E-7 근무처변경·이직 신고/허가·필요서류 | E7 회사변경 - Korvisa",
    "E-7 비자로 이직할 때 근무처변경이 사전허가인지 사후신고인지 확인하세요. 15일 신고기한, 적용제외 직종, 새 회사 요건, 퇴직사유, 이적동의와 필요서류를 안내합니다.",
  );
}

export function visaD10ToE7PageMeta(): PageMeta {
  return page(
    "/visa/d10-to-e7",
    "D-10에서 E-7 비자 변경 | 취업 후 자격조건·회사조건·서류 - Korvisa",
    "D-10 구직비자에서 E-7 취업비자로 변경할 때 필요한 학력·경력, 국내대학 졸업자 특례, E-7 직종, 회사조건, 2026년 임금기준과 신청절차를 확인하세요.",
  );
}

export function visaD10PageMeta(): PageMeta {
  return page(
    "/visa/d10",
    "D-10 구직비자 자격조건·기간·인턴·연장 | 2026 D10 비자 - Korvisa",
    "D-10 구직비자의 신청대상, 자격조건, 국내대학 졸업자 구직기간, 인턴활동, 연장, 필요서류와 취업 후 E-7 변경까지 2026년 기준으로 확인하세요.",
  );
}

export function visaF27PageMeta(): PageMeta {
  return page(
    "/visa/f2-7",
    "F-2-7 비자 자격조건·점수·소득 | 2026 점수제 우수인재 - Korvisa",
    "F-2-7 점수제 우수인재 거주비자의 신청대상, 연령·학력·소득·한국어 평가, 가점·감점, E-7에서 F-2-7 변경과 영주권까지 2026년 기준으로 확인하세요.",
  );
}

export function visaF27ToF5PageMeta(): PageMeta {
  return page(
    "/visa/f2-7-to-f5",
    "F-2-7에서 F-5 영주권 변경 | 3년 체류·소득·한국어 조건 - Korvisa",
    "F-2-7 점수제 거주비자에서 F-5 영주권으로 변경할 때 필요한 3년 체류, 생계유지능력, 품행, 기본소양과 신청서류를 확인하세요. 3년 체류만으로 자동 영주권이 되는 것은 아닙니다.",
  );
}

export function getPageMeta(pathname: string): PageMeta {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/") return homePageMeta();
  if (path === "/housing") return housingPageMeta();
  if (path === "/representative") return representativePageMeta();
  if (path === "/visa/e7-1") return visaE71PageMeta();
  if (path === "/visa/e7-chef") return visaE7ChefPageMeta();
  if (path === "/visa/e7-4") return visaE74PageMeta();
  if (path === "/visa/e7-4r") return visaE74RPageMeta();
  if (path === "/visa/e7-workplace-change") return visaE7WorkplaceChangePageMeta();
  if (path === "/visa/d10-to-e7") return visaD10ToE7PageMeta();
  if (path === "/visa/d10") return visaD10PageMeta();
  if (path === "/visa/f2-7") return visaF27PageMeta();
  if (path === "/visa/f2-7-to-f5") return visaF27ToF5PageMeta();

  const visaMatch = path.match(/^\/visa\/([^/]+)$/);
  if (visaMatch) {
    const visa = getVisaBySlug(visaMatch[1]);
    if (visa) return visaPageMeta(visa);
  }

  return homePageMeta();
}
