import { Link } from "react-router-dom";

const CONTACT_IMG =
  "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=900&q=80";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-lift sm:rounded-[2.5rem]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[240px] lg:min-h-full">
            <img
              src={CONTACT_IMG}
              alt="문의 및 상담을 상징하는 이미지"
              width={900}
              height={700}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/80 via-ink-950/50 to-warm/30 mix-blend-multiply lg:bg-gradient-to-r" />
            <div className="relative flex h-full flex-col justify-end p-8 text-white lg:p-10">
              <p className="text-sm font-medium uppercase tracking-wider text-white/80">
                Korvisa.com
              </p>
              <p className="mt-2 max-w-xs text-2xl font-bold leading-snug sm:text-3xl">
                비자·체류·주거 문의는 여기로 연락 주세요
              </p>
            </div>
          </div>
          <div className="glass-dark flex flex-col justify-center border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <h2 className="break-keep text-lg font-bold leading-tight tracking-tight text-white sm:text-xl lg:text-2xl xl:text-3xl">
              강남제일행정사공인중개사사무소 안내
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-300 sm:text-base">
              Korvisa.com은 강남제일행정사공인중개사사무소의 홈페이지입니다. 비자·체류·주거 관련
              상담은 아래 연락처로 문의해 주세요.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-relaxed text-ink-200">
              <p className="font-semibold text-white">사무실 위치</p>
              <p className="mt-1">서울시 서초구 법원로 1길 11 금구빌딩 지하 101호</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="tel:02-568-7192"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
              >
                02-568-7192
              </a>
              <a
                href="tel:010-8781-7192"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-ink-100"
              >
                010-8781-7192
              </a>
              <Link
                to="/consult"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3.5 text-sm font-medium text-ink-200 transition hover:bg-white/10"
              >
                admin@korvisa.com
              </Link>
              <span className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-5 py-3.5 text-sm font-medium text-ink-200">
                평일 10:00–18:00 (KST)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
