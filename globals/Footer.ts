import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      label: 'Footer Description',
      defaultValue: 'Turn invisible ChatGPT traffic into measurable revenue for financial services companies.',
    },
    {
      name: 'ctaButton',
      type: 'group',
      label: 'CTA Button',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Book a Demo',
        },
        {
          name: 'href',
          type: 'text',
          label: 'Button Link',
          defaultValue: '/contact',
        },
      ],
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Footer Columns',
      minRows: 1,
      maxRows: 4,
      defaultValue: [
        {
          title: 'Company',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Careers', href: '/careers' },
            { label: 'Contact', href: '/contact' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms-of-service' },
            { label: 'Cookie Policy', href: '/cookie-policy' },
          ],
        },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Column Title',
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
          minRows: 1,
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Link Label',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              label: 'Link URL',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright Text',
      defaultValue: `© ${new Date().getFullYear()} Satsu. All rights reserved.`,
    },
  ],
}
