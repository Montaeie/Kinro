import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import configPromise from '@payload-config'
import { getPayload } from 'payload'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const payload = await getPayload({ config: configPromise })

  // Fetch Header and Footer globals
  const [headerData, footerData] = await Promise.all([
    payload.findGlobal({ slug: 'header' }),
    payload.findGlobal({ slug: 'footer' }),
  ])

  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-primary">
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="h-full bg-bg-light [--pattern-fg:var(--color-charcoal-900)]/10 dark:bg-bg-dark dark:[--pattern-fg:var(--color-neutral-100)]/30">
            <main className="h-full bg-bg-light antialiased dark:bg-bg-dark">
              <Navbar data={headerData} />
              {children}
              <Footer data={footerData} />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
