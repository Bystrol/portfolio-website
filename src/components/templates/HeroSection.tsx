import { getI18n } from '@/locales/server'
import { Unbounded } from 'next/font/google'
import { DownloadResumeLink } from '../atoms/DownloadResumeLink'
import { CtaButton } from '../molecules/CtaButton'

const unbounded = Unbounded({
  subsets: ['latin']
})

export const HeroSection = async () => {
  const t = await getI18n()

  return (
    <section
      id="hero"
      className="flex flex-col items-center gap-[160px] w-full h-svh bg-[url('../../public/images/mesh-gradient-mobile.webp')] sm:bg-[url('../../public/images/mesh-gradient-tablet.webp')] lg:bg-[url('../../public/images/mesh-gradient-desktop.webp')] bg-cover bg-no-repeat bg-right-bottom"
    >
      <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-[20px] w-4/5 animate-slideUpGreeting">
        <h1
          className={`${unbounded.className} text-center text-[34px] sm:text-[58px] lg:text-[68px] max-w-[310px] sm:max-w-[520px] lg:max-w-[820px] leading-[45px] sm:leading-[75px] lg:leading-[80px]`}
        >
          {t('common.hero.heading')}
        </h1>
        <div>
          <p className="text-center text-[12px] sm:text-[14px] lg:text-[16px] max-w-[346px] sm:max-w-[440px] lg:max-w-[580px] text-white/[.70]">
            {t('common.hero.first_paragraph')}
          </p>
          <p className="text-center text-[12px] sm:text-[14px] lg:text-[16px] max-w-[346px] sm:max-w-[440px] lg:max-w-[580px] text-white/[.70]">
            {t('common.hero.second_paragraph')}
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <CtaButton />

          <DownloadResumeLink />
        </div>
      </div>
      <div className="absolute bottom-[30px] flex justify-center w-full px-[30px] sm:px-[60px] lg:px-[120px] animate-slideUp">
        <div
          className={`w-full max-w-[1440px] uppercase text-[16px] sm:text-[18px] lg:text-[20px] ${unbounded.className}`}
        >
          {/* <div className="w-max text-right leading-[20px] sm:leading-[22.5px] lg:leading-[25px]">
            <p>{translation.hero.availability_first}</p>
            <div className="w-[14px] h-[14px] rounded-full bg-gradient-to-r from-[#5035DA] to-[#2960F8] inline-block" />
            <p className="inline-block ml-1.5">
              {translation.hero.availability_second}
            </p>
          </div> */}
        </div>
      </div>
    </section>
  )
}
