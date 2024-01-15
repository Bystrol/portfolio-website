type CircularButtonProps = {
  handleClick: () => void
  icon: React.FC
}

export default function CircularButton({
  handleClick,
  icon: Icon
}: CircularButtonProps) {
  return (
    <div
      className="w-[30px] h-[30px] lg:w-[36px] lg:h-[36px] bg-[#1B1B1B] sm:hover:bg-dark-blue/[.20] border border-light-blue/50 rounded-full hover:drop-shadow-light cursor-pointer transition-all duration-200 flex justify-center items-center"
      onClick={handleClick}
    >
      <Icon />
    </div>
  )
}
