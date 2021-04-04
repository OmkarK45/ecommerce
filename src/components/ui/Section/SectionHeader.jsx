export default function SectionHeader({ title }) {
  return (
    <div className="md:flex md:items-center md:justify-between mb-2 md:mb-4">
      <div className="flex-1 min-w-0">
        <h2 className="font-bold text-2xl text-center md:text-left leading-7 tracking-tight text-gray-900 sm:truncate">
          {title}
        </h2>
      </div>
    </div>
  )
}
