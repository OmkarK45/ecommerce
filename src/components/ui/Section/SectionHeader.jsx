import Dropdown from "../Dropdown/Dropdown"

export default function SectionHeader({ title }) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 tracking-tight text-gray-900 sm:text-3xl sm:truncate">
          {title}
        </h2>
      </div>
      <div className="mt-4 flex space-x-2 md:mt-0 md:ml-4">
        <Dropdown label="Sort By" />
        <Dropdown label="Filter" />
      </div>
    </div>
  )
}
