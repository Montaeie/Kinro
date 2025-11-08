import { getPayload } from 'payload'
import config from '../payload.config'

const clearPages = async () => {
  const payload = await getPayload({ config })

  console.log('🗑️  Clearing existing pages...\n')

  try {
    // Get all pages
    const { docs: pages } = await payload.find({
      collection: 'pages',
      limit: 1000,
    })

    console.log(`Found ${pages.length} pages to delete`)

    // Delete each page
    for (const page of pages) {
      await payload.delete({
        collection: 'pages',
        id: page.id,
      })
      console.log(`✅ Deleted: ${page.title}`)
    }

    console.log('\n🎉 Successfully cleared all pages!')
  } catch (error) {
    console.error('❌ Error clearing pages:', error)
    throw error
  }

  process.exit(0)
}

clearPages()
