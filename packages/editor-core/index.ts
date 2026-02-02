export type EditorFormat = 'markdown' | 'html'

export interface EditorState {
  value: string
  selection: {
    start: number
    end: number
  }
  format: EditorFormat
}

export function createEditor(initialValue = '') {
  let state: EditorState = {
    value: initialValue,
    selection: { start: 0, end: 0 },
    format: 'markdown',
  }

  return {
    getState: () => state,

    setValue(value: string) {
      state = { ...state, value }
    },

    setSelection(start: number, end: number) {
      state = { ...state, selection: { start, end } }
    },

    isActive(type: 'bold' | 'italic' | 'strikethrough' | 'code' | 'h1' | 'h2' | 'h3' | 'ordered' | 'unordered' | 'task') {
      const { start, end } = state.selection
      const value = state.value

      function isWrapped(syntax: string) {
        const len = syntax.length
        if (start < len || end > value.length - len) return false
        return (
          value.slice(start - len, start) === syntax &&
          value.slice(end, end + len) === syntax
        )
      }

      function hasLinePrefix(prefix: string) {
        const lineStart = value.lastIndexOf('\n', start - 1) + 1
        return value.slice(lineStart).startsWith(prefix)
      }

      switch (type) {
        case 'bold': return isWrapped('**')
        case 'italic': return isWrapped('_')
        case 'strikethrough': return isWrapped('~~')
        case 'code': return isWrapped('`')
        case 'h1': return hasLinePrefix('# ')
        case 'h2': return hasLinePrefix('## ')
        case 'h3': return hasLinePrefix('### ')
        case 'unordered': return hasLinePrefix('- ')
        case 'ordered': return hasLinePrefix('1. ')
        case 'task': return hasLinePrefix('- [ ] ')
        default: return false
      }
    },

    toggleWrap(syntax: string) {
      const { start, end } = state.selection
      const len = syntax.length
      const isWrapped =
        start >= len &&
        end <= state.value.length - len &&
        state.value.slice(start - len, start) === syntax &&
        state.value.slice(end, end + len) === syntax

      if (isWrapped) {
        // Unwrap
        state = {
          ...state,
          value:
            state.value.slice(0, start - len) +
            state.value.slice(start, end) +
            state.value.slice(end + len),
          selection: { start: start - len, end: end - len }
        }
      } else {
        // Wrap
        state = {
          ...state,
          value:
            state.value.slice(0, start) +
            syntax +
            state.value.slice(start, end) +
            syntax +
            state.value.slice(end),
          selection: { start: start + len, end: end + len } // Keep selection inside
        }
      }
    },

    toggleLinePrefix(prefix: string) {
      const { start, end } = state.selection
      const lineStart = state.value.lastIndexOf('\n', start - 1) + 1
      const lineEnd = state.value.indexOf('\n', end)
      const actualLineEnd = lineEnd === -1 ? state.value.length : lineEnd
      const currentLine = state.value.slice(lineStart, actualLineEnd)

      if (currentLine.startsWith(prefix)) {
        // Remove prefix
        const newLine = currentLine.slice(prefix.length)
        state = {
          ...state,
          value: state.value.slice(0, lineStart) + newLine + state.value.slice(actualLineEnd),
          selection: {
            start: Math.max(lineStart, start - prefix.length),
            end: Math.max(lineStart, end - prefix.length)
          }
        }
      } else {
        // Remove other prefixes if present (e.g. changing h1 to h2)
        const prefixes = ['# ', '## ', '### ', '- ', '1. ', '- [ ] ']
        let cleanLine = currentLine
        let removedLen = 0

        for (const p of prefixes) {
          if (currentLine.startsWith(p)) {
            cleanLine = currentLine.slice(p.length)
            removedLen = p.length
            break
          }
        }

        // Add new prefix
        const newLine = prefix + cleanLine
        state = {
          ...state,
          value: state.value.slice(0, lineStart) + newLine + state.value.slice(actualLineEnd),
          selection: {
            start: start + prefix.length - removedLen,
            end: end + prefix.length - removedLen
          }
        }
      }
    },

    insertText(text: string) {
      const { start, end } = state.selection
      state = {
        ...state,
        value: state.value.slice(0, start) + text + state.value.slice(end),
        selection: { start: start + text.length, end: start + text.length }
      }
    },

    applyBlock(type: 'code', lang: string = '') {
      const { start, end } = state.selection
      const selectedText = state.value.slice(start, end)
      const block = `\`\`\`${lang}\n${selectedText}\n\`\`\``

      state = {
        ...state,
        value: state.value.slice(0, start) + block + state.value.slice(end),
        selection: { start: start + block.length, end: start + block.length }
      }
    },
  }
}
