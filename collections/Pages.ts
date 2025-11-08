import type { CollectionConfig } from 'payload'
import { Hero } from './blocks/Hero'
import { Benefits } from './blocks/Benefits'
import { FAQs } from './blocks/FAQs'
import { CTA } from './blocks/CTA'
import { UseCases } from './blocks/UseCases'
import { Team } from './blocks/Team'
import { VisionFunnel } from './blocks/VisionFunnel'
import { ProblemFailures } from './blocks/ProblemFailures'
import { HowItWorks } from './blocks/HowItWorks'
import { Contact } from './blocks/Contact'
import { Testimonials } from './blocks/Testimonials'
import { RichContent } from './blocks/RichContent'
import { ContentGrid } from './blocks/ContentGrid'
import { ImageText } from './blocks/ImageText'
import { Stats } from './blocks/Stats'
import { Spacer } from './blocks/Spacer'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, locale }) => {
        // URL de preview - pointe vers votre site Next.js
        const path = data.slug === 'home' ? '' : data.slug
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3002'
        // Add timestamp to bust cache
        return `${baseUrl}/${path}?timestamp=${Date.now()}`
      },
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 375,
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Page Title',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
      unique: true,
      admin: {
        description: 'URL path for this page (e.g., "home", "about", "contact")',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Page Sections',
      minRows: 1,
      blocks: [
        Hero,
        VisionFunnel,
        ProblemFailures,
        UseCases,
        Benefits,
        HowItWorks,
        FAQs,
        Team,
        CTA,
        Contact,
        Testimonials,
        RichContent,
        ContentGrid,
        ImageText,
        Stats,
        Spacer,
      ],
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO Metadata',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Social Share Image',
        },
      ],
    },
  ],
}
