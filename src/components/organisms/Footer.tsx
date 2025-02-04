import { Translation } from '@/types/translation'
import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({
  subsets: ['latin']
})

type FooterProps = {
  translation: Translation
}

export default function Footer({ translation }: FooterProps) {
  const todaysYear = new Date().getFullYear()

  return (
    <footer className="flex justify-center w-full px-[30px] sm:px-[60px] lg:px-[120px] py-[10px] sm:py-[30px]">
      <p
        className={`${unbounded.className} w-full text-[9px] sm:text-[14px] max-w-[1440px]`}
      >
        © Michał Bystryk {todaysYear}. {translation.footer.paragraph}
      </p>
    </footer>
  )
}
