const links = ["Work", "About", "Contact"];

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-mono-label text-xs tracking-widest uppercase text-ink">
          Roslyn
        </span>
        <div className="flex items-center gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono-label text-xs tracking-widest uppercase text-ink-muted hover:text-ink transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
