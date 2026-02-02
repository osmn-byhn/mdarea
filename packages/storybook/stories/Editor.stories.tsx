import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MarkdownEditor } from "editor-react";

const meta: Meta<typeof MarkdownEditor> = {
  title: "Editor/MarkdownEditor",
  component: MarkdownEditor,
  argTypes: {
    onChange: { action: 'changed' }
  }
};

export default meta;

type Story = StoryObj<typeof MarkdownEditor>;

export const Basic: Story = {
  args: {
    placeholder: "Type some markdown...",
  },
  render: (args) => (
    <div style={{ height: '500px', padding: '20px' }}>
      <MarkdownEditor {...args} />
    </div>
  ),
};



