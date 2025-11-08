import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/components/RenderBlocks'
import { DivideX } from '@/components/divide'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  // Récupérer la page depuis Payload
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const page = pages.docs[0]

  if (!page) {
    return notFound()
  }

  return (
    <main>
      <DivideX />
      <RenderBlocks layout={page.layout} />
      <DivideX />
    </main>
  )
}

// Generate static params pour les pages
export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })

  const pages = await payload.find({
    collection: 'pages',
    limit: 100,
  })

  return pages.docs
    .filter((page) => page.slug && typeof page.slug === 'string' && page.slug !== 'home')
    .map((page) => ({
      slug: page.slug as string,
    }))
}

// Generate metadata pour le SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const page = pages.docs[0]

  if (!page) {
    return {}
  }

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description,
  }
}
