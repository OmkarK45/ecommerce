export default function Grid({ children }) {
  return (
    <div className="grid col-span-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg:grid-flow-row grid-rows-2 lg:gap-3 sm:gap-2 xl:grid-cols-4 md:gap-2 relative">
      {children}
    </div>
  )
}
