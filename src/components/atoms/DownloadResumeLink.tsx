'use client'

import { useI18n } from '@/locales/client'
import Link from 'next/link'
import ArrowTopRight from './ArrowTopRight'

export const DownloadResumeLink = () => {
  const t = useI18n()

  return (
    <Link
      href="CV_Michał_Bystryk.pdf"
      target="_blank"
      className="group flex justify-center items-center gap-[10px] rounded-full border border-[#2960F8] bg-[#2960F840] sm:hover:drop-shadow-blue text-[14px] sm:text-[18px] lg:text-[20px] mt-[10px] px-[20px] py-[8px] animate-bounce w-max"
    >
      {t('common.downloadCv')}
      <div className="sm:group-hover:translate-y-[1px] transition-all">
        <ArrowTopRight />
      </div>
    </Link>
  )
}
