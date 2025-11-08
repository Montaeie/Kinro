import type { Block } from 'payload'

export const RichContent: Block = {
  slug: 'richContent',
  interfaceName: 'RichContentBlock',
  labels: {
    singular: 'Rich Content Section',
    plural: 'Rich Content Sections',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
    },
    {
      name: 'containerClass',
      type: 'text',
      label: 'Container CSS Class (optional)',
      admin: {
        description: 'Custom CSS classes for styling this section',
      },
    },
  ],
}
