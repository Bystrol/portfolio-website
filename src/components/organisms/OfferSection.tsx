import { Translation } from '@/types/translation'
import { sectionIds } from '@/utils/data/sectionIds'
import { Unbounded } from 'next/font/google'
import OfferCard from '../molecules/OfferCard'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { isMobileDevice } from '@/utils/constants/isMobileDevice'

const unbounded = Unbounded({
  subsets: ['latin']
})

type OfferSectionProps = {
  translation: Translation
}

export default function OfferSection({ translation }: OfferSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef
  })
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-220%'])

  const cardsContent = translation.offer.cards.map((card, index) => {
    return <OfferCard key={index} title={card.title} content={card.content} />
  })
  return (
    <section
      id={sectionIds[2]}
      ref={sectionRef}
      className="relative lg:static h-[200vh] lg:h-screen w-full lg:flex lg:justify-center lg:items-center px-[30px] sm:px-[60px] lg:px-[120px] py-[60px] lg:py-0"
    >
      <div className="sticky lg:static top-0 flex flex-col gap-[25px] pt-[60px] lg:pt-0 mr-[4.6vw] lg:mr-0 max-w-[1440px] overflow-hidden">
        <h2
          className={`${unbounded.className} text-[16px] lg:text-[18px] uppercase`}
        >
          {translation.offer.heading}
        </h2>
        <p className="text-[16px] sm:text-[18px] lg:text-[24px] lg:w-1/2">
          {translation.offer.paragraph}
        </p>
        {isMobileDevice ? (
          <motion.div style={{ x }} className="flex gap-[20px]">
            {cardsContent}
          </motion.div>
        ) : (
          <div className="flex gap-[20px]">{cardsContent}</div>
        )}
      </div>
    </section>
  )
}
