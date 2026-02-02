import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MarkdownEditor } from "editor-react";

const meta: Meta<typeof MarkdownEditor> = {
    title: "Editor/Tailwind Example",
    component: MarkdownEditor,
};

export default meta;

type Story = StoryObj<typeof MarkdownEditor>;

export const TailwindStyled: Story = {
    args: {
        placeholder: "Tailwind styled editor...",
        classNames: {
            container: "border-2 border-indigo-500 rounded-xl overflow-hidden shadow-lg",
            toolbar: "bg-indigo-50 border-b border-indigo-100 p-2",
            toolbarBtn: "hover:bg-indigo-200 text-indigo-700 rounded transition-colors duration-200",
            textArea: "focus:ring-2 focus:ring-indigo-300 outline-none p-4",
            previewPane: "prose prose-indigo max-w-none p-4 bg-white"
        }
    },
    render: (args) => (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Tailwind CSS Integration</h2>
                <div style={{ height: '600px' }}>
                    <MarkdownEditor {...args} />
                </div>
                <p className="mt-4 text-gray-500 text-sm italic">
                    Note: This example uses utility classes. In a real project with Tailwind installed, these would apply automatically.
                </p>
            </div>
        </div>
    ),
};
