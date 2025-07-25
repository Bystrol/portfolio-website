'use client'

import { useI18n } from '@/locales/client'
import { motion, useInView } from 'framer-motion'
import { Unbounded } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import AdminDashboardImage from '../../../public/images/admin-dashboard.webp'
import FirstProjectImage from '../../../public/images/project-image-1.webp'
import SecondProjectImage from '../../../public/images/project-image-2.webp'
import ArrowTopRight from '../atoms/ArrowTopRight'
import TechnologyBox from '../atoms/TechnologyBox'

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

const cardVariants = {
  hidden: {
    y: 75
  },
  visible: {
    y: 0
  }
}

export const ProjectsSection = () => {
  const t = useI18n()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.1, once: true })

  const projectsDetails = [
    {
      id: 'dashboard',
      image: AdminDashboardImage,
      title: t('common.projects.cards.dashboard.title'),
      content: t('common.projects.cards.dashboard.content'),
      technologies: [
        'next.js',
        'react.js',
        'typescript',
        'material ui',
        'clerk',
        'mongodb',
        'zustand',
        'nuqs'
      ],
      previewLink: 'https://admin-dashboard-gamma-murex.vercel.app/',
      githubLink: 'https://github.com/Bystrol/admin-dashboard'
    },
    {
      id: 'ecommerce',
      image: FirstProjectImage,
      title: t('common.projects.cards.ecommerce.title'),
      content: t('common.projects.cards.ecommerce.content'),
      technologies: [
        'react.js',
        'typescript',
        'redux',
        'react-Query',
        'express.js',
        'mongodb'
      ],
      previewLink: 'https://ecommerce-store-client.onrender.com/',
      githubLink: 'https://github.com/Bystrol/ecommerce-store-client'
    },
    {
      id: 'finance',
      image: SecondProjectImage,
      title: t('common.projects.cards.finance.title'),
      content: t('common.projects.cards.finance.content'),
      technologies: [
        'next.js',
        'typescript',
        'redux',
        'tailwind',
        'next-auth',
        'mongodb',
        'prisma'
      ],
      previewLink: 'https://finance-manager-six.vercel.app/',
      githubLink: 'https://github.com/Bystrol/finance-manager'
    }
  ]

  return (
    <motion.section
      id="projects"
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
          {t('common.projects.heading')}
        </h2>
        <div className="flex flex-col gap-[40px] pr-[4.6vw] sm:pr-0">
          {projectsDetails.map((project) => {
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                transition={{ duration: 0.5 }}
                whileInView="visible"
                className="group w-full flex flex-col sm:flex-row gap-[25px] sm:gap-[60px] lg:gap-[75px] py-[20px] sm:py-[40px] sm:px-[40px] border border-light-black sm:hover:border-[#2960F880] rounded-[20px] sm:hover:bg-[#1B1B1B] transition-colors duration-500"
              >
                <Link
                  href={project.previewLink}
                  target="_blank"
                  className="w-3/4 sm:w-1/2 rounded-xl overflow-hidden h-max"
                >
                  <Image
                    src={project.image}
                    alt={`Preview image of the ${project.id} project`}
                    className="rounded-lg sm:rounded-xl sm:group-hover:scale-105 transition-all duration-500"
                  />
                </Link>
                <div className="flex flex-col gap-[10px] sm:gap-[20px] sm:w-1/2">
                  <div className="flex flex-wrap gap-[8px]">
                    {project.technologies.map((technology, index) => {
                      return <TechnologyBox key={index} text={technology} />
                    })}
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex items-center gap-[6px] text-[18px] sm:text-[22px] lg:text-[26px]">
                      <Link
                        href={project.previewLink}
                        className="peer flex justify-between items-center gap-[6px]"
                        target="_blank"
                      >
                        {project.title}
                        <ArrowTopRight />
                      </Link>
                    </div>
                    <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-white/[.70]">
                      {project.content}
                    </p>
                  </div>
                  {!!project.githubLink ? (
                    <Link href={project.githubLink} target="_blank">
                      <button className="flex px-[15px] py-[6px] sm:px-[30px] sm:py-[8px] rounded-full border border-[#2960F8] bg-gradient-to-r from-[#5035DA] to-[#2960F8] sm:hover:drop-shadow-blue text-[12px] sm:text-[16px] transition-all duration-200">
                        {t('common.projects.button')}
                      </button>
                    </Link>
                  ) : null}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
