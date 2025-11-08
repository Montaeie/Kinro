import { getPayload } from 'payload'
import config from '../payload.config'

const seedPages = async () => {
  const payload = await getPayload({ config })

  console.log('🌱 Seeding pages...')

  try {
    // 1. Home Page - Full landing page with all blocks
    const homePage = await payload.create({
      collection: 'pages',
      data: {
        title: 'Home Page',
        slug: 'home',
        layout: [
          {
            blockType: 'hero',
            primaryHeading: 'Understand how you lose clients on ChatGPT',
          },
          {
            blockType: 'visionFunnel',
            heading: 'Service subscription journey is shifting',
          },
          {
            blockType: 'problemFailures',
            title: 'The Problem',
          },
          {
            blockType: 'useCases',
            heading: 'Real Scenarios We Solve',
          },
          {
            blockType: 'benefits',
            heading: 'Revenue Growth, Not Vanity Metrics',
          },
          {
            blockType: 'howItWorks',
          },
          {
            blockType: 'faqs',
            heading: 'Frequently Asked Questions',
          },
          {
            blockType: 'team',
            heading: 'Led by Google DeepMind AI Research',
          },
          {
            blockType: 'cta',
            heading: 'Ready to Stop Losing\nClients to ChatGPT?',
            buttonText: 'Book Your Demo',
          },
        ],
        meta: {
          title: 'Satsu - AI Distribution Intelligence for Financial Services',
          description: 'Understand how you lose clients on ChatGPT. Optimize your presence where 57% of consumers search before buying.',
        },
      },
    })
    console.log('✅ Created home page')

    // 2. About Page - Team and company info
    const aboutPage = await payload.create({
      collection: 'pages',
      data: {
        title: 'About Us',
        slug: 'about',
        layout: [
          {
            blockType: 'hero',
            badge: 'About Us',
            primaryHeading: 'AI Distribution Intelligence for Financial Services',
            subheading: 'Founded by AI researchers from Google DeepMind and successful fintech founders, Satsu helps leading financial services companies understand their ChatGPT footprint.',
          },
          {
            blockType: 'team',
            heading: 'Led by Google DeepMind AI Research',
          },
          {
            blockType: 'testimonials',
            heading: 'Trusted by Fast Growing Startups',
          },
          {
            blockType: 'benefits',
            badge: 'Journey and Values',
            heading: 'Performance-Driven AI Distribution',
            subheading: 'We help financial services companies understand where prospects drop off on ChatGPT and turn that insight into concrete revenue growth strategies.',
          },
          {
            blockType: 'cta',
            heading: 'Ready to Stop Losing\nClients to ChatGPT?',
            buttonText: 'Book Your Demo',
          },
        ],
        meta: {
          title: 'About Us - Satsu | AI Distribution Intelligence',
          description: 'Building the future of AI distribution intelligence for financial services.',
        },
      },
    })
    console.log('✅ Created about page')

    // 3. ChatGPT Analytics Page
    const analyticsPage = await payload.create({
      collection: 'pages',
      data: {
        title: 'ChatGPT Analytics',
        slug: 'chatgpt-analytics',
        layout: [
          {
            blockType: 'hero',
            badge: 'ChatGPT Analytics',
            primaryHeading: 'Track Your ChatGPT Performance',
            subheading: 'Understand how prospects discover and evaluate your financial services on ChatGPT.',
          },
          {
            blockType: 'benefits',
            heading: 'Revenue Growth, Not Vanity Metrics',
          },
          {
            blockType: 'useCases',
            heading: 'Real Scenarios We Solve',
          },
          {
            blockType: 'cta',
            heading: 'Ready to Stop Losing\nClients to ChatGPT?',
            buttonText: 'Book Your Demo',
          },
        ],
        meta: {
          title: 'ChatGPT Analytics - Track AI-Driven Customer Discovery',
          description: 'Monitor and optimize how your financial services appear in ChatGPT conversations.',
        },
      },
    })
    console.log('✅ Created chatgpt-analytics page')

    // 4. Competitive Intelligence Page
    const competitivePage = await payload.create({
      collection: 'pages',
      data: {
        title: 'Competitive Intelligence',
        slug: 'competitive-intelligence',
        layout: [
          {
            blockType: 'hero',
            badge: 'Competitive Intelligence',
            primaryHeading: 'Understand Your Competitive Position',
            subheading: 'See how you compare to competitors in ChatGPT recommendations.',
          },
          {
            blockType: 'problemFailures',
            title: 'Competitive Challenges',
          },
          {
            blockType: 'useCases',
            heading: 'Real Scenarios We Solve',
          },
          {
            blockType: 'cta',
            heading: 'Ready to Stop Losing\nClients to ChatGPT?',
            buttonText: 'Book Your Demo',
          },
        ],
        meta: {
          title: 'Competitive Intelligence - Beat Your Competitors on ChatGPT',
          description: 'Analyze and improve your competitive positioning in AI-driven customer research.',
        },
      },
    })
    console.log('✅ Created competitive-intelligence page')

    // 5. Revenue Attribution Page
    const revenuePage = await payload.create({
      collection: 'pages',
      data: {
        title: 'Revenue Attribution',
        slug: 'revenue-attribution',
        layout: [
          {
            blockType: 'hero',
            badge: 'Revenue Attribution',
            primaryHeading: 'Track ChatGPT to Revenue',
            subheading: 'Measure the revenue impact of your ChatGPT presence.',
          },
          {
            blockType: 'benefits',
            heading: 'Revenue Growth, Not Vanity Metrics',
          },
          {
            blockType: 'cta',
            heading: 'Ready to Stop Losing\nClients to ChatGPT?',
            buttonText: 'Book Your Demo',
          },
        ],
        meta: {
          title: 'Revenue Attribution - Measure ChatGPT ROI',
          description: 'Connect ChatGPT traffic to actual revenue and customer acquisition.',
        },
      },
    })
    console.log('✅ Created revenue-attribution page')

    // 6. Content Strategy Page
    const contentPage = await payload.create({
      collection: 'pages',
      data: {
        title: 'Content Strategy',
        slug: 'content-strategy',
        layout: [
          {
            blockType: 'hero',
            badge: 'Content Strategy',
            primaryHeading: 'Optimize Content for AI Discovery',
            subheading: 'Create content that performs in ChatGPT and other AI platforms.',
          },
          {
            blockType: 'howItWorks',
          },
          {
            blockType: 'useCases',
            heading: 'Real Scenarios We Solve',
          },
          {
            blockType: 'cta',
            heading: 'Ready to Stop Losing\nClients to ChatGPT?',
            buttonText: 'Book Your Demo',
          },
        ],
        meta: {
          title: 'Content Strategy - AI-Optimized Content for Financial Services',
          description: 'Develop content strategies that drive visibility and conversions on ChatGPT.',
        },
      },
    })
    console.log('✅ Created content-strategy page')

    // 7. Agent Tracking Page
    const agentPage = await payload.create({
      collection: 'pages',
      data: {
        title: 'Agent Tracking',
        slug: 'agent-tracking',
        layout: [
          {
            blockType: 'hero',
            badge: 'Agent Tracking',
            primaryHeading: 'Track AI Agent Behavior',
            subheading: 'Monitor how AI agents visit and interact with your website.',
          },
          {
            blockType: 'howItWorks',
          },
          {
            blockType: 'faqs',
            heading: 'Frequently Asked Questions',
          },
          {
            blockType: 'cta',
            heading: 'Ready to Stop Losing\nClients to ChatGPT?',
            buttonText: 'Book Your Demo',
          },
        ],
        meta: {
          title: 'Agent Tracking - Monitor AI Agent Traffic',
          description: 'Track and analyze how ChatGPT and other AI agents access your content.',
        },
      },
    })
    console.log('✅ Created agent-tracking page')

    // 8. Careers Page
    const careersPage = await payload.create({
      collection: 'pages',
      data: {
        title: 'Careers',
        slug: 'careers',
        layout: [
          {
            blockType: 'hero',
            badge: 'Careers',
            primaryHeading: 'Join Our Team',
            subheading: 'Help Financial Services Win in the AI Era',
          },
          {
            blockType: 'team',
            heading: 'Led by Google DeepMind AI Research',
          },
          {
            blockType: 'benefits',
            badge: 'Why Join Us',
            heading: 'Work on Cutting-Edge AI Technology',
            subheading: 'Join a team of AI researchers and fintech experts building the future of financial services distribution.',
          },
          {
            blockType: 'cta',
            heading: 'Ready to Stop Losing\nClients to ChatGPT?',
            buttonText: 'Book Your Demo',
          },
        ],
        meta: {
          title: 'Careers - Join Satsu',
          description: 'Join our team building AI distribution intelligence for financial services.',
        },
      },
    })
    console.log('✅ Created careers page')

    // 9. Contact Page
    const contactPage = await payload.create({
      collection: 'pages',
      data: {
        title: 'Contact Us',
        slug: 'contact',
        layout: [
          {
            blockType: 'contact',
            heading: 'Get in touch',
            description: 'Book a demo to learn how Satsu can help you understand why prospects drop off on ChatGPT and optimize your presence for measurable revenue growth.',
            namePlaceholder: 'Your name',
            emailPlaceholder: 'youremail@yourdomain.com',
            messagePlaceholder: 'Your message',
            buttonText: 'Send Message',
          },
        ],
        meta: {
          title: 'Contact Us - Satsu',
          description: 'Get in touch with our team to learn how we can help optimize your ChatGPT presence.',
        },
      },
    })
    console.log('✅ Created contact page')

    console.log('\n🎉 Successfully seeded all pages!')
    console.log('\n📊 Summary:')
    console.log('- 9 pages created')
    console.log('- All pages have their block structure mapped')
    console.log('- You can now edit them in the admin panel')
    console.log('\n👉 Go to: http://localhost:3002/admin/collections/pages')

  } catch (error) {
    console.error('❌ Error seeding pages:', error)
    throw error
  }

  process.exit(0)
}

seedPages()
