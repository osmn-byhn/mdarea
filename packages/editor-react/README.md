# @osmn-byhn/mdarea

A powerful, accessible, and highly customizable React Markdown Editor component. It provides a rich writing experience with split-pane preview, toolbar formatting, and comprehensive styling options.

## Features

- **Split-pane View**: Write and preview markdown side-by-side.
- **Toolbar**: Rich formatting toolbar (Bold, Italic, Headings, Lists, Code, etc.).
- **Syntax Highlighting**: Built-in support for code block syntax highlighting.
- **Customizable**: Full control over styles, labels, and classes.
- **Mobile Friendly**: Tabbed interface for mobile devices.

## Installation

```bash
pnpm add @osmn-byhn/mdarea
```

## Basic Usage

Import the component and the necessary CSS.

```tsx
import { useState } from 'react'
import { MarkdownEditor } from '@osmn-byhn/mdarea'
import '@osmn-byhn/mdarea/styles.css'

function App() {
  const [value, setValue] = useState('# Hello World')

  return (
    <div style={{ height: '500px' }}>
      <MarkdownEditor
        value={value}
        onChange={setValue}
        placeholder="Start writing..."
      />
    </div>
  )
}
```

## Component API

### `<MarkdownEditor />`

The main component that integrates the editor, toolbar, and preview.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | The markdown content. |
| `onChange` | `(value: string) => void` | `undefined` | Callback fired when content changes. |
| `placeholder` | `string` | `undefined` | Placeholder text shown when empty. |
| `className` | `string` | `''` | Class name for the outer container. |
| `previewStyle` | `CSSProperties` | `{}` | Inline styles applied to the preview pane. |
| `labels` | `MarkdownEditorLabels` | `{}` | Custom labels for UI elements. |
| `classNames` | `MarkdownEditorClassNames` | `{}` | Granular class names for sub-components. |

#### Customizing Labels (`labels` prop)

You can translate or customize the button labels for the mobile view tabs.

```tsx
<MarkdownEditor
  labels={{
    write: 'Düzenle',
    preview: 'Önizleme'
  }}
/>
```

#### Customizing Styles (`classNames` prop)

Use `classNames` to add custom classes to specific parts of the editor without using `!important` global overrides.

```tsx
<MarkdownEditor
  classNames={{
    container: 'my-editor-root',
    toolbar: 'my-toolbar',
    toolbarBtn: 'my-tool-btn',
    contentArea: 'my-content',
    textArea: 'my-textarea',
    previewPane: 'my-preview'
  }}
/>
```

## CSS Customization

The editor uses plain CSS with standard classes. You can override styles globally if preferred.

Core classes:
- `.md-editor-container`: Main wrapper.
- `.md-toolbar-container`: Toolbar wrapper.
- `.md-content-area`: Wrapper for editor/preview panes.
- `.md-pane`: Individual pane (editor or preview).
- `.md-textarea`: The raw textarea input.

## Advanced Usage

If `MarkdownEditor` doesn't fit your layout needs, you can compose your own editor using the sub-components.

```tsx
import { EditorProvider, Toolbar, Editor, Preview } from '@osmn-byhn/mdarea'

function CustomLayout() {
  return (
    <EditorProvider initialValue="# Custom Layout">
      <div className="my-custom-layout">
        <Toolbar />
        <div className="columns">
          <Editor />
          <Preview />
        </div>
      </div>
    </EditorProvider>
  )
}
```

Want you run or test the project live on the web? 
Storybook is deployed on Vercel. You can access it at `https://mdarea-storybook.osmanbeyhan.com`.
