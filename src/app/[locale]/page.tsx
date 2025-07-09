import { SocialMedia } from '@/components/molecules/SocialMedia'
import { Footer } from '@/components/organisms/Footer'
import { Navbar } from '@/components/organisms/Navbar'
import { AboutSection } from '@/components/templates/AboutSection'
import { ContactSection } from '@/components/templates/ContactSection'
import { ExperienceSection } from '@/components/templates/ExperienceSection'
import { HeroSection } from '@/components/templates/HeroSection'
import { OfferSection } from '@/components/templates/OfferSection'
import { ProjectsSection } from '@/components/templates/ProjectsSection'
import { setStaticParamsLocale } from 'next-international/server'

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setStaticParamsLocale(locale)

  return (
    <>
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
