import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import TurndownService from 'turndown'

export async function markdownToHtml(md: string) {
  const result = await remark().use(gfm).use(html).process(md)
  return result.toString()
}

const turndown = new TurndownService()

export function htmlToMarkdown(html: string) {
  return turndown.turndown(html)
}
