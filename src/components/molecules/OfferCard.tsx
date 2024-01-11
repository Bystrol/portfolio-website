import CodeIcon from '../atoms/CodeIcon'

type OfferCardProps = {
  title: string
  content: string
}

export default function OfferCard({ title, content }: OfferCardProps) {
  return (
    <div className="min-w-[60vw] lg:min-w-0 w-3/4 sm:w-1/2 lg:w-1/4 flex flex-col lg:flex-auto gap-[12px] px-[15px] py-[20px] border border-[#0043FE80] bg-[#1B1B1B] rounded-[15px]">
      <CodeIcon />
      <h3 className="text-[22px] sm:text-[24px] lg:text-[26px] w-3/4 sm:w-2/3">
        {title}
      </h3>
      <p className="text-[12px] sm:text[14px]">{content}</p>
    </div>
  )
}
