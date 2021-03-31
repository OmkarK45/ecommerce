import Sort from "components/Dropdown/Sort"

export default function SectionHeader({ title }) {
  return (
    <div className="md:flex md:items-center md:justify-between mb-2 md:mb-4">
      <div className="flex-1 min-w-0">
        <h2 className="text-xl font-bold leading-7 tracking-tight text-gray-900 sm:text-2xl sm:truncate">
          {title}
        </h2>
      </div>
      <div className="mt-4 flex space-x-2 md:mt-0 md:ml-4">
        <Sort />
      </div>
    </div>
  )
}
