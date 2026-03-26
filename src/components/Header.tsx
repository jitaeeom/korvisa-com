import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { KorvisaLogo } from "./Logo";

const nav = [
  { to: "/#audience", label: "대상별 안내" },
  { to: "/#visas", label: "주요 비자" },
  { to: "/#stories", label: "성공 사례" },
  { to: "/#hr", label: "기업 체크리스트" },
  { to: "/#resources", label: "공식 링크" },
  { to: "/housing", label: "외국인 주거" },
  { to: "/representative", label: "대표행정사" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-6 flex-col justify-center" aria-hidden>
      <span
        className={`h-0.5 rounded-full bg-current transition ${
          open ? "translate-y-0.5 rotate-45" : "-translate-y-1"
        }`}
      />
      <span
        className={`mt-1.5 h-0.5 rounded-full bg-current transition ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`mt-1.5 h-0.5 rounded-full bg-current transition ${
          open ? "-translate-y-2 -rotate-45" : "translate-y-0"
        }`}
      />
    </span>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const onClickConsult = () => {
    setMenuOpen(false);
    navigate("/consult");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/75 backdrop-blur-xl supports-[backdrop-filter]:bg-ink-950/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="min-w-0 shrink rounded-xl text-white outline-none ring-sky-400/0 transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-sky-400/60"
          aria-label="Korvisa.com 홈"
        >
          <KorvisaLogo size="md" className="min-w-0" />
        </Link>
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="주요 섹션">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-xl px-3.5 py-2 text-sm font-medium text-ink-200 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/consult"
            className="hidden rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-ink-950 shadow-soft transition hover:bg-ink-100 sm:inline-flex"
            onClick={() => setMenuOpen(false)}
          >
            상담 문의
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-[60px] z-40 bg-black/50 md:hidden"
            aria-hidden
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="mobile-nav"
            className="absolute left-0 right-0 top-full z-50 border-b border-white/10 bg-ink-950/95 p-4 shadow-lift backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="모바일 메뉴">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-xl px-4 py-3.5 text-base font-medium text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/consult"
                className="mt-2 rounded-xl bg-accent px-4 py-3.5 text-center text-base font-semibold text-white"
                onClick={onClickConsult}
              >
                상담 문의
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
