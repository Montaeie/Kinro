import type { Block } from 'payload'

export const Team: Block = {
  slug: 'team',
  interfaceName: 'TeamBlock',
  labels: {
    singular: 'Team Section',
    plural: 'Team Sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
      label: 'Badge Text',
      defaultValue: 'Leadership',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      required: true,
      defaultValue: 'Led by Google DeepMind AI Research',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Section Subheading',
      defaultValue: 'Deep expertise in large language models and their application to financial services distribution.',
    },
    {
      name: 'founderName',
      type: 'text',
      label: 'Founder Name',
      defaultValue: 'Pierre-Alexandre Kamienny',
    },
    {
      name: 'founderTitle',
      type: 'text',
      label: 'Founder Title',
      defaultValue: 'Founder',
    },
    {
      name: 'founderImage',
      type: 'text',
      label: 'Founder Image Path',
      defaultValue: '/satsu-co-founder.png',
      admin: {
        description: 'Path to the founder image (e.g., /satsu-co-founder.png)',
      },
    },
    {
      name: 'scholarLink',
      type: 'text',
      label: 'Google Scholar Profile Link',
      defaultValue: 'https://scholar.google.com',
    },
    {
      name: 'founderBio',
      type: 'textarea',
      label: 'Founder Biography',
      defaultValue: 'Research scientist at Google DeepMind, where he worked on improving Gemini for real-world applications. Previously at FAIR (Meta AI Research) with an Oxford PhD in Large Language Models.',
    },
    {
      name: 'citations',
      type: 'array',
      label: 'Key Research Citations',
      defaultValue: [
        {
          count: '469',
          description: 'Multi-agent reinforcement learning (NeurIPS)',
        },
        {
          count: '283',
          description: 'Symbolic regression with transformers (NeurIPS)',
        },
        {
          count: '101',
          description: 'Deep symbolic regression (ICML)',
        },
      ],
      fields: [
        {
          name: 'count',
          type: 'text',
          label: 'Citation Count',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Research Description',
          required: true,
        },
      ],
    },
    {
      name: 'whyThisMatters',
      type: 'textarea',
      label: 'Why This Matters Section',
      defaultValue: "Pierre-Alexandre's deep understanding of how LLMs retrieve and rank information is exactly what financial services need to win in ChatGPT and other AI platforms.",
    },
  ],
}
