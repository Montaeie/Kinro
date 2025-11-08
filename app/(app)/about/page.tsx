import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { Heading } from "@/components/heading";
import { InformationBlock } from "@/components/information-block";
import { ProgressiveBlur } from "@/components/progressive-blur";
import { SectionHeading } from "@/components/seciton-heading";
import { SubHeading } from "@/components/subheading";
import { Testimonials } from "@/components/testimonials";
import { RenderBlocks } from "@/components/RenderBlocks";
import { careers } from "@/constants/careers";
import { founders } from "@/constants/founders";
import { LinkedInIcon } from "@/icons/general";
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'

import { getSEOTags } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "About Us - Satsu | AI Distribution Intelligence",
  description:
    "Building the future of AI distribution intelligence for financial services. Founded by AI researchers from Google DeepMind and successful fintech founders who scaled companies to exit.",
});

// Force dynamic rendering to always fetch fresh data from Payload
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function AboutPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const payload = await getPayload({ config: configPromise })
  const { isEnabled: isDraftMode } = await draftMode()

  // Get search params
  const params = await searchParams

  // Force fresh data if this is a preview request (has timestamp param)
  const isPreview = params.timestamp !== undefined

  // Fetch about page from Payload
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'about',
      },
    },
    limit: 1,
    draft: isDraftMode || isPreview,
  })

  const aboutPage = pages.docs[0]

  // If about page exists in Payload, render it
  if (aboutPage && aboutPage.layout) {
    return (
      <main>
        <DivideX />
        <RenderBlocks layout={aboutPage.layout} />
        <DivideX />
      </main>
    )
  }

  // Otherwise, render static version (fallback)
  return (
    <main>
      <DivideX />
      <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:px-8 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <Badge text="About Us" />
            <Heading className="mt-4 text-left">
              AI Distribution Intelligence for Financial Services
            </Heading>
            <SubHeading className="mt-6 mr-auto text-left">
              Founded by AI researchers from Google DeepMind and successful fintech
              founders, Satsu was born from a critical insight: traditional SEO
              is becoming obsolete. ChatGPT and other LLMs are fundamentally changing
              how prospects discover and choose financial services.
              <br /> <br />
              Today, Satsu helps leading insurance, lending, and B2B/B2C financial
              services companies understand their true ChatGPT footprint and optimize
              for conversions, not just visibility. We turn invisible traffic into
              measurable revenue growth.
            </SubHeading>
          </div>
          <div className="border-divide rounded-3xl border p-2">
            <Image
              src="/satsu-co-founder.png"
              alt="Satsu Co-Founder"
              width={1000}
              height={1000}
              className="h-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide border-x px-4 py-20 md:px-8 md:py-40">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center">
            <Badge text="Leadership" />
            <SectionHeading className="mt-4">
              Pierre-Alexandre Kamienny
            </SectionHeading>
            <SubHeading className="mx-auto mt-6 max-w-2xl">
              Leading AI researcher from Google DeepMind with deep expertise in large
              language models and their application to financial services.
            </SubHeading>
          </div>

          {/* Founder: Pierre-Alexandre Kamienny */}
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="border-divide rounded-2xl border p-2">
                <Image
                  src="/satsu-co-founder.png"
                  alt="Pierre-Alexandre Kamienny"
                  width={500}
                  height={500}
                  className="h-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-bg-dark dark:text-white">
                  Pierre-Alexandre Kamienny
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                  Founder
                </p>
                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  className="mt-3 inline-block text-sm text-brand hover:underline"
                >
                  Google Scholar Profile
                </a>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="space-y-8">
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
                    Research Background
                  </h4>
                  <p className="text-base leading-relaxed text-bg-dark dark:text-gray-300">
                    Pierre-Alexandre is a research scientist at Google DeepMind, where he has been
                    at the forefront of improving Gemini for real-world applications, particularly
                    in financial services. His work focuses on making large language models more
                    accurate, reliable, and useful for complex decision-making scenarios.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-bg-dark dark:text-gray-300">
                    Before DeepMind, he conducted groundbreaking research at FAIR (Facebook AI Research),
                    Meta's AI lab, where he contributed to fundamental advances in reinforcement
                    learning and symbolic AI. He holds an Oxford PhD in Large Language Models, with
                    a dissertation focused on bridging neural and symbolic approaches to reasoning.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
                    Key Publications & Citations
                  </h4>
                  <ul className="space-y-3 text-base text-bg-dark dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-brand mr-2 mt-1 text-lg">•</span>
                      <div>
                        <strong>End-to-end symbolic regression with transformers</strong>{" "}
                        (NeurIPS, 2022) - 283 citations
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-500">
                          Revolutionary approach to discovering mathematical equations from data using transformers
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-2 mt-1 text-lg">•</span>
                      <div>
                        <strong>FACMAC: Factored multi-agent centralised policy gradients</strong>{" "}
                        (NeurIPS, 2021) - 469 citations
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-500">
                          Breakthrough in multi-agent reinforcement learning with applications to complex systems
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-2 mt-1 text-lg">•</span>
                      <div>
                        <strong>Deep symbolic regression for recurrence prediction</strong>{" "}
                        (ICML, 2022) - 101 citations
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-500">
                          Novel methods for predicting patterns in sequential data
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand mr-2 mt-1 text-lg">•</span>
                      <div>
                        <strong>Deep Generative Symbolic Regression with MCTS</strong>{" "}
                        (ICML, 2023) - 47 citations
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-500">
                          Combining Monte Carlo tree search with deep learning for symbolic discovery
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
                    Why This Matters for Financial Services
                  </h4>
                  <div className="border-divide rounded-lg border bg-bg-light p-6 dark:bg-neutral-900">
                    <p className="text-base leading-relaxed text-bg-dark dark:text-gray-300">
                      Pierre-Alexandre's deep understanding of how LLMs retrieve, rank, and present
                      information is precisely what financial services companies need to win in the
                      AI-first era. Having worked on improving Gemini's capabilities, he understands
                      the inner workings of these systems better than almost anyone—and knows exactly
                      how to optimize your company's presence in ChatGPT and other AI platforms.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">
                    Core Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Large Language Models",
                      "Reinforcement Learning",
                      "Symbolic AI",
                      "Financial AI Applications",
                      "Multi-Agent Systems",
                      "Neural-Symbolic Integration",
                      "AI for Decision Making"
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-bg-dark bg-transparent px-4 py-2 text-sm text-bg-dark dark:border-neutral-600 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Testimonials />
      <DivideX />
      <Container className="border-divide border-x border-t p-4 py-20 md:px-8 md:py-40">
        <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <Badge text="Journey and Values" />
            <SectionHeading className="mt-4 text-left">
              Performance-Driven AI Distribution
            </SectionHeading>
            <SubHeading className="mt-6 mr-auto text-left">
              We help financial services companies understand where prospects drop off
              on ChatGPT and turn that insight into concrete revenue growth strategies.
              Our approach is data-driven, focused on conversions, not vanity metrics.
            </SubHeading>
            <div className="divide-divide mt-8 grid grid-cols-3 gap-6">
              <MetricBlock value="20%+" label="ChatGPT Traffic" />
              <MetricBlock value="57%" label="AI-First Consumers" />
              <MetricBlock value="10%" label="Monthly Growth" />
            </div>
          </div>
          <InformationBlock />
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide flex flex-col items-center border-x border-b pb-20">
        <div className="divide-divide border-divide grid grid-cols-1 border-b lg:grid-cols-2 lg:divide-x">
          <div className="flex flex-col items-start justify-start px-4 py-10 md:px-8 md:py-20">
            <Badge text="Careers" />
            <SectionHeading className="mt-4 text-left">
              Help Financial Services <br />
              Win in the AI Era
            </SectionHeading>
            <SubHeading className="mt-6 mr-auto max-w-md text-left">
              Building a generational company requires exceptional, hard-working
              people. We're solving a problem that didn't exist 18 months ago:
              how financial services get discovered and chosen in an AI-first world.
            </SubHeading>
          </div>
          <div className="divide-divide border-divide divide-y border-t lg:border-t-0">
            {careers.slice(0, 4).map((career, index) => (
              <Link
                href={career.href}
                key={career.id}
                className="block cursor-pointer px-4 py-4 hover:bg-gray-100 md:px-8 dark:hover:bg-neutral-800"
              >
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                  <h3 className="text-brand font-medium">{career.title}</h3>
                  <div className="hidden size-1 rounded-full bg-gray-400 sm:block dark:bg-neutral-600"></div>
                  <p className="text-sm text-gray-600 dark:text-neutral-200">
                    {career.location}
                  </p>
                  <div className="hidden size-1 rounded-full bg-gray-400 sm:block dark:bg-neutral-600"></div>
                  <span className="text-xs font-medium text-gray-600 dark:text-neutral-400">
                    {Math.floor(
                      (new Date().getTime() -
                        new Date(career.createdAt).getTime()) /
                        (1000 * 60 * 60 * 24),
                    )}{" "}
                    days ago
                  </span>
                </div>
                <p className="mt-2 font-medium text-neutral-500 dark:text-neutral-200">
                  {career.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <CTA />
      <DivideX />
    </main>
  );
}

const MetricBlock = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <h3 className="text-charcoal-700 text-3xl font-medium dark:text-neutral-100">
        {value}
      </h3>
      <p className="text-sm text-gray-600 dark:text-neutral-400">{label}</p>
    </div>
  );
};
