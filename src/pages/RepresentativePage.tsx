import { useState } from "react";
import { Link } from "react-router-dom";

/** 대표행정사 얼굴 사진: `public/images/representative-eom-jitae.(jpg|png|webp)` 중 하나 */
const REP_PHOTO_BASE = "/images/representative-eom-jitae";
const REP_PHOTO_EXT = ["jpg", "png", "webp"] as const;
const REP_NAME = "엄지태";

function RepresentativePhoto() {
  const [extIndex, setExtIndex] = useState(0);

  if (extIndex >= REP_PHOTO_EXT.length) {
    return (
      <div className="flex min-h-[280px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-white/25 bg-ink-900/60 p-6 text-center">
        <p className="text-sm font-medium text-ink-200">대표행정사 사진을 넣어 주세요</p>
        <p className="mt-2 max-w-xs text-xs leading-relaxed text-ink-500">
          다음 중 하나의 파일을 프로젝트{" "}
          <code className="rounded bg-white/5 px-1 py-0.5 text-sky-200/90">public/images/</code>{" "}
          폴더에 저장합니다.
        </p>
        <ul className="mt-3 list-inside list-disc text-left text-xs text-ink-400">
          <li>
            <code className="text-ink-300">representative-eom-jitae.jpg</code> (권장)
          </li>
          <li>
            <code className="text-ink-300">representative-eom-jitae.png</code>
          </li>
          <li>
            <code className="text-ink-300">representative-eom-jitae.webp</code>
          </li>
        </ul>
        <p className="mt-3 text-xs text-ink-500">
          가로·세로 비슷한 정장 프로필 컷이면 잘 맞습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-soft ring-1 ring-white/[0.04]">
      <img
        src={`${REP_PHOTO_BASE}.${REP_PHOTO_EXT[extIndex]}?v=1`}
        alt={`${REP_NAME} 대표행정사`}
        width={640}
        height={800}
        className="aspect-[4/5] w-full object-cover object-top sm:aspect-[3/4]"
        loading="lazy"
        decoding="async"
        onError={() => setExtIndex((n) => n + 1)}
      />
    </div>
  );
}

export function RepresentativePage() {
  return (
    <main className="border-b border-white/10 bg-ink-950">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
          Gangnam Jeil Administrative Office
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          대표행정사 소개
        </h1>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-20">
        <article className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900/45 shadow-soft lg:col-span-7">
          <div className="border-b border-white/10 px-6 py-5 sm:px-8 sm:py-6">
            <h2 className="text-xl font-bold text-white sm:text-2xl">대표행정사 프로필</h2>
          </div>
          <div className="flex flex-col gap-8 p-6 sm:p-8 sm:py-7 lg:flex-row lg:gap-10">
            <div className="mx-auto w-full max-w-[280px] shrink-0 lg:mx-0 lg:w-64">
              <RepresentativePhoto />
              <p className="mt-3 text-center text-xs text-ink-500 lg:text-left">
                {REP_NAME} 대표행정사
              </p>
            </div>
            <div className="min-w-0 flex-1 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">성함</p>
                <p className="mt-1 text-base font-semibold text-white">{REP_NAME}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  전문 분야
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-200">
                  비자/체류, 외국인 고용, 출입국 민원, 기업 HR 행정지원
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  주요 경력
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-200">
                  <li>고려대 경영학과, KAIST 석사 졸업</li>
                  <li>일반행정사 겸 번역행정사</li>
                  <li>법무부 지정 출입국 행정사</li>
                  <li>공인중개사</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  소개 문구
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-200">
                  외국인 체류와 기업 고용 행정의 복잡한 절차를 이해하기 쉽게 안내하고, 사안별로
                  필요한 준비를 체계적으로 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </article>

        <aside className="space-y-6 lg:col-span-5">
          <article className="rounded-3xl border border-white/10 bg-ink-900/45 p-6 shadow-soft sm:p-7">
            <h2 className="text-lg font-bold text-white">사무소 정보</h2>
            <dl className="mt-4 space-y-3 text-sm leading-relaxed text-ink-200">
              <div>
                <dt className="text-ink-500">사무소명</dt>
                <dd className="font-medium text-white">강남제일행정사공인중개사사무소</dd>
              </div>
              <div>
                <dt className="text-ink-500">주소</dt>
                <dd>서울시 서초구 법원로 1길 11 금구빌딩 지하 101호</dd>
              </div>
              <div>
                <dt className="text-ink-500">전화</dt>
                <dd className="flex flex-wrap gap-x-3 gap-y-1">
                  <a href="tel:02-568-7192" className="text-sky-300 hover:underline">
                    02-568-7192
                  </a>
                  <span className="text-ink-500">/</span>
                  <a href="tel:010-8781-7192" className="text-sky-300 hover:underline">
                    010-8781-7192
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-ink-500">이메일</dt>
                <dd>
                  <Link
                    to="/consult"
                    className="text-sky-300 hover:underline"
                  >
                    admin@korvisa.com
                  </Link>
                </dd>
              </div>
            </dl>
          </article>

          <article className="rounded-3xl border border-sky-500/25 bg-ink-900/35 p-6 shadow-soft sm:p-7">
            <h2 className="text-lg font-bold text-white">관련 페이지</h2>
            <p className="mt-2 text-sm text-ink-300">
              비자 유형, 체크리스트, 공식 링크는 메인 페이지에서 확인하실 수 있습니다.
            </p>
            <Link
              to="/"
              className="mt-5 inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
            >
              메인으로 돌아가기
            </Link>
          </article>
        </aside>
      </section>
    </main>
  );
}
