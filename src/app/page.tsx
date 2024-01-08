'use client'

import { useRouter } from 'next/navigation'
import CircularButton from '@/components/CircularButton'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import GithubLogo from '@/components/svg/GithubLogo'
import LinkedinLogo from '@/components/svg/LinkedinLogo'
import useLanguageSwitch from '@/hooks/useLanguageSwitch'

export default function Home() {
  const router = useRouter()
  const { translation, switchChecked, toggleSwitch } = useLanguageSwitch()

  return (
    <>
      <Navbar
        translation={translation}
        switchChecked={switchChecked}
        toggleSwitch={toggleSwitch}
      />
      <HeroSection translation={translation} />
      <div className="fixed bottom-[30px] right-[10px] sm:right-[30px] lg:right-[60px] flex flex-col gap-[10px]">
        <CircularButton
          handleClick={() => router.push('https://github.com/bystrol')}
          icon={GithubLogo}
        />
        <CircularButton
          handleClick={() =>
            router.push('https://www.linkedin.com/in/michal-bystryk/')
          }
          icon={LinkedinLogo}
        />
      </div>
    </>
  )
}
