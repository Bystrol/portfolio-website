'use client'

import { useI18n } from '@/locales/client'
import { scrollToSection } from '@/utils/scrollToSection'
import ArrowDown from '../atoms/ArrowDown'

export const CtaButton = () => {
  const t = useI18n()

  return (
    <button
      className="group flex justify-center items-center gap-[10px] mt-[10px] px-[20px] py-[8px] w-max rounded-full border border-[#2960F8] bg-gradient-to-r from-[#5035DA] to-[#2960F8] sm:hover:drop-shadow-blue text-[14px] sm:text-[18px] lg:text-[20px] transition-all duration-200 animate-bounce"
      onClick={() => scrollToSection('contact')}
    >
      {t('common.hero.button')}
      <div className="sm:group-hover:translate-y-[3px] transition-all">
        <ArrowDown />
      </div>
    </button>
  )
}
