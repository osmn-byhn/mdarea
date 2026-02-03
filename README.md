# @osmn-byhn/mdarea Ecosystem

Welcome to the **React Markdown Editor** suite. This repository contains everything you need to build, customize, and deploy a professional markdown editing experience in your web applications.

Whether you are a beginner looking for a "drop-in" component or an expert building a custom editor from scratch, this monorepo has the tools for you.

---

## 🚀 Quick Start (For React Users)

If you just want a working editor in your React app **right now**, follow these steps.

### 1. Install

```bash
pnpm add @osmn-byhn/mdarea
# or
npm install @osmn-byhn/mdarea
```

### 2. Usage

Copy and paste this code into your application:

```tsx
import React, { useState } from 'react';
import { MarkdownEditor } from '@osmn-byhn/mdarea';

// IMPORTANT: Do not forget to import the styles!
import '@osmn-byhn/mdarea/styles.css';

export default function MyEditor() {
  const [content, setContent] = useState('# Hello World');

  return (
    <div style={{ height: '500px', border: '1px solid #ddd' }}>
      <MarkdownEditor
        value={content}
        onChange={(newContent) => setContent(newContent)}
        placeholder="Start typing your masterpiece..."
      />
    </div>
  );
}
```

**That's it!** You now have a fully functional markdown editor with a toolbar, split-pane preview, and syntax highlighting.

---

## 📦 Packages Overview

This project is divided into specialized packages. Depending on what you need, you can use them together or separately.

| Package | Description | Use Case |
|---------|-------------|----------|
| **[`@osmn-byhn/mdarea`](./packages/editor-react)** | The main React component. | "I want a finished editor UI." |
| **[`@osmn-byhn/editor-core`](./packages/editor-core)** | The logic engine (State, Selection). | "I want to build my own UI from scratch." |
| **[`@osmn-byhn/editor-parsers`](./packages/editor-parsers)** | Converters (Markdown ↔ HTML). | "I need to save as HTML or load HTML." |

---

## 🎨 Customization (Make it Yours)

The `MarkdownEditor` is highly customizable. You don't have to stick with the default look.

### Changing Labels (Localization)

Want the buttons to be in Turkish? or French?

```tsx
<MarkdownEditor
  labels={{
    write: 'Yaz',
    preview: 'Önizleme'
  }}
/>
```

### Styling (CSS)

We use standard CSS classes. You can override them in your own CSS files.

```css
/* In your global css file */
.md-toolbar-container {
  background-color: #f0f0f0; /* Change toolbar background */
}

.md-tab-btn.active {
  color: #0070f3; /* Change active tab color */
  border-bottom-color: #0070f3;
}
```

For more granular control without global side-effects, pass your own class names:

```tsx
<MarkdownEditor
  classNames={{
    container: 'my-custom-editor-wrapper',
    toolbar: 'my-custom-toolbar',
    textArea: 'my-custom-textarea'
  }}
/>
```

---

## 🛠 Advanced Usage

### Using the Core Logic (`@osmn-byhn/editor-core`)

If you are building a non-React app or want total control, use the core library.

```typescript
import { createEditor } from '@osmn-byhn/editor-core';

// 1. Create the engine
const editor = createEditor('Initial text');

// 2. Manipulate state programmatically
editor.insertText('Hello ');
editor.toggleWrap('**'); // Toggles bold
editor.insertText('World');
editor.toggleWrap('**');

// 3. Get the result
console.log(editor.getState().value); 
// Output: "Hello **World**"
```

### Converting HTML to Markdown (and back)

Need to save your content as HTML for a CMS? Or load existing HTML into the editor?

```typescript
import { markdownToHtml, htmlToMarkdown } from '@osmn-byhn/editor-parsers';

// SAVE: Markdown -> HTML
const htmlOutput = await markdownToHtml('# Title');
// Result: <h1>Title</h1>

// LOAD: HTML -> Markdown
const markdownInput = htmlToMarkdown('<strong>Bold</strong> text');
// Result: **Bold** text
```

---

## 💻 Development

Want to contribute or run the project locally?

1. **Clone the repo**
   ```bash
   git clone https://github.com/osmn-byhn/mdarea.git
   cd mdarea
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the Storybook playground**
   ```bash
   pnpm run storybook
   ```
   This opens a development environment at `http://localhost:6006` where you can see all components in action.

---

## 📄 License

ISC License. Made with ❤️ by Osman Beyhan.
