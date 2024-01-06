import { sectionIds } from '../data/sectionIds'

export default function scrollToSection(index: number) {
  const element = document.getElementById(sectionIds[index])
  element?.scrollIntoView({ behavior: 'smooth' })
}
