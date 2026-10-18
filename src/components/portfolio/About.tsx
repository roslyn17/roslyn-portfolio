import Image from "next/image";
import skiingPhoto from "@/assets/about-2.jpg";
import ryanMountainPhoto from "@/assets/about-ryan-mountain.jpg";
import { getContent } from "@/lib/content";
import { Editable } from "./Editable";

const gallery = [
  {
    src: skiingPhoto,
    alt: "Roslyn skiing down a snowy slope",
    position: "object-center",
  },
  {
    src: ryanMountainPhoto,
    alt: "Roslyn jumping at the Ryan Mountain summit sign in Joshua Tree National Park",
    position: "object-center sm:object-[center_55%]",
  },
];

// Text and photos share these columns so their edges line up.
const columns = "grid grid-cols-1 sm:grid-cols-[22rem_1fr] gap-8 sm:gap-16";

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
        <div className={`${columns} items-start`}>
          <div>
            <Editable
              as="h2"
              path="about.heading"
              value={about.heading}
              className="font-display text-4xl font-bold text-ink leading-tight block mb-8"
            />
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
          <div>
            {about.paragraphs.map((p, i) => (
              <Editable
                key={i}
                as="p"
                path={`about.paragraphs.${i}`}
                value={p}
                className="text-base text-ink-muted leading-relaxed mb-5 last:mb-0 block"
              />
            ))}
          </div>
        </div>
        <div className={`${columns} mt-16`}>
          {gallery.map(({ src, alt, position }, i) => (
            <div key={i}>
              <div className="aspect-[4/5] sm:aspect-auto sm:h-[28rem] overflow-hidden bg-surface">
                <Image
                  src={src}
                  alt={alt}
                  className={`w-full h-full object-cover ${position}`}
                />
              </div>
              <Editable
                path={`about.gallery.${i}.caption`}
                value={about.gallery[i].caption}
                className="font-mono-label text-[10px] tracking-widest uppercase text-ink-muted mt-3 block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
