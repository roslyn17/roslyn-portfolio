export function Hero() {
  return (
    <section className="pt-14 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 w-full py-20">
        <div className="mb-6">
          <span className="font-mono-label text-xs tracking-widest uppercase text-ink-muted">
            Hi, I&apos;m Roslyn
          </span>
        </div>
        <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] font-bold text-ink max-w-4xl mb-10">
          I like to
          <br />
          <span className="italic font-light">build things.</span>
        </h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="#work"
            className="inline-flex items-center gap-3 bg-ink text-white font-mono-label text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-[#333] transition-colors"
          >
            See my projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="font-mono-label text-xs tracking-widest uppercase text-ink-muted hover:text-ink transition-colors underline underline-offset-4"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
