---
name: new-blog-post
description: Use when adding a new blog post to the Stella Sobral site. Triggers on "new post", "add post", "escrever artigo", "novo artigo", or when given blog content to publish.
---

# New Blog Post — Stella Sobral

## Overview

Adds a new post to `lib/blog.ts` following the existing `Post` type. All blog infrastructure (listing, sitemap, preview, slug page) is already built and picks up new posts automatically.

## Required inputs before writing

Collect these before touching any file — ask if missing:

| Field | Description | SEO rule |
|---|---|---|
| `keyword` | Primary long-tail keyword in PT-BR | Must appear in title and intro |
| `title` | H1 — keyword + pain point | 50-70 chars |
| `excerpt` | Meta description copy | 140-160 chars, ends with CTA |
| `sections[]` | 5-8 H2 blocks with body text | Each ≥ 150 words |
| `intro` | Opening 2 paragraphs before H2s | Problem-first, keyword in first sentence |
| `readTime` | Estimate: total words ÷ 200 | Round up |

## Post type — `lib/blog.ts`

```ts
{
  slug: string,           // kebab-case, URL-safe, PT-BR words
  title: string,
  excerpt: string,
  date: string,           // "YYYY-MM-DD" — today's date
  keyword: string,
  readTime: number,       // minutes
  intro: string,          // \n\n separates paragraphs
  sections: [
    { heading: string, body: string }  // \n\n separates paragraphs, **bold** for emphasis
  ]
}
```

## Writing rules

**Content**
- Open with the patient's pain, not the service ("Você acorda com dor e...")
- Each H2 answers one specific question a patient would Google
- Include at least one local modifier per post (bairro, "Zona Sul", "São Paulo")
- One H2 dedicated to the neighborhood/service area — keyword-rich list
- End with a practical "how to book" H2 — 4 numbered steps

**SEO**
- Keyword in: title, intro first sentence, one H2 heading, last paragraph
- No keyword stuffing — max 3 natural mentions per 1,000 words
- Bold (`**text**`) renders as `<strong>` — use for scannable key terms

**Style**
- Portuguese BR, direct and warm — não formal demais
- Short paragraphs (3-4 lines max)
- Avoid medical jargon without explanation

## Steps

1. Confirm all required inputs
2. Write the full post content (or use content provided by user)
3. Add the new post object to the **top** of the `posts` array in `lib/blog.ts`  
   (array is sorted by date desc via `getAllPosts()`)
4. Run `npm run build` — verify the new slug appears in the route output
5. Report: slug, estimated readTime, keyword used

## Common mistakes

| Mistake | Fix |
|---|---|
| Slug with accents (`dor-lombar-são-paulo`) | ASCII only: `dor-lombar-sao-paulo` |
| Excerpt over 160 chars | Cut ruthlessly — Google truncates |
| Single long `body` with no paragraph breaks | Split with `\n\n` |
| Missing `intro` field | Required — first paragraphs before H2s go here, not in sections |
| Date in wrong format | Must be `"YYYY-MM-DD"` string |
