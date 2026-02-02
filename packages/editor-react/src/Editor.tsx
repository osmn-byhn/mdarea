import React from "react";
import { useEditor } from "./EditorProvider";
import "./styles.css";

export interface EditorProps {
  placeholder?: string;
  className?: string;
}

export function Editor({ placeholder, className }: EditorProps) {
  const { editor, update } = useEditor();
  const state = editor.getState();
  const placeholderText = placeholder ?? "Type some markdown...";

  return (
    <div className="editor-main">
      <textarea
        className={`editor-textarea ${className || ''}`.trim()}
        value={state.value}
        onChange={(e) => {
          editor.setValue(e.target.value);
          update();
        }}
        onSelect={(e) => {
          const target = e.target as HTMLTextAreaElement;
          editor.setSelection(target.selectionStart, target.selectionEnd);
        }}
        placeholder={placeholderText}
      />
    </div>
  );
}
