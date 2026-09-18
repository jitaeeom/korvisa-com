type JobServiceCtaProps = {
  heading: string;
  description: string;
};

const JOB_CTAS = [
  {
    label: "외국인 구직자",
    title: "한국에서 일자리를 찾고 있나요?",
    href: "https://job.korvisa.com/resume.html",
    action: "외국인 구직 등록하기 →",
  },
  {
    label: "기업 담당자",
    title: "외국인 숙련인력이 필요한가요?",
    href: "https://job.korvisa.com/request.html",
    action: "외국인 인력 요청하기 →",
  },
] as const;

export function JobServiceCta({ heading, description }: JobServiceCtaProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-ink-900/40 p-6 sm:p-8">
      <h2 className="text-xl font-bold text-white sm:text-2xl">{heading}</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-ink-300">{description}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {JOB_CTAS.map((item) => (
          <article key={item.href} className="rounded-3xl border border-white/10 bg-black/25 p-5">
            <p className="text-xs font-semibold tracking-wider text-sky-300">{item.label}</p>
            <h3 className="mt-2 text-base font-semibold text-white">{item.title}</h3>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-sky-300 transition hover:text-white hover:underline"
            >
              {item.action}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
