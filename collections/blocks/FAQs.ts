import type { Block } from 'payload'

export const FAQs: Block = {
  slug: 'faqs',
  interfaceName: 'FAQsBlock',
  labels: {
    singular: 'FAQs Section',
    plural: 'FAQs Sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
      defaultValue: 'FAQs',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      required: true,
      defaultValue: 'Frequently Asked Questions',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Section Subheading',
      defaultValue: "Find all your doubts and questions in one place. Still couldn't find what you're looking for?",
    },
    {
      name: 'buttonText1',
      type: 'text',
      label: 'First Button Text',
      defaultValue: 'Read Docs',
    },
    {
      name: 'buttonText2',
      type: 'text',
      label: 'Second Button Text',
      defaultValue: 'Contact Us',
    },
  ],
}
