export default function CartItemWrapper({ children }) {
  return (
    <div className="flex-1 bg-white shadow overflow-hidden rounded-md md:w-1/2">
      <ul className="divide-y divide-gray-200">{children}</ul>
    </div>
  )
}
