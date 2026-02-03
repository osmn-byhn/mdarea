# @osmn-byhn/editor-parsers

A robust Markdown/HTML conversion utility package for the `@osmn-byhn` ecosystem. It abstracts away the complexity of configuring `remark` and `turndown` to provide a standardized conversion pipeline.

## Capabilities

- **Markdown to HTML**: Uses `remark` with GFM (GitHub Flavored Markdown) support.
- **HTML to Markdown**: Uses `turndown` to convert HTML back to Markdown.
- **Async Processing**: The markdown processor is asynchronous (Promise-based) to handle potential future async plugins.

## Installation

```bash
pnpm add @osmn-byhn/editor-parsers
```

## API Reference

### `markdownToHtml(md: string): Promise<string>`

Converts a markdown string into secure, sanitized HTML.

- **Parameters**: `md` (string) - The source markdown text.
- **Returns**: `Promise<string>` - The compiled HTML string.
- **Features**:
  - Tables (GFM)
  - Strikethrough (GFM)
  - Task lists (GFM)
  - Auto-linking (GFM)

```typescript
import { markdownToHtml } from '@osmn-byhn/editor-parsers'

const md = `
# Title
- [x] Task done
- [ ] Task todo
`

const html = await markdownToHtml(md)
// <h1>Title</h1>
// <ul>
// <li><input type="checkbox" checked disabledNode> Task done</li>
// <li><input type="checkbox" disabledNode> Task todo</li>
// </ul>
```

### `htmlToMarkdown(html: string): string`

Converts an HTML string back into Markdown. Useful for copy-pasting HTML content into the editor or persisting HTML editor state as markdown.

- **Parameters**: `html` (string) - The source HTML string.
- **Returns**: `string` - The generated Markdown text.

```typescript
import { htmlToMarkdown } from '@osmn-byhn/editor-parsers'

const html = '<h1>Hello <em>World</em></h1>'
const md = htmlToMarkdown(html)
// # Hello _World_
```

## Dependencies

- **remark**: Core markdown processor.
- **remark-gfm**: Adds support for GitHub Flavored Markdown (tables, checklists, etc.).
- **remark-html**: Compiles to HTML.
- **turndown**: Handles HTML to Markdown conversion.
