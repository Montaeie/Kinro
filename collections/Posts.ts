import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Blog Post',
    plural: 'Blog Posts',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedDate', 'status'],
    livePreview: {
      url: ({ data }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3002'
        return `${baseUrl}/blog/${data.slug}?timestamp=${Date.now()}`
      },
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Post Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'URL-friendly version of the title (e.g., "chatgpt-financial-services")',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
      admin: {
        description: 'Brief summary of the blog post (used for meta description and preview)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Content',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
      admin: {
        description: 'Main image displayed on blog listing and post header',
      },
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Featured Image URL (fallback)',
      admin: {
        description: 'External image URL if not using uploaded media',
      },
    },
    {
      name: 'author',
      type: 'group',
      label: 'Author Information',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Author Name',
          defaultValue: 'Pierre-Alexandre Kamienny',
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Author Avatar',
        },
        {
          name: 'avatarUrl',
          type: 'text',
          label: 'Author Avatar URL (fallback)',
          defaultValue: '/satsu-co-founder.png',
        },
      ],
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      label: 'Published Date',
      defaultValue: () => new Date().toISOString(),
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
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
          admin: {
            description: 'SEO title (defaults to post title if empty)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
          admin: {
            description: 'SEO description (defaults to post description if empty)',
          },
        },
      ],
    },
  ],
}
