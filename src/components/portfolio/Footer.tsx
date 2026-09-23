import { getContent } from "@/lib/content";
import { Editable } from "./Editable";

export async function Footer() {
  const { footer } = await getContent();

  return (
    <footer className="border-t border-border py-6">
      <div className="max-w-5xl mx-auto px-6">
        <Editable
          path="footer.text"
          value={footer.text}
          className="font-mono-label text-xs tracking-widest uppercase text-ink-muted"
        />
      </div>
    </footer>
  );
}
