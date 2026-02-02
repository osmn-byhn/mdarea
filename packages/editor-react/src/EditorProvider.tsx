import React, { createContext, useContext, useRef, useState } from "react";
import { createEditor } from "editor-core";

const EditorContext = createContext<any>(null);

export interface EditorProviderProps {
  children: React.ReactNode;
  initialValue?: string;
  onChange?: (value: string) => void;
}

export function EditorProvider({ children, initialValue = "", onChange }: EditorProviderProps) {
  const editorRef = useRef(createEditor(initialValue));
  const [, forceUpdate] = useState(0);

  const editor = editorRef.current;

  const update = () => {
    forceUpdate((v) => v + 1);
    // notify external listener
    if (onChange) {
      onChange(editor.getState().value);
    }
  };

  return (
    <EditorContext.Provider value={{ editor, update }}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  return useContext(EditorContext);
}
