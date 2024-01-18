type CtaButtonProps = {
  text: string
  icon?: React.FC
  handleClick: () => void
  isAnimated: boolean
}

export default function CtaButton({
  text,
  icon: Icon,
  handleClick,
  isAnimated
}: CtaButtonProps) {
  return (
    <button
      className={`group flex justify-center items-center gap-[10px] mt-[10px] px-[20px] py-[8px] w-max rounded-full border border-[#2960F8] bg-gradient-to-r from-[#5035DA] to-[#2960F8] sm:hover:drop-shadow-blue text-[14px] sm:text-[18px] lg:text-[20px] transition-all duration-200 ${
        isAnimated && 'animate-bounce'
      }`}
      onClick={handleClick}
    >
      {text}
      {Icon && (
        <div className="sm:group-hover:translate-y-[3px] transition-all">
          <Icon />
        </div>
      )}
    </button>
  )
}
