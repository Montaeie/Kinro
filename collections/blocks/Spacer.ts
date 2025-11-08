import type { Block } from 'payload'

export const Spacer: Block = {
  slug: 'spacer',
  interfaceName: 'SpacerBlock',
  labels: {
    singular: 'Spacer',
    plural: 'Spacers',
  },
  fields: [
    {
      name: 'height',
      type: 'select',
      label: 'Spacing Height',
      defaultValue: 'medium',
      options: [
        { label: 'Small (2rem)', value: 'small' },
        { label: 'Medium (4rem)', value: 'medium' },
        { label: 'Large (6rem)', value: 'large' },
        { label: 'Extra Large (10rem)', value: 'xl' },
      ],
      admin: {
        description: 'Add vertical spacing between sections',
      },
    },
  ],
}
