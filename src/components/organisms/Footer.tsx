import { getI18n } from '@/locales/server'
import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({
  subsets: ['latin']
})

export const Footer = async () => {
  const t = await getI18n()
  const todaysYear = new Date().getFullYear()

  return (
    <footer className="flex justify-center w-full px-[30px] sm:px-[60px] lg:px-[120px] py-[10px] sm:py-[30px]">
      <p
        className={`${unbounded.className} w-full text-[9px] sm:text-[14px] max-w-[1440px]`}
      >
        © Michał Bystryk {todaysYear}. {t('common.footer.paragraph')}
      </p>
    </footer>
  )
}
