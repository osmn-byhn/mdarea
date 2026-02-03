# @osmn-byhn/storybook-docs

The centralized documentation and component playground for the `@osmn-byhn` ecosystem. It uses Storybook to isolate building UI components and verifying their behavior.

## Getting Started

### Prerequisites
Ensure you have installed dependencies in the root of the monorepo:
```bash
pnpm install
```

### Running Storybook
Start the development server on port 6006:
```bash
pnpm run storybook
```

### Building Static Docs
Build the static site for deployment:
```bash
pnpm run build-storybook
```

## Writing Stories

Stories are located in the `stories/` directory. We use the CSF3 (Component Story Format 3) standard.

### Example Story
Create a new file `stories/MyComponent.stories.tsx`:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MarkdownEditor } from '@osmn-byhn/mdarea';

const meta = {
  title: 'Editor/MarkdownEditor',
  component: MarkdownEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MarkdownEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '# Hello World',
    placeholder: 'Start typing...',
  },
};
```

## Theming

We use a custom CSS theme for stories located at `stories/custom-theme.css`.
To apply global styles or override editor variables in the storybook environment, edit that file.

```css
/* stories/custom-theme.css */
:root {
  --md-primary-color: #0070f3;
}
```
