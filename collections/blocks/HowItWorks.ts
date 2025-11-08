import type { Block } from 'payload'

export const HowItWorks: Block = {
  slug: 'howItWorks',
  interfaceName: 'HowItWorksBlock',
  labels: {
    singular: 'How It Works Section',
    plural: 'How It Works Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      defaultValue: 'How It Works',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Steps',
      minRows: 1,
      fields: [
        {
          name: 'stepNumber',
          type: 'number',
          label: 'Step Number',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Step Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Step Description',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon Name',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Step Image (optional)',
        },
      ],
    },
  ],
}
