import { getContent } from "@/lib/content";
import { Editable } from "./Editable";

export async function Contact() {
  const { contact } = await getContent();

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-end">
          <div>
            <Editable
              path="contact.eyebrow"
              value={contact.eyebrow}
              className="font-mono-label text-xs tracking-widest uppercase text-ink-muted block mb-6"
            />
            <h2 className="font-display text-6xl font-bold text-ink leading-tight tracking-tight whitespace-nowrap">
              <Editable path="contact.headingLine1" value={contact.headingLine1} />{" "}
              <Editable path="contact.headingLine2" value={contact.headingLine2} />
            </h2>
          </div>
          <div>
            <div className="space-y-4">
              {contact.links.map((link, i) => (
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
                    <Editable
                      path={`contact.links.${i}.value`}
                      value={link.value}
                    />
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
