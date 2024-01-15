import { Translation } from '@/types/translation'
import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({
  subsets: ['latin']
})

type FooterProps = {
  translation: Translation
}

export default function Footer({ translation }: FooterProps) {
  return (
    <footer className="w-full px-[30px] sm:px-[60px] lg:px-[120px] py-[10px] sm:py-[30px]">
      <p
        className={`${unbounded.className} text-[10px] sm:text-[14px] text-center`}
      >
        © Michał Bystryk 2024. {translation.footer.paragraph}
      </p>
    </footer>
  )
}
