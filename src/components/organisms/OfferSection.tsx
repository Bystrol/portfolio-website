import { Translation } from '@/types/translation'
import { sectionIds } from '@/utils/data/sectionIds'
import { Unbounded } from 'next/font/google'
import OfferCard from '../molecules/OfferCard'
import { motion, useTransform, useScroll, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const unbounded = Unbounded({
  subsets: ['latin']
})

type OfferSectionProps = {
  translation: Translation
}

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

export default function OfferSection({ translation }: OfferSectionProps) {
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef
  })
  const isInView = useInView(sectionRef, { amount: 0.2, once: true })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-328%'])

  const cardsContent = translation.offer.cards.map((card, index) => {
    return <OfferCard key={index} title={card.title} content={card.content} />
  })

  useEffect(() => {
    const isMobile =
      /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    setIsMobileDevice(isMobile)
  }, [])

  return (
    <motion.section
      id={sectionIds[2]}
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 1 }}
      className="relative lg:static h-[200vh] lg:h-screen w-full lg:flex lg:justify-center lg:items-center sm:px-[60px] lg:px-[120px] pb-[60px] lg:pb-0"
    >
      <div className="sticky lg:static top-0 flex flex-col gap-[25px] pt-[15vh] lg:pt-0 mr-[4.6vw] lg:mr-0 max-w-[1440px] overflow-hidden px-[30px]">
        <h2
          className={`${unbounded.className} text-[16px] lg:text-[18px] uppercase`}
        >
          {translation.offer.heading}
        </h2>
        <p className="text-[16px] sm:text-[18px] lg:text-[24px] lg:w-1/2">
          {translation.offer.paragraph}
        </p>
        {isMobileDevice ? (
          <motion.div style={{ x }} className="flex gap-[30px] w-[104%]">
            {cardsContent}
          </motion.div>
        ) : (
          <motion.div
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            className="flex gap-[20px]"
          >
            {cardsContent}
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
