import type { Block } from 'payload'

export const CTA: Block = {
  slug: 'cta',
  interfaceName: 'CTABlock',
  labels: {
    singular: 'Call to Action',
    plural: 'Call to Actions',
  },
  fields: [
    {
      name: 'heading',
      type: 'textarea',
      label: 'Heading',
      required: true,
      defaultValue: 'Ready to Stop Losing\nClients to ChatGPT?',
      admin: {
        description: 'Use line breaks to split the heading across multiple lines',
      },
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Subheading',
      defaultValue: 'Get your first insights within 2 weeks. No setup fees for October partners.',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      required: true,
      defaultValue: 'Book Your Demo',
    },
  ],
}
