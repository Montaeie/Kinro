import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
      defaultValue: 'For Financial Services Leaders',
      admin: {
        description: 'Small badge text shown above the main heading',
      },
    },
    {
      name: 'primaryHeading',
      type: 'text',
      label: 'Main Heading',
      required: true,
      defaultValue: 'Understand how you lose clients on ChatGPT',
      admin: {
        description: 'Main headline of the hero section',
      },
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Subheading',
      defaultValue: 'Optimize your presence where 57% of consumers search before buying.',
      admin: {
        description: 'Description text below the main heading',
      },
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Button Text',
      defaultValue: 'Book a Demo',
      admin: {
        description: 'Text for the call-to-action button',
      },
    },
    {
      name: 'statTitle',
      type: 'text',
      label: 'Statistic Title',
      defaultValue: '20%+ of traffic now comes from ChatGPT for leading financial services companies',
      admin: {
        description: 'Bold statistic text in the sidebar',
      },
    },
    {
      name: 'statSubtext',
      type: 'text',
      label: 'Statistic Subtext',
      defaultValue: 'Growing at 10% month-over-month',
      admin: {
        description: 'Secondary text below the statistic',
      },
    },
  ],
}
