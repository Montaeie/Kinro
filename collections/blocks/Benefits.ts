import type { Block } from 'payload'

export const Benefits: Block = {
  slug: 'benefits',
  interfaceName: 'BenefitsBlock',
  labels: {
    singular: 'Benefits Section',
    plural: 'Benefits Sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
      defaultValue: 'Why Satsu',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      required: true,
      defaultValue: 'Revenue Growth, Not Vanity Metrics',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Section Subheading',
      defaultValue: 'Every insight ties directly to revenue impact. We optimize for $$$ in your bank account, not impressions on a dashboard. Built by AI researchers who deployed systems at Google and fintech founders who scaled companies to 8-figure exits.',
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefits List',
      minRows: 1,
      maxRows: 10,
      defaultValue: [
        {
          title: 'Revenue Impact First',
          description: 'Every recommendation directly increases deal closure rates and average contract value—no fluff, just ROI',
          icon: 'graph',
        },
        {
          title: 'High-Intent Buyers Only',
          description: 'Track conversations from prospects actively seeking solutions, not passive browsers—the ones who sign contracts',
          icon: 'sync',
        },
        {
          title: 'Enterprise Deal Focus',
          description: 'Optimize for the 20% of clients who drive 80% of your revenue—not average ticket size',
          icon: 'rocket',
        },
        {
          title: 'Financial Services DNA',
          description: 'Deep expertise in insurance, lending, wealth management—industries where one client = $50K-$500K+ lifetime value',
          icon: 'shield',
        },
        {
          title: 'Win Rate Optimization',
          description: 'Ensure prospects choose you over competitors when making buying decisions, not just discovering you exist',
          icon: 'brain',
        },
        {
          title: 'Implementation Roadmap',
          description: 'Get a step-by-step playbook to capture lost deals this quarter, not vague suggestions or endless analytics',
          icon: 'cog',
        },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Benefit Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Benefit Description',
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Graph', value: 'graph' },
            { label: 'Sync', value: 'sync' },
            { label: 'Rocket', value: 'rocket' },
            { label: 'Shield', value: 'shield' },
            { label: 'Brain', value: 'brain' },
            { label: 'Cog', value: 'cog' },
            { label: 'Bell', value: 'bell' },
          ],
          defaultValue: 'graph',
        },
      ],
    },
  ],
}
