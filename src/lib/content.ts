import "server-only";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const CONTENT_PATH = path.join(process.cwd(), "src/content/site.json");

export type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  status: "Live" | "Demo" | "In Progress";
  url: string;
  demo: string;
  docs: string;
  image: string;
  imageFit?: "cover" | "contain";
};

export type Detail = {
  label: string;
  value: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type SiteContent = {
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  projects: Project[];
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    details: Detail[];
    gallery: { caption: string }[];
  };
  contact: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    links: ContactLink[];
  };
  footer: {
    text: string;
  };
};

export async function getContent(): Promise<SiteContent> {
  const raw = await readFile(CONTENT_PATH, "utf-8");
  return JSON.parse(raw) as SiteContent;
}

const FORBIDDEN_SEGMENTS = new Set(["__proto__", "prototype", "constructor"]);

export function setByPath(
  target: Record<string, unknown>,
  path: string,
  value: string,
): void {
  const segments = path.split(".").filter(Boolean);
  if (segments.length === 0 || segments.some((s) => FORBIDDEN_SEGMENTS.has(s))) {
    throw new Error("Invalid path");
  }

  let cursor: Record<string, unknown> = target;
  for (let i = 0; i < segments.length - 1; i++) {
    const key = segments[i];
    const next = cursor[key];
    if (typeof next !== "object" || next === null) {
      throw new Error("Invalid path");
    }
    cursor = next as Record<string, unknown>;
  }

  const last = segments[segments.length - 1];
  if (!(last in cursor)) {
    throw new Error("Invalid path");
  }
  cursor[last] = value;
}

export async function saveContent(content: SiteContent): Promise<void> {
  await writeFile(CONTENT_PATH, JSON.stringify(content, null, 2) + "\n", "utf-8");
}
