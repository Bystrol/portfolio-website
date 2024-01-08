import scrollToSection from '@/utils/functions/scrollToSection'
import CtaButton from './CtaButton'
import SmallVector from './svg/SmallVector'
import ArrowDown from './svg/ArrowDown'
import { Unbounded } from 'next/font/google'
import MediumVector from './svg/MediumVector'
import LargeVector from './svg/LargeVector'
import { Translation } from '@/types/translation'

const unbounded = Unbounded({
  subsets: ['latin']
})

export default function HeroSection({ translation }: Translation) {
  return (
    <section className="flex flex-col items-center gap-[160px] w-full h-svh bg-[url('../../public/images/mesh-gradient-mobile.png')] sm:bg-[url('../../public/images/mesh-gradient-tablet.png')] lg:bg-[url('../../public/images/mesh-gradient-desktop.png')] bg-cover bg-no-repeat bg-right">
      <SmallVector />
      <MediumVector />
      <LargeVector />
      <div className="absolute top-[30svh] flex flex-col items-center gap-[20px] w-4/5">
        <h1
          className={`${unbounded.className} text-center text-[34px] sm:text-[58px] lg:text-[68px] max-w-[310px] sm:max-w-[520px] lg:max-w-[820px]`}
        >
          {translation.hero.heading}
        </h1>
        <p className="text-center text-[12px] sm:text-[14px] lg:text-[16px] max-w-[346px] sm:max-w-[440px] lg:max-w-[580px] text-white/[.70]">
          {translation.hero.paragraph}
        </p>
        <CtaButton
          text={translation.hero.button}
          handleClick={() => scrollToSection(3)}
          icon={ArrowDown}
        />
      </div>
      <div className="absolute bottom-[30px] flex justify-center w-full px-[30px] sm:px-[60px] lg:px-[120px]">
        <div
          className={`w-full max-w-[1440px] uppercase text-[16px] sm:text-[18px] lg:text-[20px] ${unbounded.className}`}
        >
          <p>{translation.hero.availability_first}</p>
          <div className="w-[14px] h-[14px] rounded-full bg-gradient-to-r from-[#5035DA] to-[#2960F8] inline-block" />
          <p className="inline-block ml-1.5">
            {translation.hero.availability_second}
          </p>
        </div>
      </div>
    </section>
  )
}
