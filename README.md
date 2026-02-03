# @osmn-byhn Monorepo

This monorepo contains the source code for the `@osmn-byhn` markdown editor ecosystem.

## Packages

- **[@osmn-byhn/mdarea](./packages/editor-react)**: The main React component for the markdown editor.
- **[@osmn-byhn/editor-core](./packages/editor-core)**: Core logic, state management, and type definitions.
- **[@osmn-byhn/editor-parsers](./packages/editor-parsers)**: Utilities for converting between Markdown and HTML.

## Development

This project uses `pnpm` workspaces.

### Installation

```bash
pnpm install
```

### Developing

To run the storybook development environment:

```bash
pnpm run storybook
```
