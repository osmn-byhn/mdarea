import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MarkdownEditorProvider, MarkdownEditor } from "editor-react";
import "./custom-theme.css";

const meta: Meta<typeof MarkdownEditor> = {
    title: "Editor/CustomizedEditor",
    component: MarkdownEditor,
    argTypes: {
        onChange: { action: 'changed' }
    }
};

export default meta;

type Story = StoryObj<typeof MarkdownEditor>;

export const TurkishTheme: Story = {
    args: {
        labels: {
            write: 'Editor',
            preview: 'Page'
        },
        placeholder: "Customeized some markdown...",
        previewStyle: {
            fontFamily: 'Georgia, serif',
            fontSize: '1.25rem',
            lineHeight: '1.8',
            color: '#333'
        },
        classNames: {
            container: 'custom-dark-theme',
            toolbar: 'custom-toolbar',
            mobileTabs: 'custom-mobile-tabs',
            tabBtn: 'custom-tab-btn',
            contentArea: 'custom-content-area',
            editorPane: 'custom-editor-pane',
            previewPane: 'custom-preview-pane'
        }
    },
    render: (args) => (
        <div style={{ height: '600px', padding: '20px', backgroundColor: '#f3f4f6' }}>
            <h3 style={{ marginBottom: '10px', fontFamily: 'sans-serif' }}>Customized Editor</h3>
            <MarkdownEditor {...args} />
        </div>
    ),
};

