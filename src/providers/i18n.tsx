import { I18nProviderClient } from '@/locales/client'
import { getCurrentLocale } from '@/locales/server'
import { ReactNode } from 'react'

export const I18nProvider = async ({ children }: { children: ReactNode }) => {
  const locale = await getCurrentLocale()

  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
}
