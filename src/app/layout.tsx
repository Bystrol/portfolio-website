import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import type { Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.michalbystryk.dev/'),
  title: 'Michał Bystryk | Full-stack Developer',
  description:
    'Michał Bystryk, a proficient full-stack developer with expertise in modern web technologies like React, TypeScript, and Node.js.',
  keywords: [
    'Michał Bystryk',
    'Front-end developer',
    'Full-stack developer',
    'Web development'
  ],
  openGraph: {
    images: '/opengraph-image.png'
  },
  creator: 'Michał Bystryk'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
        {children}
      </body>
    </html>
  )
}
