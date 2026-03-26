import { Link } from "react-router-dom";
import { KorvisaLogo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link to="/" className="inline-flex">
              <KorvisaLogo size="lg" showTagline />
            </Link>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-ink-500">
              서울시 서초구 법원로 1길 11 금구빌딩 지하 101호 · 02-568-7192 · 010-8781-7192
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                Navigate
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink-300">
                <li>
                  <Link to="/#audience" className="transition hover:text-white">
                    대상별 안내
                  </Link>
                </li>
                <li>
                  <Link to="/#visas" className="transition hover:text-white">
                    주요 비자
                  </Link>
                </li>
                <li>
                  <Link to="/housing" className="transition hover:text-white">
                    외국인 주거·임대차
                  </Link>
                </li>
                <li>
                  <Link to="/representative" className="transition hover:text-white">
                    대표행정사 소개
                  </Link>
                </li>
                <li>
                  <Link to="/#stories" className="transition hover:text-white">
                    성공 사례
                  </Link>
                </li>
                <li>
                  <Link to="/#hr" className="transition hover:text-white">
                    기업 체크리스트
                  </Link>
                </li>
                <li>
                  <Link to="/visa/e7" className="transition hover:text-white">
                    예: E-7 상세
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-xs text-ink-500">© {new Date().getFullYear()} Korvisa.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
