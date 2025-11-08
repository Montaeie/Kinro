import { getPayload } from 'payload'
import config from '../payload.config'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

type FrontMatter = {
  title: string
  description: string
  date: string
  image: string
  authorName?: string
  authorSrc?: string
}

const blogPosts = [
  'chatgpt-financial-services',
  'llm-ranking-factors',
  'insurance-ai-distribution',
  'deepmind-insights-llm-distribution',
  'future-of-seo',
  'lending-chatgpt-optimization',
  'b2b-saas-ai-distribution',
  'measuring-chatgpt-roi',
]

// Convert markdown to Lexical format
const markdownToLexical = (markdown: string) => {
  const lines = markdown.split('\n')
  const lexicalNodes: any[] = []
  let currentParagraphLines: string[] = []

  const flushParagraph = () => {
    if (currentParagraphLines.length > 0) {
      const text = currentParagraphLines.join(' ').trim()
      if (text) {
        lexicalNodes.push({
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: text,
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1,
        })
      }
      currentParagraphLines = []
    }
  }

  lines.forEach((line) => {
    if (line.startsWith('---')) return

    if (line.startsWith('# ')) {
      flushParagraph()
      lexicalNodes.push({
        children: [
          {
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: line.substring(2).trim(),
            type: 'text',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'heading',
        version: 1,
        tag: 'h1',
      })
    } else if (line.startsWith('## ')) {
      flushParagraph()
      lexicalNodes.push({
        children: [
          {
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: line.substring(3).trim(),
            type: 'text',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'heading',
        version: 1,
        tag: 'h2',
      })
    } else if (line.startsWith('### ')) {
      flushParagraph()
      lexicalNodes.push({
        children: [
          {
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: line.substring(4).trim(),
            type: 'text',
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'heading',
        version: 1,
        tag: 'h3',
      })
    } else if (line.trim() === '') {
      flushParagraph()
    } else if (line.trim().match(/^[-*]\s/)) {
      flushParagraph()
      const text = line.replace(/^[-*]\s*/, '').trim()
      lexicalNodes.push({
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: text,
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'listitem',
            version: 1,
            value: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'list',
        version: 1,
        listType: 'bullet',
        start: 1,
        tag: 'ul',
      })
    } else if (line.trim().match(/^\d+\.\s/)) {
      flushParagraph()
      const text = line.replace(/^\d+\.\s*/, '').trim()
      lexicalNodes.push({
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: text,
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'listitem',
            version: 1,
            value: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'list',
        version: 1,
        listType: 'number',
        start: 1,
        tag: 'ol',
      })
    } else {
      currentParagraphLines.push(line)
    }
  })

  flushParagraph()

  return {
    root: {
      children: lexicalNodes,
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}

const seedBlogPosts = async () => {
  const payload = await getPayload({ config })

  console.log('🌱 Seeding blog posts...\n')

  try {
    for (const slug of blogPosts) {
      console.log(`📝 Processing: ${slug}`)

      // Read MDX file
      const filePath = path.join(process.cwd(), 'data', `${slug}.mdx`)
      const fileContent = await fs.readFile(filePath, 'utf-8')

      // Parse frontmatter and content
      const { data: frontmatter, content } = matter(fileContent) as {
        data: FrontMatter
        content: string
      }

      // Convert markdown content to Lexical format
      const lexicalContent = markdownToLexical(content)

      // Create post in Payload
      const post = await payload.create({
        collection: 'posts',
        data: {
          title: frontmatter.title,
          slug: slug,
          description: frontmatter.description,
          content: lexicalContent,
          imageUrl: frontmatter.image,
          author: {
            name: frontmatter.authorName || 'Pierre-Alexandre Kamienny',
            avatarUrl: frontmatter.authorSrc || '/satsu-co-founder.png',
          },
          publishedDate: frontmatter.date,
          status: 'published',
          meta: {
            title: frontmatter.title,
            description: frontmatter.description,
          },
        },
      })

      console.log(`✅ Created: ${post.title}`)
    }

    console.log('\n🎉 Successfully seeded all blog posts!')
  } catch (error) {
    console.error('❌ Error seeding blog posts:', error)
    throw error
  }

  process.exit(0)
}

seedBlogPosts()
