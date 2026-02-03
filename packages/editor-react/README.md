# @osmn-byhn/mdarea

A modern, highly customizable React Markdown Editor component.

## Installation

```bash
pnpm add @osmn-byhn/mdarea
```

## Usage

```tsx
import { MarkdownEditor } from '@osmn-byhn/mdarea'
import '@osmn-byhn/mdarea/styles.css' // Import styles if not already included

function App() {
  const [value, setValue] = useState('# Hello World')

  return (
    <MarkdownEditor
      value={value}
      onChange={setValue}
      placeholder="Start typing..."
    />
  )
}
```

## Props

The `MarkdownEditor` component accepts the following props:

- **`value`** (`string`): The current markdown content.
- **`onChange`** (`(value: string) => void`): Callback fired when content changes.
- **`placeholder`** (`string`): Placeholder text for the editor.
- **`className`** (`string`): Additional CSS class for the container.
- **`previewStyle`** (`React.CSSProperties`): Styles applied specifically to the preview pane.
- **`labels`** (`MarkdownEditorLabels`): Customize button labels.
  ```typescript
  {
    write?: string;   // Default: 'Write'
    preview?: string; // Default: 'Preview'
  }
  ```
- **`classNames`** (`MarkdownEditorClassNames`): granularly style parts of the editor.
  ```typescript
  {
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
  ```

## Advanced Usage

For more granular control, you can use the individual components exported from the package:

- `EditorProvider`: Context provider for editor state.
- `Editor`: The raw text area component.
- `Preview`: The markdown preview component.
- `Toolbar`: The formatting toolbar.
- `useEditor()`: Hook to access editor state and methods.
