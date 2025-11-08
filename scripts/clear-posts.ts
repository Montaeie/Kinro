import { getPayload } from 'payload'
import config from '../payload.config'

const clearPosts = async () => {
  const payload = await getPayload({ config })

  console.log('🗑️  Clearing existing blog posts...\n')

  try {
    // Get all posts
    const { docs: posts } = await payload.find({
      collection: 'posts',
      limit: 1000,
    })

    console.log(`Found ${posts.length} posts to delete`)

    // Delete each post
    for (const post of posts) {
      await payload.delete({
        collection: 'posts',
        id: post.id,
      })
      console.log(`✅ Deleted: ${post.title}`)
    }

    console.log('\n🎉 Successfully cleared all blog posts!')
  } catch (error) {
    console.error('❌ Error clearing posts:', error)
    throw error
  }

  process.exit(0)
}

clearPosts()
