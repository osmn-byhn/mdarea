import React, { useState } from "react";
import { EditorProvider, EditorProviderProps } from "./EditorProvider";
import { Toolbar } from "./Toolbar";
import { Editor } from "./Editor";
import { Preview } from "./Preview";
import "./styles.css";

export interface MarkdownEditorLabels {
    write?: string;
    preview?: string;
}

export interface MarkdownEditorClassNames {
    container?: string;
    toolbar?: string;
    toolbarBtn?: string;
    toolbarIcon?: string;
    mobileTabs?: string;
    tabBtn?: string;
    contentArea?: string;
    editorPane?: string;
    previewPane?: string;
    textArea?: string;
}

export interface MarkdownEditorProps {
    labels?: MarkdownEditorLabels;
    classNames?: MarkdownEditorClassNames;
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    previewStyle?: React.CSSProperties;
}

export function MarkdownEditor({
    labels = {},
    classNames = {},
    className = '',
    placeholder,
    value,
    onChange,
    previewStyle
}: MarkdownEditorProps) {
    const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');

    const {
        write: writeLabel = 'Write',
        preview: previewLabel = 'Preview'
    } = labels;

    return (
        <MarkdownEditorProvider initialValue={value} onChange={onChange}>
            <div className={`md-editor-container ${className} ${classNames.container || ''}`.trim()}>
                <div className={`md-toolbar-container ${classNames.toolbar || ''}`.trim()}>
                    <Toolbar classNames={{
                        btn: classNames.toolbarBtn,
                        icon: classNames.toolbarIcon
                    }} />
                </div>

                <div className={`md-mobile-tabs ${classNames.mobileTabs || ''}`.trim()}>
                    <button
                        className={`md-tab-btn ${activeTab === 'write' ? 'active' : ''} ${classNames.tabBtn || ''}`.trim()}
                        onClick={() => setActiveTab('write')}
                    >
                        {writeLabel}
                    </button>
                    <button
                        className={`md-tab-btn ${activeTab === 'preview' ? 'active' : ''} ${classNames.tabBtn || ''}`.trim()}
                        onClick={() => setActiveTab('preview')}
                    >
                        {previewLabel}
                    </button>
                </div>

                <div className={`md-content-area ${classNames.contentArea || ''}`.trim()}>
                    <div className={`md-pane md-pane-editor ${activeTab === 'write' ? 'active' : ''} ${classNames.editorPane || ''}`.trim()}>
                        <Editor placeholder={placeholder} className={classNames.textArea} />
                    </div>
                    <div className={`md-pane md-pane-preview ${activeTab === 'preview' ? 'active' : ''} ${classNames.previewPane || ''}`.trim()}>
                        <Preview style={previewStyle} className={classNames.previewPane} />
                    </div>
                </div>
            </div>
        </MarkdownEditorProvider>
    );
}

export function MarkdownEditorProvider({ children, initialValue, onChange }: EditorProviderProps) {
    return <EditorProvider initialValue={initialValue} onChange={onChange}>{children}</EditorProvider>;
}
