# Kinro

A modern financial services landing page built with Next.js 15, Payload CMS, and Tailwind CSS 4.

## Features

- **Next.js 15** - Latest React framework with App Router
- **Payload CMS** - Headless CMS with PostgreSQL database
- **Tailwind CSS 4** - Modern utility-first CSS framework
- **React 19** - Latest React with improved performance
- **TypeScript** - Type-safe development
- **Motion** - Smooth animations and transitions
- **MDX Support** - Write content with components
- **Lucide Icons** - Beautiful, consistent icon set
- **Dark Mode** - Built-in theme switching
- **Cal.com Integration** - Embedded booking functionality

## Tech Stack

- **Framework**: Next.js 15.4.4
- **CMS**: Payload 3.61.1
- **Database**: PostgreSQL (via @payloadcms/db-postgres)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Package Manager**: pnpm 10.10.0

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Montaeie/Kinro.git
cd Kinro
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.sample .env.local
```

4. Configure your database connection and other environment variables in `.env.local`

### Development

Run the development server:

```bash
pnpm dev
```

Or with Turbopack:

```bash
pnpm dev:turbopack
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
pnpm build
pnpm start
```

## CMS Management

Access the Payload CMS admin panel at:
```
http://localhost:3000/admin
```

### Content Seeding

Seed example pages:
```bash
pnpm seed
```

Seed blog posts:
```bash
pnpm seed:blog
```

Clear all pages:
```bash
pnpm clear:pages
```

Reseed pages (clear and seed):
```bash
pnpm reseed
```

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── (app)/          # Public-facing pages
│   ├── (payload)/      # Payload CMS admin
│   └── api/            # API routes
├── collections/        # Payload CMS collections
├── components/         # React components
├── config/            # Configuration files
├── constants/         # Application constants
├── data/              # Static data files
├── globals/           # Payload global configs
├── hooks/             # Custom React hooks
├── icons/             # SVG icons
├── lib/               # Utility functions
├── public/            # Static assets
└── scripts/           # Utility scripts
```

## Key Technologies

- **Next.js 15** with App Router and React Server Components
- **Payload CMS** for content management with 16+ custom blocks
- **Tailwind CSS 4** with PostCSS for styling
- **Motion** for smooth animations
- **Lucide React** for icons
- **MDX** for component-based content
- **Cal.com** for booking integration

## License

Private

## Contributing

This is a private project.
