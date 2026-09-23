import Image from "next/image";
import { getContent } from "@/lib/content";
import { Editable } from "./Editable";

export async function Projects() {
  const { projects } = await getContent();

  return (
    <section id="work" className="py-24 border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="font-display text-5xl font-bold text-ink">Work</h2>
          <span className="font-mono-label text-xs tracking-widest uppercase text-ink-muted">
            {projects.length} projects
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {projects.map((project, i) => (
            <div key={project.id} className="bg-white group cursor-pointer">
              <div className="relative overflow-hidden bg-surface h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <Editable
                    as="h3"
                    path={`projects.${i}.title`}
                    value={project.title}
                    className="font-display text-2xl font-bold text-ink"
                  />
                  <span
                    className={`font-mono-label text-[10px] tracking-widest uppercase px-2 py-1 ${
                      project.status === "Live"
                        ? "bg-ink text-white"
                        : "bg-surface text-ink-muted"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <Editable
                  as="p"
                  path={`projects.${i}.description`}
                  value={project.description}
                  className="text-sm text-ink-muted leading-relaxed mb-5 block"
                />
                <div className="flex gap-2 flex-wrap mb-5">
                  {project.stack.map((tag, j) => (
                    <Editable
                      key={j}
                      path={`projects.${i}.stack.${j}`}
                      value={tag}
                      className="font-mono-label text-[10px] tracking-widest uppercase text-ink-muted border border-border px-2 py-1"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-6 border-t border-border pt-4">
                  <a
                    href={project.url}
                    className="font-mono-label text-[10px] tracking-widest uppercase text-ink flex items-center gap-1.5 hover:gap-3 transition-all"
                  >
                    Live demo
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M1 6h10M6 1l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <span className="text-border">|</span>
                  <a
                    href={project.docs}
                    className="font-mono-label text-[10px] tracking-widest uppercase text-ink-muted hover:text-ink flex items-center gap-1.5 transition-colors"
                  >
                    Docs
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M1 6h10M6 1l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
