import Image from "next/image";
import roslynPhoto from "@/assets/roslyn.jpeg";

const details = [
  { label: "Interests", value: "Tech, Sports, Nature, Photography" },
  { label: "Location", value: "San Francisco, CA" },
];

export function About() {
  return (
    <section id="about" className="py-24 border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-start">
          <div>
            <span className="font-mono-label text-xs tracking-widest uppercase text-ink-muted block mb-6">
              About
            </span>
            <h2 className="font-display text-5xl font-bold text-ink leading-tight mb-8">
              Student, Builder, Hobbyist.
            </h2>
            <div className="overflow-hidden bg-surface h-96">
              <Image
                src={roslynPhoto}
                alt="Roslyn"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="pt-16">
            <p className="text-base text-ink-muted leading-relaxed mb-5">
              Hi, I&apos;m Roslyn. Every project on this site was built to
              solve a real problem, or just for fun. I&apos;m based in the
              Bay Area, though originally from the East Coast.
            </p>
            <p className="text-base text-ink-muted leading-relaxed mb-5">
              I hold Bachelor&apos;s degrees in Computer Science and Business
              Management from Case Western Reserve University, and I&apos;m
              currently pursuing my MBA at UC Berkeley Haas. Before business
              school, I spent 5 years as a Consultant at Deloitte, working
              with Big Tech clients on privacy and infrastructure/data center
              projects.
            </p>
            <p className="text-base text-ink-muted leading-relaxed mb-10">
              Outside of building and studying, I like staying active and
              spending time outdoors. Tennis is my favorite sport, and
              I&apos;m currently working on improving my photography.
              I&apos;m also on a mission to visit all 50 states, every
              national park, and every MLB ballpark.
            </p>
            <div className="space-y-4 border-t border-border pt-8">
              {details.map((item) => (
                <div key={item.label} className="flex gap-8">
                  <span className="font-mono-label text-xs tracking-widest uppercase text-ink-muted w-20 shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-sm text-ink">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
