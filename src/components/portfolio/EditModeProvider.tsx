"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

type EditModeContextValue = {
  editMode: boolean;
  saving: boolean;
  save: (path: string, value: string) => void;
};

const EditModeContext = createContext<EditModeContextValue | null>(null);

export function useEditMode() {
  const ctx = useContext(EditModeContext);
  if (!ctx) {
    throw new Error("useEditMode must be used within EditModeProvider");
  }
  return ctx;
}

const isDev = process.env.NODE_ENV !== "production";

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const save = useCallback(
    (path: string, value: string) => {
      setSaving(true);
      fetch("/api/content", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path, value }),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Save failed");
          router.refresh();
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => setSaving(false));
    },
    [router],
  );

  return (
    <EditModeContext.Provider
      value={{ editMode: isDev && editMode, saving, save }}
    >
      {children}
      {isDev && (
        <button
          type="button"
          onClick={() => setEditMode((v) => !v)}
          className="fixed bottom-6 right-6 z-[60] font-mono-label text-xs tracking-widest uppercase px-5 py-3 shadow-lg transition-colors"
          style={{
            backgroundColor: editMode ? "#111110" : "#ffffff",
            color: editMode ? "#ffffff" : "#111110",
            border: "1px solid #111110",
          }}
        >
          {saving ? "Saving…" : editMode ? "Done editing" : "Edit page"}
        </button>
      )}
    </EditModeContext.Provider>
  );
}
