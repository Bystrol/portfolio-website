import { I18nProviderClient } from '@/locales/client'
import { getStaticParams } from '@/locales/server'
import ClarityTag from '@/scripts/ClarityTag'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.michalbystryk.dev/'),
  title: 'Michał Bystryk | Front-end Developer',
  description:
    'Michał Bystryk, a proficient front-end developer with expertise in modern web technologies like React, TypeScript, and Node.js.',
  keywords: ['Michał Bystryk', 'Front-end developer', 'Web development'],
  openGraph: {
    images: '/opengraph-image.webp'
  },
  creator: 'Michał Bystryk',
  other: {
    'google-site-verification': 'FCpCptrurAkfrhyDUvNjSoHOkjh7H7uEKyHkV03JyZc'
  }
}

export function generateStaticParams() {
  return getStaticParams()
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
        <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
        <Analytics />
        <SpeedInsights />
        <ClarityTag />
      </body>
    </html>
  )
}
