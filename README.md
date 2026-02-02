# @osmn-byhn/mdarea 🚀

A modern, responsive, and highly customizable Markdown editor for React applications. Designed for performance, flexibility, and a premium developer experience.

![Preview](https://via.placeholder.com/800x400?text=MDArea+Markdown+Editor) *Add your demo GIF here!*

## ✨ Features

- **📱 Fully Responsive**: Side-by-side layout on desktop, tabbed navigation on mobile.
- **🛠️ Static Toolbar**: Toolbar stays pinned at the top while you scroll through long content.
- **📊 Table Support**: Built-in support for GFM (GitHub Flavored Markdown) tables with easy insertion.
- **🎨 Highly Customizable**: 
  - Custom labels for tabs (Localization support).
  - Custom placeholders.
  - Granular CSS hooks for every element (Buttons, Icons, Textarea, Panes).
  - Support for **Tailwind CSS**, **Bulma**, **Bootstrap**, or any utility-first CSS framework.
- **🧠 Flexible State Management**: Use it as a controlled OR uncontrolled component.
- **🧩 Decoupled Components**: Use `Editor` and `Preview` independently if needed.

## 📦 Installation

```bash
pnpm add @osmn-byhn/mdarea
# or
npm install @osmn-byhn/mdarea
```

## 🚀 Quick Start

```tsx
import { MarkdownEditor } from '@osmn-byhn/mdarea';
import '@osmn-byhn/mdarea/dist/styles.css'; // Don't forget the styles!

function App() {
  return (
    <div style={{ height: '500px' }}>
      <MarkdownEditor />
    </div>
  );
}
```

## 🛠️ Advanced Usage

### Controlled Mode
Extract markdown content to your own state (e.g., for saving to a database).

```tsx
const [content, setContent] = useState("# Initial Content");

<MarkdownEditor 
  value={content} 
  onChange={(newValue) => setContent(newValue)} 
/>
```

### CSS Framework Integration (e.g. Tailwind)
MDArea is built to play nicely with utility-first frameworks.

```tsx
<MarkdownEditor
  classNames={{
    container: "border-2 border-indigo-500 rounded-xl shadow-lg",
    toolbar: "bg-indigo-50 p-2",
    toolbarBtn: "hover:bg-indigo-200 rounded",
    textArea: "p-4 focus:outline-none",
    previewPane: "prose prose-indigo max-w-none p-4"
  }}
/>
```

### Custom Styling
Apply direct styles to the preview content.

```tsx
<MarkdownEditor
  previewStyle={{
    fontFamily: 'Georgia, serif',
    fontSize: '1.2rem',
    color: '#333'
  }}
/>
```

## 🧩 Standalone Components

You can use the internal components separately:

```tsx
import { Preview, Editor, MarkdownEditorProvider } from '@osmn-byhn/mdarea';

// Just a Previewer
<Preview markdown="# Static Content" />

// Custom Layout with Provider
<MarkdownEditorProvider initialValue="# Hello" onChange={...}>
  <div className="my-custom-layout">
    <Editor />
    <aside>
       <Preview />
    </aside>
  </div>
</MarkdownEditorProvider>
```

## ⚙️ Props API

| Prop | Type | Description |
| :--- | :--- | :--- |
| `value` | `string` | Controlled value of the editor. |
| `onChange` | `(val: string) => void` | Callback triggered on every change. |
| `placeholder` | `string` | Custom placeholder text. |
| `labels` | `object` | Labels for mobile tabs (e.g. `{ write: 'Yaz', preview: 'Önizleme' }`). |
| `previewStyle` | `object` | React CSS styles for the preview content. |
| `classNames` | `object` | Granular class hooks (container, toolbar, toolbarBtn, textArea, etc.). |

## 🛠️ Development

This project is a pnpm monorepo.

```bash
# Install dependencies
pnpm install

# Run Storybook
pnpm --filter storybook dev
```

## 📄 License

ISC © [Osman Beyhan](https://github.com/osmn-byhn)
