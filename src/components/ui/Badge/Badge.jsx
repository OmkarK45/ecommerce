import { HiStar } from "react-icons/hi"

export default function Badge({ rating, label }) {
  return (
    <div>
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-green-800">
        <HiStar className="text-lg" /> {rating}
        {label}
      </span>
    </div>
  )
}
