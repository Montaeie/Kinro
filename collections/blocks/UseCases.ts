import type { Block } from 'payload'

export const UseCases: Block = {
  slug: 'useCases',
  interfaceName: 'UseCasesBlock',
  labels: {
    singular: 'Use Cases Section',
    plural: 'Use Cases Sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
      defaultValue: 'Use Cases',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      required: true,
      defaultValue: 'Real Scenarios We Solve',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Section Subheading',
      defaultValue: 'From insurance to lending, we help financial services companies understand why prospects choose competitors and turn that insight into revenue',
    },
    {
      name: 'cases',
      type: 'array',
      label: 'Use Cases',
      minRows: 1,
      maxRows: 10,
      defaultValue: [
        {
          title: 'D&O Insurance',
          description: "A salon owner asks: 'I need D&O insurance'. ChatGPT lists 5 competitors first. We identify why and fix it.",
          icon: 'shield',
        },
        {
          title: 'Mortgage Lending',
          description: "A homebuyer asks: 'Best mortgage for $1M home, $200k income'. ChatGPT recommends competitors. We analyze why.",
          icon: 'graph',
        },
        {
          title: 'Pet Insurance',
          description: 'Pet owner asks about pre-existing conditions. Your offer is mentioned but misrepresented. We fix the gap.',
          icon: 'heart',
        },
        {
          title: 'Home Insurance',
          description: 'Homeowner compares providers. ChatGPT highlights competitor features better. We optimize representation.',
          icon: 'database',
        },
        {
          title: 'Business Credit',
          description: "Startup founder seeks rewards card. Your product fits but ChatGPT doesn't connect dots. We fix matching.",
          icon: 'wallet',
        },
        {
          title: 'Auto Insurance',
          description: 'Driver asks about high-value vehicle coverage. Your niche is overlooked. We ensure expertise shows.',
          icon: 'truck',
        },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Use Case Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Use Case Description',
        },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Shield', value: 'shield' },
            { label: 'Graph', value: 'graph' },
            { label: 'Heart', value: 'heart' },
            { label: 'Database', value: 'database' },
            { label: 'Wallet', value: 'wallet' },
            { label: 'Truck', value: 'truck' },
            { label: 'Phone', value: 'phone' },
            { label: 'DevOps', value: 'devops' },
          ],
          defaultValue: 'shield',
        },
      ],
    },
  ],
}
