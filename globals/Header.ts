import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header / Navigation',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'group',
      label: 'Logo',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Logo Text',
          defaultValue: 'Satsu',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo Image (optional)',
        },
      ],
    },
    {
      name: 'navLinks',
      type: 'array',
      label: 'Navigation Links',
      minRows: 1,
      maxRows: 10,
      defaultValue: [
        {
          label: 'About',
          href: '/about',
        },
        {
          label: 'Careers',
          href: '/careers',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
      ],
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
          admin: {
            description: 'Internal link (e.g. /about) or external (e.g. https://example.com)',
          },
        },
      ],
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
  ],
}
