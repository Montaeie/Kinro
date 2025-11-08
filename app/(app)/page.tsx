import { Benefits } from "@/components/benefits";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { FAQs } from "@/components/faqs";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { UseCases } from "@/components/use-cases";
import { ProblemFailures } from "@/components/problem-failures";
import { Team } from "@/components/team";
import { VisionFunnel } from "@/components/vision-funnel";
import { RenderBlocks } from "@/components/RenderBlocks";

import { getSEOTags } from "@/lib/seo";
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'

export const metadata = getSEOTags();

// Force dynamic rendering to always fetch fresh data from Payload
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const payload = await getPayload({ config: configPromise })
  const { isEnabled: isDraftMode } = await draftMode()

  // Get search params
  const params = await searchParams

  // Force fresh data if this is a preview request (has timestamp param)
  const isPreview = params.timestamp !== undefined

  // Chercher une page "home" dans Payload
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
    limit: 1,
    draft: isDraftMode || isPreview,
  })

  const homePage = pages.docs[0]

  // Si une page "home" existe dans Payload, l'afficher
  if (homePage && homePage.layout) {
    return (
      <main>
        <DivideX />
        <RenderBlocks layout={homePage.layout} />
        <DivideX />
      </main>
    )
  }

  // Sinon, afficher la version statique (fallback)
  return (
    <main>
      <DivideX />
      <Hero />
      <DivideX />
      {/* Vision: From Invisible to Inevitable */}
      <VisionFunnel />
      <DivideX />
      {/* Problem Section: Failures */}
      <ProblemFailures />
      <DivideX />
      {/* Real Scenarios We Solve */}
      <UseCases />
      <DivideX />
      {/* Performance & Value */}
      <Benefits />
      <DivideX />
      {/* Methodology */}
      <HowItWorks />
      <DivideX />
      <FAQs />
      <DivideX />
      <Team />
      <DivideX />
      <CTA />
      <DivideX />
    </main>
  );
}
