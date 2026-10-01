"use client";

import { useEffect, useRef, useState } from "react";

const Arrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M1 6h10M6 1l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const linkClass =
  "font-mono-label text-[10px] tracking-widest uppercase text-ink flex items-center gap-1.5 hover:gap-3 transition-all";

// A demo that is a video file plays in a popup on the page; anything else opens in a new tab.
export function DemoLink({ href, title }: { href: string; title: string }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isVideo = /\.(mp4|webm|mov)$/i.test(href);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  if (!isVideo) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        Live demo
        <Arrow />
      </a>
    );
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`${linkClass} cursor-pointer`}>
        Live demo
        <Arrow />
      </button>
      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        // Clicking the dimmed backdrop (the dialog element itself) closes it.
        onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        aria-label={`${title} demo video`}
        className="m-auto bg-transparent p-0 backdrop:bg-black/80"
      >
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute -top-11 right-0 font-mono-label text-[10px] tracking-widest uppercase text-white flex items-center gap-2 cursor-pointer"
          >
            Close
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          {/* Mounted only while open, so the video starts fresh and stops when closed. */}
          {open && (
            <video
              src={href}
              controls
              autoPlay
              playsInline
              className="block max-h-[85vh] max-w-[92vw] w-auto rounded-2xl bg-black"
            />
          )}
        </div>
      </dialog>
    </>
  );
}
