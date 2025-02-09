import { HeroSection } from '@/components/templates/HeroSection'
import { AboutSection } from '@/components/templates/AboutSection'
import { OfferSection } from '@/components/templates/OfferSection'
import { ProjectsSection } from '@/components/templates/ProjectsSection'
import { ContactSection } from '@/components/templates/ContactSection'
import { Footer } from '@/components/organisms/Footer'
import { SocialMedia } from '@/components/molecules/SocialMedia'
import { ExperienceSection } from '@/components/templates/ExperienceSection'
import { Navbar } from '@/components/organisms/Navbar'
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
