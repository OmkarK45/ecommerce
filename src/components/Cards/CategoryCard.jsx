import { Button } from "components/ui"
import { Link } from "react-router-dom"

export default function CategoryCard({ img, link, label }) {
  return (
    <div className="max-w-2xl mx-auto row-span-1">
      <div className="bg-white overflow-hidden shadow rounded">
        <div>
          <img
            src={img}
            className="w-[250px] h-[150px] mx-auto object-contain"
            alt={label}
          />
        </div>
        <div className="border-t flex text-center flex-col md:flex-row md:justify-between md:text-left md:items-center border-gray-200 px-4 py-4 sm:px-3">
          <p>{label}</p>

          <Link to={link}>
            <Button className="w-full mt-2 md:mt-0 md:w-auto">Shop Now</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
