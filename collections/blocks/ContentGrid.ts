import type { Block } from 'payload'

export const ContentGrid: Block = {
  slug: 'contentGrid',
  interfaceName: 'ContentGridBlock',
  labels: {
    singular: 'Content Grid',
    plural: 'Content Grids',
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
      name: 'columns',
      type: 'select',
      label: 'Number of Columns',
      defaultValue: '3',
      options: [
        { label: '2 Columns', value: '2' },
        { label: '3 Columns', value: '3' },
        { label: '4 Columns', value: '4' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      label: 'Grid Items',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon/Emoji (optional)',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link URL (optional)',
        },
        {
          name: 'linkText',
          type: 'text',
          label: 'Link Text (optional)',
          defaultValue: 'Learn more',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'transparent',
      options: [
        { label: 'Transparent', value: 'transparent' },
        { label: 'Gray', value: 'gray' },
        { label: 'White', value: 'white' },
      ],
    },
  ],
}
