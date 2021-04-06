import { Link } from "react-router-dom"
import Button from "../Button/Button"
export default function Empty({ label, reference }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
          <h1 className="text-xl font-bold text-center">{label}</h1>
        </div>
        <div className="px-4 py-1 sm:p-6 flex flex-col space-y-3 items-center justify-center">
          <p className="text-gray-500">
            There are no items in your {reference}.
          </p>
          <Link to="/store">
            <Button variant="primary">Go Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
