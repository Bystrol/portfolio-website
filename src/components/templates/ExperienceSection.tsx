'use client'

import { useI18n } from '@/locales/client'
import { motion, useInView } from 'framer-motion'
import { Unbounded } from 'next/font/google'
import Link from 'next/link'
import { useRef } from 'react'
import { ExperienceCard } from '../molecules/ExperienceCard'

const unbounded = Unbounded({
  subsets: ['latin']
})

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

export const ExperienceSection = () => {
  const t = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.1, once: true })

  const experienceList = [
    {
      id: 'signal',
      position: 'Frontend Developer',
      company: 'SignalOS',
      companyWebsite: 'https://www.signalos.io/',
      startDate: '03.2024',
      endDate: '03.2025',
      translationKey: 'signal',
      technologies: [
        'React',
        'React Native',
        'Next',
        'Typescript',
        'Zustand',
        'Material UI',
        'Tanstack Query',
        'Vitest'
      ],
      duties: [
        t('common.experience.duties.signal.1'),
        t('common.experience.duties.signal.2'),
        t('common.experience.duties.signal.3'),
        t('common.experience.duties.signal.4'),
        t('common.experience.duties.signal.5')
      ]
    },
    {
      id: 'mmc',
      position: 'Frontend Developer',
      company: 'Mobile Marketing Center',
      startDate: '01.2023',
      endDate: '12.2023',
      translationKey: 'mmc',
      technologies: [
        'React',
        'Typescript',
        'Redux',
        'Styled Components',
        'SCSS'
      ],
      duties: [
        t('common.experience.duties.mmc.1'),
        t('common.experience.duties.mmc.2'),
        t('common.experience.duties.mmc.3'),
        t('common.experience.duties.mmc.4'),
        t('common.experience.duties.mmc.5'),
        t('common.experience.duties.mmc.6'),
        t('common.experience.duties.mmc.7')
      ]
    }
  ]

  return (
    <motion.section
      id="experience"
      ref={sectionRef}
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
          {t('common.experience.heading')}
        </h2>
        <div className="flex flex-col gap-[40px] pr-[4.6vw] sm:pr-0">
          {experienceList.map((item) => {
            if (item.companyWebsite) {
              return (
                <Link key={item.id} href={item.companyWebsite} target="_blank">
                  <ExperienceCard
                    companyWebsite={item.companyWebsite}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    position={item.position}
                    company={item.company}
                    technologies={item.technologies}
                    duties={item.duties}
                  />
                </Link>
              )
            }

            return (
              <ExperienceCard
                key={item.id}
                startDate={item.startDate}
                endDate={item.endDate}
                position={item.position}
                company={item.company}
                technologies={item.technologies}
                duties={item.duties}
              />
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
