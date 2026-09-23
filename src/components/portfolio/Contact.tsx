const links = [
  {
    label: "Email",
    value: "roslyn.yang17@gmail.com",
    href: "mailto:roslyn.yang17@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/roslyn17",
    href: "https://github.com/roslyn17",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/roslyn-yang",
    href: "https://linkedin.com/in/roslyn-yang-a59479164",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-end">
          <div>
            <span className="font-mono-label text-xs tracking-widest uppercase text-ink-muted block mb-6">
              Contact
            </span>
            <h2 className="font-display text-5xl font-bold text-ink leading-tight">
              Let&apos;s work
              <br />
              <span className="italic font-light">together.</span>
            </h2>
          </div>
          <div>
            <div className="space-y-4">
              {links.map((link) => (
                <div
                  key={link.label}
                  className="flex items-center gap-8 border-b border-border pb-4"
                >
                  <span className="font-mono-label text-xs tracking-widest uppercase text-ink-muted w-20 shrink-0">
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    className="text-sm text-ink hover:text-ink-muted transition-colors"
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
