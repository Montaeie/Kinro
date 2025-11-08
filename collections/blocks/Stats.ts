import type { Block } from 'payload'

export const Stats: Block = {
  slug: 'stats',
  interfaceName: 'StatsBlock',
  labels: {
    singular: 'Statistics',
    plural: 'Statistics Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading (optional)',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Subheading (optional)',
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistics',
      minRows: 2,
      maxRows: 6,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Value/Number',
          required: true,
          admin: {
            description: 'e.g., "20%+", "57%", "$10M"',
          },
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
          admin: {
            description: 'e.g., "Revenue Growth", "Clients Served"',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description (optional)',
        },
      ],
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Layout Style',
      defaultValue: 'horizontal',
      options: [
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Grid', value: 'grid' },
      ],
    },
  ],
}
