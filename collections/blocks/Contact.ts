import type { Block } from 'payload'

export const Contact: Block = {
  slug: 'contact',
  interfaceName: 'ContactBlock',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Forms',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Get in touch',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Book a demo to learn how Satsu can help you understand why prospects drop off on ChatGPT and optimize your presence for measurable revenue growth.',
    },
    {
      name: 'namePlaceholder',
      type: 'text',
      label: 'Name Field Placeholder',
      defaultValue: 'Your name',
    },
    {
      name: 'emailPlaceholder',
      type: 'text',
      label: 'Email Field Placeholder',
      defaultValue: 'youremail@yourdomain.com',
    },
    {
      name: 'messagePlaceholder',
      type: 'text',
      label: 'Message Field Placeholder',
      defaultValue: 'Your message',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      defaultValue: 'Send Message',
    },
  ],
}
