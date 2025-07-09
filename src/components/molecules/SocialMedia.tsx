import GithubLogo from '@/components/atoms/GithubLogo'
import LinkedinLogo from '@/components/atoms/LinkedinLogo'
import { githubLink, linkedinLink } from '@/constants/socialMediaLinks'
import Link from 'next/link'

const socialMediaData = [
  {
    link: githubLink,
    icon: GithubLogo
  },
  {
    link: linkedinLink,
    icon: LinkedinLogo
  }
]

export const SocialMedia = () => {
  return (
    <div className="fixed bottom-[30px] right-[10px] sm:right-[30px] lg:right-[60px] flex flex-col gap-[10px] animate-slideLeftMobile lg:animate-slideLeftDesktop">
      {socialMediaData.map((social, index) => (
        <Link
          aria-label={`Link to ${social.link}`}
          href={social.link}
          key={index}
          target="_blank"
          className="w-[30px] h-[30px] lg:w-[36px] lg:h-[36px] bg-[#1B1B1B] sm:hover:bg-dark-blue/[.20] border border-light-blue/50 rounded-full hover:drop-shadow-light cursor-pointer transition-all duration-200 flex justify-center items-center"
        >
          {social.icon()}
        </Link>
      ))}
    </div>
  )
}
