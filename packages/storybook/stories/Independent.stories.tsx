import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MarkdownEditorProvider } from "editor-react";
import { Preview } from "editor-react";
import { Editor } from "editor-react";
import { MarkdownEditor } from "editor-react";

const meta: Meta = {
    title: "Editor/Independent Components",
};

export default meta;

type Story = StoryObj;

export const StandalonePreview: Story = {
    args: {
        markdown: "# Hello World\nThis content is passed directly via **markdown** prop.\n- List item 1\n- List item 2"
    },
    render: (args) => (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Standalone Preview</h3>
            <p>This preview is not connected to an editor context.</p>
            <Preview {...args} />
        </div>
    ),
};


export const EditorWithStateExtraction: Story = {
    render: () => {
        const [value, setValue] = useState("# Initial Content\nType here...");

        return (
            <div style={{ padding: '20px', display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                    <h3>Editor (Controlled)</h3>
                    <MarkdownEditorProvider
                        initialValue={value}
                        onChange={(v) => setValue(v)}
                    >
                        <div style={{ border: '1px solid #ccc', height: '300px' }}>
                            <Editor />
                        </div>
                    </MarkdownEditorProvider>
                </div>
                <div style={{ flex: 1, padding: '10px', background: '#f5f5f5', borderRadius: '8px' }}>
                    <h3>State Output</h3>
                    <pre style={{ whiteSpace: 'pre-wrap' }}>{value}</pre>
                </div>
            </div>
        );
    },
};

export const MarkdownEditorControlled: Story = {
    render: () => {
        const [value, setValue] = useState("# Controlled Editor\n\nType here to see state update below.");

        return (
            <div style={{ padding: '20px' }}>
                <div style={{ height: '400px', marginBottom: '20px' }}>
                    <MarkdownEditor
                        value={value}
                        onChange={setValue}
                    />
                </div>

                <div style={{ padding: '10px', background: '#f0f9ff', borderRadius: '8px', border: '1px solid #bae6fd' }}>
                    <strong>Current State:</strong>
                    <pre style={{ marginTop: '10px' }}>{value}</pre>
                </div>
            </div>
        );
    },

};

export const StyledPreview: Story = {
    args: {
        markdown: "# Stylish Preview\nThis has a custom font and background.",
        style: {
            "fontFamily": "Comic Sans MS, cursive, sans-serif",
            "backgroundColor": "#fffbeb",
            "padding": "20px",
            "borderRadius": "12px",
            "color": "red",
            "border": "2px dashed #f59e0b"
        }
    },
    render: (args) => (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>Styled Preview</h3>
            <p>Demonstrates customizing the preview component directly.</p>
            <Preview {...args} />
        </div>
    ),
};

export const CustomizedControlledEditor: Story = {
    args: {
        placeholder: "Start typing your masterpiece...",
        previewStyle: {
            fontFamily: 'Merriweather, serif',
            fontSize: '1.1rem',
            color: '#2c3e50',
            lineHeight: '1.7'
        },
        classNames: {
            container: 'custom-modern-theme',
            toolbar: 'custom-modern-toolbar'
        }
    },
    render: (args) => {
        const [value, setValue] = useState("# Customized & Controlled\n\nThis editor has custom placeholder and preview styles, while being fully controlled.");

        return (
            <div style={{ padding: '20px' }}>
                <div style={{ height: '500px', marginBottom: '20px' }}>
                    <MarkdownEditor
                        {...args}
                        value={value}
                        onChange={setValue}
                    />
                </div>

                <div style={{ padding: '10px', background: '#e0f2fe', borderRadius: '8px', color: '#0369a1' }}>
                    <strong>Live Value:</strong> {value.length} characters
                </div>
            </div>
        );
    },
};
