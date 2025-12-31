// Use `markdown-it` + `dompurify` for full-featured Markdown rendering with sanitization.
// This keeps preview output consistent with common Markdown behavior.
// @ts-expect-error
import MarkdownIt from 'markdown-it'
// @ts-expect-error
import DOMPurify from 'dompurify'

// enable `breaks` so single newlines become <br>, making preview match textarea
const md = new MarkdownIt({ html: true, linkify: true, typographer: true, breaks: true })

export function simpleMarkdownToHtml(input = ''): string {
  const html = md.render(input)
  return DOMPurify.sanitize(html)
}

export default simpleMarkdownToHtml
