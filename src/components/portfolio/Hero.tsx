import { getContent } from "@/lib/content";
import { Editable } from "./Editable";

export async function Hero() {
  const { hero } = await getContent();

  return (
    <section className="pt-14 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 w-full py-20">
        <div className="mb-6">
          <Editable
            path="hero.eyebrow"
            value={hero.eyebrow}
            className="font-mono-label text-xs tracking-widest uppercase text-ink-muted"
          />
        </div>
        <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] font-bold text-ink max-w-4xl mb-10">
          <Editable path="hero.titleLine1" value={hero.titleLine1} />
          <br />
          <Editable
            path="hero.titleLine2"
            value={hero.titleLine2}
            className="italic font-light"
          />
        </h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="#work"
            className="inline-flex items-center gap-3 bg-ink text-white font-mono-label text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-[#333] transition-colors"
          >
            <Editable path="hero.ctaPrimary" value={hero.ctaPrimary} />
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
            <Editable path="hero.ctaSecondary" value={hero.ctaSecondary} />
          </a>
        </div>
      </div>
    </section>
  );
}
