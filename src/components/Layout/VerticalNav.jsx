import { Link } from "react-router-dom"

export default function VerticalNav({ heading, links }) {
  return (
    <div className="md:sticky top-20 pr-3">
      <h3 className="text-md font-semibold text-gray-500 uppercase tracking-wider">
        {heading}
      </h3>
      <div className="mt-1 space-y-1">
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
      </div>
    </div>
  )
}
