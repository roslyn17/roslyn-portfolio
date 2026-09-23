"use client";

import { useEditMode } from "./EditModeProvider";

type EditableProps = {
  path: string;
  value: string;
  as?: "span" | "p" | "h1" | "h2" | "h3";
  className?: string;
};

export function Editable({ path, value, as = "span", className }: EditableProps) {
  const { editMode, save } = useEditMode();
  const Tag = as;

  if (!editMode) {
    return <Tag className={className}>{value}</Tag>;
  }

  return (
    <Tag
      className={`${className ?? ""} outline-dashed outline-1 outline-offset-2 outline-[#6b6b68] focus:outline-[#111110] cursor-text`}
      contentEditable
      suppressContentEditableWarning
      onClick={(e) => e.preventDefault()}
      onBlur={(e) => {
        const next = e.currentTarget.textContent ?? "";
        if (next !== value) save(path, next);
      }}
    >
      {value}
    </Tag>
  );
}
