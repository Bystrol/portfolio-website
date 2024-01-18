import { Translation } from '@/types/translation'
import { sectionIds } from '@/utils/data/sectionIds'
import { Unbounded } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import FirstProjectImage from '../../../public/images/project-image-1.png'
import SecondProjectImage from '../../../public/images/project-image-2.png'
import ThirdProjectImage from '../../../public/images/project-image-3.png'
import FourthProjectImage from '../../../public/images/project-image-4.png'
import TechnologyBox from '../atoms/TechnologyBox'
import Link from 'next/link'
import CtaButton from '../molecules/CtaButton'
import ArrowTopRight from '../atoms/ArrowTopRight'

const unbounded = Unbounded({
  subsets: ['latin']
})

type ProjectsSectionProps = {
  translation: Translation
}

const projectsDetails = [
  {
    image: FirstProjectImage,
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
    image: SecondProjectImage,
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
  },
  {
    image: ThirdProjectImage,
    technologies: ['wordpress', 'javascript', 'php', 'mysql'],
    previewLink: 'https://cloudclick.pl/',
    githubLink: ''
  },
  {
    image: FourthProjectImage,
    technologies: ['wordpress', 'javascript', 'php', 'mysql'],
    previewLink: 'https://customgo.pl/',
    githubLink: ''
  }
]

export default function ProjectsSection({ translation }: ProjectsSectionProps) {
  const router = useRouter()

  return (
    <section
      id={sectionIds[3]}
      className="flex sm:justify-center gap-[20px] sm:gap-[25px] w-full px-[30px] sm:px-[60px] lg:px-[120px] py-[60px] lg:py-[83px]"
    >
      <div className="max-w-[1440px]">
        <h2
          className={`${unbounded.className} text-[16px] lg:text-[18px] uppercase pb-[20px] sm:pb-[25px]`}
        >
          {translation.projects.heading}
        </h2>
        <div className="flex flex-col gap-[40px] pr-[4.6vw] sm:pr-0">
          {projectsDetails.map((project, index) => {
            return (
              <div
                key={index}
                className="group w-full flex flex-col sm:flex-row gap-[25px] sm:gap-[60px] lg:gap-[75px] py-[20px] sm:py-[40px] sm:px-[40px] border border-light-black sm:hover:border-[#2960F880] rounded-[20px] sm:hover:bg-[#1B1B1B] transition-colors duration-500"
              >
                <div className="w-3/4 sm:w-1/2 rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.technologies[0]}
                    quality={100}
                    className="rounded-lg sm:rounded-xl sm:group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col gap-[10px] sm:gap-[20px] sm:w-1/2">
                  <div className="flex flex-wrap gap-[8px] sm:gap-[13px]">
                    {project.technologies.map((technology, index) => {
                      return <TechnologyBox key={index} text={technology} />
                    })}
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex items-center gap-[6px] text-[18px] sm:text-[22px] lg:text-[26px]">
                      <Link href={project.previewLink} className="peer">
                        {translation.projects.cards[index].title}
                      </Link>
                      <ArrowTopRight />
                    </div>
                    <p className="text-[12px] sm:text-[14px] lg:text-[16px]">
                      {translation.projects.cards[index].content}
                    </p>
                  </div>
                  {project.githubLink !== '' && (
                    <CtaButton
                      text={translation.projects.button}
                      handleClick={() => {
                        router.push(project.githubLink)
                      }}
                      isAnimated={false}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
