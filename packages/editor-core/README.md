# @osmn-byhn/editor-core

Core logic and state management for the markdown editor. This package is framework-agnostic and handles text manipulation, selection state, and formatting operations.

## Installation

```bash
pnpm add @osmn-byhn/editor-core
```

## Usage

```typescript
import { createEditor } from '@osmn-byhn/editor-core'

// Initialize editor
const editor = createEditor('Initial content')

// Get current state
const state = editor.getState()
console.log(state.value) // 'Initial content'

// Update value
editor.setValue('New content')

// Formatting
editor.toggleWrap('**') // Toggle bold
editor.toggleLinePrefix('# ') // Toggle H1
```

## API

### `createEditor(initialValue?: string)`

Creates a new editor instance.

Returns an object with the following methods:

- **`getState()`**: Returns the current `EditorState` ({ value, selection, format }).
- **`setValue(value: string)`**: Updates the editor content.
- **`setSelection(start: number, end: number)`**: Updates the cursor selection.
- **`isActive(type: FormattingType)`**: Checks if the current selection has the specified formatting.
  - Types: `'bold' | 'italic' | 'strikethrough' | 'code' | 'h1' | 'h2' | 'h3' | 'ordered' | 'unordered' | 'task'`
- **`toggleWrap(syntax: string)`**: Toggles wrapping syntax around selection (e.g., `**` for bold).
- **`toggleLinePrefix(prefix: string)`**: Toggles line prefixes (e.g., `# ` for headers).
- **`insertText(text: string)`**: Inserts text at the current cursor position.
- **`applyBlock(type: 'code', lang?: string)`**: Applies block formatting (currently supports code blocks).

### Types

```typescript
type EditorFormat = 'markdown' | 'html'

interface EditorState {
  value: string
  selection: {
    start: number
    end: number
  }
  format: EditorFormat
}
```
