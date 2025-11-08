import type { Block } from 'payload'

export const ImageText: Block = {
  slug: 'imageText',
  interfaceName: 'ImageTextBlock',
  labels: {
    singular: 'Image + Text',
    plural: 'Image + Text Sections',
  },
  fields: [
    {
      name: 'layout',
      type: 'select',
      label: 'Layout',
      defaultValue: 'imageLeft',
      options: [
        { label: 'Image on Left', value: 'imageLeft' },
        { label: 'Image on Right', value: 'imageRight' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Image URL (fallback if no upload)',
    },
    {
      name: 'badge',
      type: 'text',
      label: 'Badge/Tag (optional)',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA Button Text (optional)',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'CTA Button Link (optional)',
    },
  ],
}
