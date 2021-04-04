import Filter from "components/Dropdown/Filter"
import { Sort } from "components/Dropdown/Sort"
import { Link } from "react-router-dom"

export default function VerticalNav({ links }) {
  return (
    <div className="hidden  bg-white border border-gray-300 rounded-lg shadow-sm px-5 w-1/5 md:block space-y-3">
      <div className="md:sticky top-20 pr-3">
        <div className="mt-1 space-y-1">
          <p className="uppercase pt-4 text-gray-700 tracking-wider text-sm">
            Departments
          </p>
          {links &&
            links.map((link) => {
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center pr-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  <span className="truncate">{link.label}</span>
                </Link>
              )
            })}
          <hr />
          <p className="uppercase py-2 text-gray-700 tracking-wider text-sm">
            Sort By
          </p>
          <Sort />
          <hr />
          <p className="uppercase py-2 text-gray-700 tracking-wider text-sm">
            Filter
          </p>
          <Filter />
        </div>
      </div>
    </div>
  )
}
