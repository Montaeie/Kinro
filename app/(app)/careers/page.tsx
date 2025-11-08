import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { SectionHeading } from "@/components/seciton-heading";
import { SubHeading } from "@/components/subheading";
import { RenderBlocks } from "@/components/RenderBlocks";
import { careers } from "@/constants/careers";
import {
  BoltIcon,
  CloudCheckIcon,
  HeartHandsIcon,
  ShieldSplitIcon,
  SparklesIcon,
  TelescopeIcon,
} from "@/icons/card-icons";
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'

import { getSEOTags } from "@/lib/seo";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "Careers - Satsu",
  description:
    "Join us in building the future of AI distribution intelligence. Founded by AI researchers from Google DeepMind and successful fintech founders, Satsu is transforming how financial services companies win clients on LLM platforms.",
});

// Force dynamic rendering to always fetch fresh data from Payload
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function CareersPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const payload = await getPayload({ config: configPromise })
  const { isEnabled: isDraftMode } = await draftMode()

  // Get search params
  const params = await searchParams

  // Force fresh data if this is a preview request (has timestamp param)
  const isPreview = params.timestamp !== undefined

  // Fetch careers page from Payload
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'careers',
      },
    },
    limit: 1,
    draft: isDraftMode || isPreview,
  })

  const careersPage = pages.docs[0]

  // If careers page exists in Payload, render it
  if (careersPage && careersPage.layout) {
    return (
      <main>
        <DivideX />
        <RenderBlocks layout={careersPage.layout} />
        <DivideX />
      </main>
    )
  }

  // Otherwise, render static version (fallback)
  const uniqueDepartments = [
    ...new Set(careers.map((career) => career.department)),
  ];

  const why = [
    {
      title: "Complete Ownership",
      description:
        "Own your work end-to-end and see direct impact on how financial services companies win in AI platforms.",
      icon: <CloudCheckIcon className="text-brand size-6" />,
    },
    {
      title: "High-Paced Environment",
      description:
        "Move fast and ship quality. We're solving problems that didn't exist 18 months ago.",
      icon: <BoltIcon className="text-brand size-6" />,
    },
    {
      title: "Absolute Integrity",
      description:
        "We do what we say. Transparency and honesty guide every decision and interaction.",
      icon: <ShieldSplitIcon className="text-brand size-6" />,
    },
    {
      title: "People-First Culture",
      description:
        "Your growth, well-being, and success are fundamental to our mission.",
      icon: <HeartHandsIcon className="text-brand size-6" />,
    },
    {
      title: "Meaningful Impact",
      description:
        "Build technology that helps financial services companies turn invisible ChatGPT traffic into measurable revenue.",
      icon: <SparklesIcon className="text-brand size-6" />,
    },
    {
      title: "Vision Driven",
      description:
        "Join us in building the future of AI distribution intelligence for financial services.",
      icon: <TelescopeIcon className="text-brand size-4" />,
    },
  ];
  return (
    <main>
      <DivideX />
      <Container className="border-divide flex flex-col items-center border-x pb-20">
        <div className="divide-divide border-divide grid grid-cols-1 border-b lg:grid-cols-2 lg:divide-x">
          <div className="flex flex-col items-start justify-start px-4 py-10 md:px-8 md:py-32">
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
            <Button className="mt-4">View Roles</Button>
          </div>
          <div className="divide-divide border-divide flex flex-col items-center justify-center divide-y">
            {careers.slice(0, 3).map((career, index) => (
              <Link
                href={career.href}
                key={career.id}
                className="block cursor-pointer px-4 py-4 hover:bg-gray-100 md:px-8 dark:hover:bg-neutral-800"
              >
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                  <h3 className="text-brand font-medium">{career.title}</h3>
                  <div className="hidden size-1 rounded-full bg-gray-400 sm:block dark:bg-neutral-600"></div>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
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
      <Container className="border-divide flex flex-col items-center border-x border-b py-16 pb-20">
        <Badge text="Open Roles" />
        <SectionHeading className="mt-4 px-4 text-center">
          Checkout Our Open Roles
        </SectionHeading>
        <div className="mt-12 w-full">
          {uniqueDepartments.map((department) => (
            <JobSection
              key={department}
              title={department}
              jobs={careers.filter(
                (career) => career.department === department,
              )}
            />
          ))}
        </div>
      </Container>
      <Container className="border-divide flex flex-col items-center border-x border-b py-16 pb-20">
        <Badge text="Culture" />
        <SectionHeading className="mt-4 px-4 text-center">
          Why Work at Satsu?
        </SectionHeading>
        <div className="mt-12 grid grid-cols-1 gap-10 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
          {why.map((useCase, index) => (
            <div
              key={useCase.title}
              className="relative z-10 rounded-lg bg-gray-50 p-4 transition duration-200 md:p-5 dark:bg-neutral-800"
            >
              <div className="flex items-center gap-2">{useCase.icon}</div>
              <h3 className="mt-4 mb-2 text-lg font-medium">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <CTA />
      <DivideX />
    </main>
  );
}

const Row = ({ job, index }: { job: any; index: number }) => {
  return (
    <Link
      href={job.href}
      className="group flex flex-col px-4 py-4 hover:bg-gray-100 md:flex-row md:items-center md:justify-between md:px-8 dark:hover:bg-neutral-800"
    >
      <div className="flex items-center gap-6">
        <span className="group-hover:text-brand font-mono text-sm text-gray-500 dark:text-neutral-400">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="text-charcoal-700 text-lg font-medium dark:text-neutral-100">
          {job.title}
        </h3>
      </div>
      <div className="flex items-center gap-2 pl-10 md:pl-0">
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          {job.location}
        </p>
        <svg
          className="group-hover:text-brand hidden h-5 w-5 text-gray-400 transition duration-200 group-hover:translate-x-1 md:block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
};

const JobSection = ({ title, jobs }: { title: string; jobs: any[] }) => {
  return (
    <div className="border-divide mb-12 border-b">
      <h2 className="text-charcoal-700 bg-gray-50 px-4 py-4 text-xl font-semibold md:px-8 dark:bg-neutral-800 dark:text-neutral-100">
        {title}
      </h2>
      <div className="divide-divide divide-y">
        {jobs.map((job, index) => (
          <Row key={job.id} job={job} index={index} />
        ))}
      </div>
    </div>
  );
};
