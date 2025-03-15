'use client'

import { useI18n } from '@/locales/client'
import { motion, useInView } from 'framer-motion'
import { Unbounded } from 'next/font/google'
import Image from 'next/image'
import { useRef } from 'react'
import PortraitImg from '../../../public/images/portrait.png'
import TechnologyBox from '../atoms/TechnologyBox'

const unbounded = Unbounded({
  subsets: ['latin']
})

const technologies: string[] = [
  'Next.js',
  'React.js',
  'Typescript',
  'Express.js',
  'Nosql'
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

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 75
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const textVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

export const AboutSection = () => {
  const t = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section
      id="about"
      className="w-full sm:h-screen sm:flex sm:items-center sm:justify-center px-[30px] sm:px-[60px] lg:px-[120px] py-[60px] sm:py-0"
    >
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
        className="flex flex-col sm:flex-row sm:justify-between gap-[30px] pr-[4.6vw] sm:pr-0 max-w-[1440px]"
      >
        <div className="flex flex-col gap-[30px] sm:w-1/2">
          <div className="flex flex-col gap-[15px]">
            <h2
              className={`${unbounded.className} text-[16px] lg:text-[18px] uppercase`}
            >
              {t('common.about.heading_first')}
            </h2>
            <motion.p
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ staggerChildren: 0.01 }}
              className="sm:text-[18px] lg:text-[24px]"
            >
              {t('common.about.paragraph_first')
                .split('')
                .map((char, index) => (
                  <motion.span variants={textVariants} key={index}>
                    {char}
                  </motion.span>
                ))}
            </motion.p>
            <motion.p
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ staggerChildren: 0.01 }}
              className="text-[12px] sm:text-[14px] lg:text-[16px] text-white/[.70]"
            >
              {t('common.about.paragraph_second')
                .split('')
                .map((char, index) => (
                  <motion.span variants={textVariants} key={index}>
                    {char}
                  </motion.span>
                ))}
            </motion.p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h3
              className={`${unbounded.className} text-[16px] lg:text-[18px] uppercase`}
            >
              {t('common.about.heading_second')}
            </h3>
            <div className="flex items-center flex-wrap gap-[8px] sm:gap-[13px]">
              {technologies.map((technology, index) => {
                return <TechnologyBox key={index} text={technology} />
              })}
              <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-r from-[#5035DA] to-[#2960F8]" />
            </div>
          </div>
        </div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-[250px] sm:w-[287px] lg:w-[386px]"
        >
          <Image
            src={PortraitImg}
            alt="Picture with my portrait"
            width={772}
            height={976}
            quality={80}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
