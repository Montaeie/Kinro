import { Contact } from "@/components/contact";
import { DivideX } from "@/components/divide";
import { RenderBlocks } from "@/components/RenderBlocks";
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'

import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Contact - Satsu",
  description:
    "Get in touch with Satsu to learn how we can help you optimize your ChatGPT presence and turn invisible traffic into measurable revenue.",
});

// Force dynamic rendering to always fetch fresh data from Payload
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const payload = await getPayload({ config: configPromise })
  const { isEnabled: isDraftMode } = await draftMode()

  // Get search params
  const params = await searchParams

  // Force fresh data if this is a preview request (has timestamp param)
  const isPreview = params.timestamp !== undefined

  // Fetch contact page from Payload
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'contact',
      },
    },
    limit: 1,
    draft: isDraftMode || isPreview,
  })

  const contactPage = pages.docs[0]

  // If contact page exists in Payload, render it
  if (contactPage && contactPage.layout) {
    return (
      <main>
        <DivideX />
        <RenderBlocks layout={contactPage.layout} />
        <DivideX />
      </main>
    )
  }

  // Otherwise, render static version (fallback)
  return (
    <main>
      <DivideX />
      <Contact />
      <DivideX />
    </main>
  );
}
