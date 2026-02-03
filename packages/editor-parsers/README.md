# @osmn-byhn/editor-parsers

Markdown-to-HTML and HTML-to-Markdown conversion utilities. Built on top of `remark` and `turndown`.

## Installation

```bash
pnpm add @osmn-byhn/editor-parsers
```

## Usage

```typescript
import { markdownToHtml, htmlToMarkdown } from '@osmn-byhn/editor-parsers'

// Markdown to HTML
const markdown = '# Hello World'
const html = await markdownToHtml(markdown)
console.log(html) // '<h1>Hello World</h1>\n'

// HTML to Markdown
const inputHtml = '<h1>Hello World</h1>'
const outputMarkdown = htmlToMarkdown(inputHtml)
console.log(outputMarkdown) // 'Hello World\n==========='
```

## API

### `markdownToHtml(md: string): Promise<string>`

Converts a markdown string to HTML using `remark`, `remark-gfm` (GitHub Flavored Markdown), and `remark-html`.

### `htmlToMarkdown(html: string): string`

Converts an HTML string to Markdown using `turndown`.
