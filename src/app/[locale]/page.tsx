import { HeroSection } from '@/components/templates/HeroSection'
import { AboutSection } from '@/components/templates/AboutSection'
import { OfferSection } from '@/components/templates/OfferSection'
import { ProjectsSection } from '@/components/templates/ProjectsSection'
import { ContactSection } from '@/components/templates/ContactSection'
import { Footer } from '@/components/organisms/Footer'
import { PreloadingAnimation } from '@/components/atoms/PreloadingAnimation'
import { SocialMedia } from '@/components/molecules/SocialMedia'
import { ExperienceSection } from '@/components/templates/ExperienceSection'
import { Navbar } from '@/components/organisms/Navbar'

export default function HomePage() {
  return (
    <>
      <PreloadingAnimation />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OfferSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <SocialMedia />
    </>
  )
}
