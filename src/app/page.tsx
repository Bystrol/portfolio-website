'use client'

import { useState } from 'react'
import HeroSection from '@/components/organisms/HeroSection'
import Navbar from '@/components/organisms/Navbar'
import useLanguageSwitch from '@/hooks/useLanguageSwitch'
import AboutSection from '@/components/organisms/AboutSection'
import OfferSection from '@/components/organisms/OfferSection'
import ProjectsSection from '@/components/organisms/ProjectsSection'
import ContactSection from '@/components/organisms/ContactSection'
import Footer from '@/components/organisms/Footer'
import PreloadingAnimation from '@/components/atoms/PreloadingAnimation'
import SocialMedia from '@/components/molecules/SocialMedia'
import ExperienceSection from '@/components/organisms/ExperienceSection'

export default function Home() {
  const [showContent, setShowContent] = useState<boolean>(false)
  const { translation, switchChecked, toggleSwitch } = useLanguageSwitch()

  setTimeout(() => {
    setShowContent(true)
  }, 1600)

  return (
    <>
      <PreloadingAnimation />
      {showContent && (
        <>
          <Navbar
            translation={translation}
            switchChecked={switchChecked}
            toggleSwitch={toggleSwitch}
          />
          <HeroSection translation={translation} />
          <AboutSection translation={translation} />
          <OfferSection translation={translation} />
          <ExperienceSection translation={translation} />
          <ProjectsSection translation={translation} />
          <ContactSection translation={translation} />
          <Footer translation={translation} />
          <SocialMedia />
        </>
      )}
    </>
  )
}
