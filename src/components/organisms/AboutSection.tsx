import { Translation } from '@/types/translation'
import { sectionIds } from '@/utils/data/sectionIds'
import { Unbounded } from 'next/font/google'
import TechnologyBox from '../atoms/TechnologyBox'
import Image from 'next/image'
import PortraitImg from '../../../public/images/portrait.png'

const unbounded = Unbounded({
  subsets: ['latin']
})

type AboutSectionProps = {
  translation: Translation
}

const technologies: string[] = [
  'Next.js',
  'React.js',
  'Typescript',
  'Express.js',
  'Nosql',
  'Wordpress'
]

export default function AboutSection({ translation }: AboutSectionProps) {
  return (
    <section
      id={sectionIds[1]}
      className="w-full sm:h-screen sm:flex sm:items-center sm:justify-center px-[30px] sm:px-[60px] lg:px-[120px] py-[60px] sm:py-0"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between gap-[30px] pr-[4.6vw] sm:pr-0 max-w-[1440px]">
        <div className="flex flex-col gap-[30px] sm:w-1/2">
          <div className="flex flex-col gap-[15px]">
            <h2
              className={`${unbounded.className} text-[16px] lg:text-[18px] uppercase`}
            >
              {translation.about.heading_first}
            </h2>
            <p className="text-justify sm:text-[18px] lg:text-[24px]">
              {translation.about.paragraph_first}
            </p>
            <p className="text-justify text-[12px] sm:text-[14px] lg:text-[16px]">
              {translation.about.paragraph_second}
            </p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h3
              className={`${unbounded.className} text-[16px] lg:text-[18px] uppercase`}
            >
              {translation.about.heading_second}
            </h3>
            <div className="flex items-center flex-wrap gap-[8px] sm:gap-[13px]">
              {technologies.map((technology, index) => {
                return <TechnologyBox key={index} text={technology} />
              })}
              <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-r from-[#5035DA] to-[#2960F8]" />
            </div>
          </div>
        </div>
        <div className="w-[250px] sm:w-[287px] lg:w-[386px]">
          <Image src={PortraitImg} alt="portrait" quality={100} priority />
        </div>
      </div>
    </section>
  )
}
