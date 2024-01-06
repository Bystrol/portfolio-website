export default function ContainerLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-between items-center w-full max-w-[1440px] gap-[20px]">
      {children}
    </div>
  )
}
