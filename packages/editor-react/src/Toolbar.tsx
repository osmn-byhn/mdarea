import React from "react";
import { useEditor } from "./EditorProvider";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  TerminalSquare,
  Link,
  Image,
  ListOrdered,
  List,
  CheckSquare,
  Heading1,
  Heading2,
  Heading3,
  Table
} from "lucide-react";
import "./styles.css";

export interface ToolbarProps {
  classNames?: {
    btn?: string;
    icon?: string;
  };
}

export function Toolbar({ classNames = {} }: ToolbarProps) {
  const { editor, update } = useEditor();

  const handleAction = (action: () => void) => {
    action();
    update();
  };

  const getBtnClass = (active: boolean) =>
    `toolbar-btn ${active ? 'active' : ''} ${classNames.btn || ''}`.trim();

  return (
    <div className="toolbar">
      <button className={getBtnClass(editor.isActive('bold'))} onClick={() => handleAction(() => editor.toggleWrap("**"))} title="Bold">
        <Bold size={18} className={classNames.icon} />
      </button>
      <button className={getBtnClass(editor.isActive('italic'))} onClick={() => handleAction(() => editor.toggleWrap("_"))} title="Italic">
        <Italic size={18} className={classNames.icon} />
      </button>
      <button className={getBtnClass(editor.isActive('strikethrough'))} onClick={() => handleAction(() => editor.toggleWrap("~~"))} title="Strikethrough">
        <Strikethrough size={18} className={classNames.icon} />
      </button>

      <div className="toolbar-divider" />

      <button className={getBtnClass(editor.isActive('h1'))} onClick={() => handleAction(() => editor.toggleLinePrefix("# "))} title="Heading 1">
        <Heading1 size={18} className={classNames.icon} />
      </button>
      <button className={getBtnClass(editor.isActive('h2'))} onClick={() => handleAction(() => editor.toggleLinePrefix("## "))} title="Heading 2">
        <Heading2 size={18} className={classNames.icon} />
      </button>
      <button className={getBtnClass(editor.isActive('h3'))} onClick={() => handleAction(() => editor.toggleLinePrefix("### "))} title="Heading 3">
        <Heading3 size={18} className={classNames.icon} />
      </button>

      <div className="toolbar-divider" />

      <button className={getBtnClass(editor.isActive('unordered'))} onClick={() => handleAction(() => editor.toggleLinePrefix("- "))} title="Bulleted List">
        <List size={18} className={classNames.icon} />
      </button>
      <button className={getBtnClass(editor.isActive('ordered'))} onClick={() => handleAction(() => editor.toggleLinePrefix("1. "))} title="Ordered List">
        <ListOrdered size={18} className={classNames.icon} />
      </button>
      <button className={getBtnClass(editor.isActive('task'))} onClick={() => handleAction(() => editor.toggleLinePrefix("- [ ] "))} title="Task List">
        <CheckSquare size={18} className={classNames.icon} />
      </button>

      <div className="toolbar-divider" />

      <button className={getBtnClass(editor.isActive('code'))} onClick={() => handleAction(() => editor.toggleWrap("`"))} title="Inline Code">
        <Code size={18} className={classNames.icon} />
      </button>
      <button className={`toolbar-btn ${classNames.btn || ''}`.trim()} onClick={() => handleAction(() => editor.applyBlock('code'))} title="Code Block">
        <TerminalSquare size={18} className={classNames.icon} />
      </button>

      <div className="toolbar-divider" />

      <button className={`toolbar-btn ${classNames.btn || ''}`.trim()} onClick={() => handleAction(() => editor.insertText("[text](url)"))} title="Link">
        <Link size={18} className={classNames.icon} />
      </button>
      <button className={`toolbar-btn ${classNames.btn || ''}`.trim()} onClick={() => handleAction(() => editor.insertText("![alt](url)"))} title="Image">
        <Image size={18} className={classNames.icon} />
      </button>
      <button className={`toolbar-btn ${classNames.btn || ''}`.trim()} onClick={() => handleAction(() => editor.insertText(`
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
`))} title="Table">
        <Table size={18} className={classNames.icon} />
      </button>
    </div>
  );
}
