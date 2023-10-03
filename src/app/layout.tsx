import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - The Cavallo Company',
    default:
      'The Cavallo Company- Marketing, Sales, web development, and philanthropy',
  },
  description:
   'At The Cavallo Company, we take pride in being a comprehensive partner for all your marketing and branding needs. As the owner of the company, I specialize in crafting 360-degree marketing and advertising plans that leave a lasting impact on your target audience. Our expertise extends beyond strategizing; we also possess the technical prowess to build cutting-edge websites and apps that align seamlessly with your brand identity.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
