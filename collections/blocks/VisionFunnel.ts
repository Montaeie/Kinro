import type { Block } from 'payload'

export const VisionFunnel: Block = {
  slug: 'visionFunnel',
  interfaceName: 'VisionFunnelBlock',
  labels: {
    singular: 'Vision Funnel Section',
    plural: 'Vision Funnel Sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
      defaultValue: 'Vision du Futur',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      required: true,
      defaultValue: 'Service subscription journey is shifting',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Section Subheading',
      defaultValue: '→ From recommendation to fully integrated funnel',
    },
    {
      name: 'bottomText',
      type: 'textarea',
      label: 'Bottom Explanation Text',
      defaultValue: 'Before: No visibility or control. Now: Partial integration. Then: Full funnel ownership with Satsu.',
    },
  ],
}
