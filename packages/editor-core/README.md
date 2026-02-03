# @osmn-byhn/editor-core

The core logic and state management library for the `@osmn-byhn` markdown editor ecosystem. This package is framework-agnostic, meaning it can be used with React, Vue, Svelte, or vanilla JavaScript.

It handles:
- Text manipulation
- Selection (cursor) management
- Markdown formatting logic (bold, italic, lists, etc.)
- History/Undo management (planned)

## Installation

```bash
pnpm add @osmn-byhn/editor-core
```

## Quick Start

```typescript
import { createEditor } from '@osmn-byhn/editor-core'

// 1. Initialize the editor
const editor = createEditor('Hello **World**')

// 2. Subscribe to changes (if needed manually) or get state
console.log(editor.getState())
// Output: { value: 'Hello **World**', selection: { start: 0, end: 0 }, format: 'markdown' }

// 3. Perform actions
editor.setSelection(6, 11) // Select "World"
editor.toggleWrap('_')     // Italicize -> "Hello **_World_**"
```

## API Reference

### `createEditor(initialValue?: string)`

Initializes a new editor instance.

- **Parameters**: 
  - `initialValue` (optional): The starting markdown content. Default is `''`.
- **Returns**: An object containing the editor methods.

---

### Key Methods

#### `getState(): EditorState`
Returns the current snapshot of the editor state.
```typescript
interface EditorState {
  value: string          // Current content
  selection: {           // Current cursor/selection position
    start: number
    end: number
  }
  format: EditorFormat   // 'markdown' | 'html'
}
```

#### `setValue(value: string): void`
Replaces the entire content of the editor. This is useful for controlled components or external updates.

#### `setSelection(start: number, end: number): void`
Updates the cursor position or selection range.
- `start`: Start index of the selection.
- `end`: End index of the selection.

#### `insertText(text: string): void`
Inserts text at the current cursor position or replaces the current selection with the given text.

#### `isActive(type: FormattingType): boolean`
Checks if the current selection is formatted with the specific type.
- **Types**: `'bold' | 'italic' | 'strikethrough' | 'code' | 'h1' | 'h2' | 'h3' | 'ordered' | 'unordered' | 'task'`

#### `toggleWrap(syntax: string): void`
Toggles wrapping syntax around the current selection. Used for inline styles.
- **Example**: `editor.toggleWrap('**')` for bold.

#### `toggleLinePrefix(prefix: string): void`
Toggles a prefix at the start of the current line. Used for block styles.
- **Example**: `editor.toggleLinePrefix('# ')` for H1.

#### `applyBlock(type: 'code', lang?: string): void`
Wraps the selection in a code block with an optional language.
- **Example**: `editor.applyBlock('code', 'typescript')`

## Types

```typescript
export type EditorFormat = 'markdown' | 'html'

export interface EditorState {
  value: string
  selection: {
    start: number
    end: number
  }
  format: EditorFormat
}
```
