import React, { useEffect, useState } from "react";
import parse, { DOMNode, Element } from 'html-react-parser';
import { useEditor } from "./EditorProvider";
import { markdownToHtml } from "editor-parsers";
import { CodeBlock } from "./CodeBlock";
import "./styles.css";

export interface PreviewProps {
  markdown?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Preview({ markdown, className, style }: PreviewProps) {
  const context = useEditor();
  const [html, setHtml] = useState("");

  const content = markdown !== undefined ? markdown : context?.editor.getState().value || "";

  useEffect(() => {
    markdownToHtml(content).then(setHtml);
  }, [content]);

  const options = {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element && domNode.tagName === 'pre') {
        const codeElement = domNode.children[0] as Element;
        if (codeElement && codeElement.tagName === 'code') {
          const className = codeElement.attribs.class || '';
          const match = /language-(\w+)/.exec(className);
          const language = match ? match[1] : 'text';
          // Getting text content from the code element's children (text nodes)
          const code = (codeElement.children[0] as any)?.data || '';

          return <CodeBlock language={language} value={code} />;
        }
      }
    }
  };

  return <div className={`editor-preview ${className || ''}`.trim()} style={style}>{parse(html, options)}</div>;
}
