export default function Divider({ label }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex">
        <span className="px-2 bg-white text-sm text-gray-500">{label}</span>
      </div>
    </div>
  )
}
