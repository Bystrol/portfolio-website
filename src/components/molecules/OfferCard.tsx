import CodeIcon from '../atoms/CodeIcon'
import { motion } from 'framer-motion'

type OfferCardProps = {
  title: string
  content: string
}

const cardVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

export default function OfferCard({ title, content }: OfferCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="min-w-full lg:min-w-0 w-3/4 sm:w-1/2 lg:w-1/4 flex flex-col lg:flex-auto gap-[12px] px-[15px] py-[20px] border border-[#0043FE80] bg-[#1B1B1B] rounded-[15px]"
    >
      <CodeIcon />
      <h3 className="text-[22px] sm:text-[24px] lg:text-[26px]">
        {title}
      </h3>
      <p className="text-[12px] sm:text-[14px] text-white/[.70]">{content}</p>
    </motion.div>
  )
}
