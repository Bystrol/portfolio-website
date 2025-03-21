import { motion } from 'framer-motion'
import { Unbounded } from 'next/font/google'
import ArrowTopRight from '../atoms/ArrowTopRight'
import TechnologyBox from '../atoms/TechnologyBox'
import { useI18n } from '@/locales/client'

type Props = {
  companyWebsite?: string
  startDate: string
  endDate: string | undefined
  position: string
  company: string
  technologies: string[]
  duties: string[]
}

const unbounded = Unbounded({
  subsets: ['latin']
})

const cardVariants = {
  hidden: {
    y: 75
  },
  visible: {
    y: 0
  }
}

export const ExperienceCard = ({
  companyWebsite,
  startDate,
  endDate,
  position,
  company,
  technologies,
  duties
}: Props) => {
  const t = useI18n()

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      transition={{ duration: 0.5 }}
      whileInView="visible"
      className={`group w-full flex flex-col sm:flex-row gap-[25px] sm:gap-[60px] lg:gap-[75px] py-[20px] sm:py-[40px] sm:px-[40px] border border-light-black sm:hover:border-[#2960F880] rounded-[20px] sm:hover:bg-[#1B1B1B] transition-colors duration-500 ${
        companyWebsite ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      <p
        className={`${unbounded.className} text-[12px] sm:text-[14px] lg:text-[16px] text-white/[.70] min-w-[200px]`}
      >
        {`${startDate} - ${endDate ?? t('common.experience.ongoing')}`}
      </p>
      <div className="flex flex-col gap-[10px] sm:gap-[20px]">
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[6px] text-[18px] sm:text-[22px] lg:text-[26px]">
            {companyWebsite ? (
              <>
                {`${position} • ${company}`}
                <ArrowTopRight />
              </>
            ) : (
              <span>{`${position} • ${company}`}</span>
            )}
          </div>
          {duties.map((duty, index) => (
            <p
              key={index}
              className="text-[12px] sm:text-[14px] lg:text-[16px] text-white/[.70]"
            >
              {`• ${duty}`}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-[8px]">
          {technologies.map((technology, index) => {
            return <TechnologyBox key={index} text={technology} />
          })}
        </div>
      </div>
    </motion.div>
  )
}
