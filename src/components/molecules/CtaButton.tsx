type CtaButtonProps = {
  text: string
  icon?: React.FC
  handleClick: () => void
}

export default function CtaButton({
  text,
  icon: Icon,
  handleClick
}: CtaButtonProps) {
  return (
    <button
      className={`flex justify-center items-center gap-[10px] px-[20px] py-[8px] w-max rounded-full border border-[#2960F8] bg-gradient-to-r from-[#5035DA] to-[#2960F8] hover:drop-shadow-blue text-[14px] sm:text-[18px] lg:text-[20px] transition-all duration-200 animate-bounce`}
      onClick={handleClick}
    >
      {text}
      {Icon && <Icon />}
    </button>
  )
}
