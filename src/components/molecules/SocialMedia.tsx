import { useRouter } from 'next/navigation'
import CircularButton from '@/components/molecules/CircularButton'
import GithubLogo from '@/components/atoms/GithubLogo'
import LinkedinLogo from '@/components/atoms/LinkedinLogo'
import { githubLink, linkedinLink } from '@/utils/constants/socialMediaLinks'

export default function SocialMedia() {
  const router = useRouter()

  return (
    <div className="fixed bottom-[30px] right-[10px] sm:right-[30px] lg:right-[60px] flex flex-col gap-[10px] animate-slideLeftMobile lg:animate-slideLeftDesktop">
      <CircularButton
        handleClick={() => router.push(githubLink)}
        icon={GithubLogo}
      />
      <CircularButton
        handleClick={() => router.push(linkedinLink)}
        icon={LinkedinLogo}
      />
    </div>
  )
}
