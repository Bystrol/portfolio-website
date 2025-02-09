import { SectionId } from '@/types/SectionId'

export const scrollToSection = (sectionId: SectionId) => {
  const element = document.getElementById(sectionId)
  element?.scrollIntoView({ behavior: 'smooth' })
}
