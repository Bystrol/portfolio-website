import { Translation } from '@/types/translation'
import { sectionIds } from '@/utils/data/sectionIds'
import { Unbounded } from 'next/font/google'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExperienceCard } from '../molecules/ExperienceCard'
import Link from 'next/link'

const unbounded = Unbounded({
  subsets: ['latin']
})

type Props = {
  translation: Translation
}

const experienceList = [
  {
    position: 'Frontend Developer',
    company: 'SignalOS',
    companyWebsite: 'https://www.signalos.io/',
    startDate: '03.2024',
    translationKey: 'signal' as const,
    technologies: [
      'React',
      'React Native',
      'Next',
      'Typescript',
      'Zustand',
      'Material UI',
      'Tanstack Query',
      'Vitest'
    ]
  },
  {
    position: 'Frontend Developer',
    company: 'Mobile Marketing Center',
    startDate: '01.2023',
    endDate: '12.2023',
    translationKey: 'mmc' as const,
    technologies: ['React', 'Typescript', 'Redux', 'Styled Components', 'SCSS']
  }
]

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 75
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

export default function ExperienceSection({ translation }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.1, once: true })

  return (
    <motion.section
      ref={sectionRef}
      id={sectionIds[3]}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 1 }}
      className="flex sm:justify-center gap-[20px] sm:gap-[25px] w-full px-[30px] sm:px-[60px] lg:px-[120px] py-[60px] lg:py-[83px]"
    >
      <div className="max-w-[1440px]">
        <h2
          className={`${unbounded.className} text-[16px] lg:text-[18px] uppercase pb-[20px] sm:pb-[25px]`}
        >
          {translation.experience.heading}
        </h2>
        <div className="flex flex-col gap-[40px] pr-[4.6vw] sm:pr-0">
          {experienceList.map((item, index) => {
            if (item.companyWebsite) {
              return (
                <Link key={index} href={item.companyWebsite} target="_blank">
                  <ExperienceCard
                    translation={translation}
                    companyWebsite={item.companyWebsite}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    position={item.position}
                    company={item.company}
                    translationKey={item.translationKey}
                    technologies={item.technologies}
                  />
                </Link>
              )
            }

            return (
              <ExperienceCard
                key={index}
                translation={translation}
                startDate={item.startDate}
                endDate={item.endDate}
                position={item.position}
                company={item.company}
                translationKey={item.translationKey}
                technologies={item.technologies}
              />
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
