export default function TechnologyBox({ text }: { text: string }) {
  return (
    <div className="px-[12px] sm:px-[15px] py-[4px] sm:py-[6px] rounded-full bg-[#1B1B1B] border border-[#2960F8]/[0.5]">
      <p className="text-[12px] sm:text-[14px] uppercase">{text}</p>
    </div>
  )
}
