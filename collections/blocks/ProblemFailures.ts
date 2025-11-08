import type { Block } from 'payload'

export const ProblemFailures: Block = {
  slug: 'problemFailures',
  interfaceName: 'ProblemFailuresBlock',
  labels: {
    singular: 'Problem/Failures Section',
    plural: 'Problem/Failures Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
    },
    {
      name: 'problems',
      type: 'array',
      label: 'Problems/Pain Points',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Problem Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Problem Description',
        },
        {
          name: 'icon',
          type: 'text',
          label: 'Icon Name',
        },
        {
          name: 'stat',
          type: 'text',
          label: 'Statistic (optional)',
          admin: {
            description: 'E.g., "57%", "$2.5M", etc.',
          },
        },
      ],
    },
  ],
}
