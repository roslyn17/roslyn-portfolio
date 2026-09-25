import Image from "next/image";
import roslynPhoto from "@/assets/roslyn.jpeg";
import galleryPhoto2 from "@/assets/about-2.jpg";
import galleryPhoto3 from "@/assets/about-3.jpg";
import { getContent } from "@/lib/content";
import { Editable } from "./Editable";

export async function About() {
  const { about } = await getContent();

  return (
    <section id="about" className="py-24 border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <Editable
          path="about.eyebrow"
          value={about.eyebrow}
          className="font-mono-label text-xs tracking-widest uppercase text-ink-muted block mb-6"
        />
        <div className="grid grid-cols-1 sm:grid-cols-[20rem_1fr] gap-16 items-start">
          <div>
            <Editable
              as="h2"
              path="about.heading"
              value={about.heading}
              className="font-display text-4xl font-bold text-ink leading-tight mb-8 block"
            />
            <div className="overflow-hidden bg-surface w-80 h-80 max-w-full">
              <Image
                src={roslynPhoto}
                alt="Roslyn"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div>
            {about.paragraphs.map((p, i) => (
              <Editable
                key={i}
                as="p"
                path={`about.paragraphs.${i}`}
                value={p}
                className="text-base text-ink-muted leading-relaxed mb-5 block"
              />
            ))}
            <div className="space-y-4 border-t border-border pt-8">
              {about.details.map((item, i) => (
                <div key={item.label} className="flex gap-8">
                  <span className="font-mono-label text-xs tracking-widest uppercase text-ink-muted w-20 shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <Editable
                    path={`about.details.${i}.value`}
                    value={item.value}
                    className="text-sm text-ink"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-16">
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-surface">
              <Image
                src={galleryPhoto3}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <Editable
              path="about.gallery.1.caption"
              value={about.gallery[1].caption}
              className="font-mono-label text-[10px] tracking-widest uppercase text-ink-muted mt-3 block"
            />
          </div>
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-surface">
              <Image
                src={galleryPhoto2}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
            <Editable
              path="about.gallery.0.caption"
              value={about.gallery[0].caption}
              className="font-mono-label text-[10px] tracking-widest uppercase text-ink-muted mt-3 block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
