import { ReactNode } from 'react'
import { I18nProviderClient } from '../../locales/client'
import { getStaticParams } from '@/locales/server'

export function generateStaticParams() {
  return getStaticParams()
}

export default async function SubLayout({
  params,
  children
}: {
  params: Promise<{ locale: string }>
  children: ReactNode
}) {
  const { locale } = await params

  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
}
