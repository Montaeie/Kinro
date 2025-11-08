import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
    Pages,
    Posts,
    Media,
  ],

  // Global configurations
  globals: [Header, Footer],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-change-this-in-production',

  // Postgres Database Adapter
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgresql://anisnanai@localhost:5432/satsu_cms',
    },
  }),

  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  sharp,
})
