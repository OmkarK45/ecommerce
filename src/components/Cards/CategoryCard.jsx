export default function CategoryCard({ img, label }) {
  return (
    <div className="max-w-2xl mx-auto row-span-1">
      <div className="bg-white overflow-hidden shadow rounded">
        <div>
          <img
            src={img}
            className="w-full h-[150px] mx-auto object-contain"
            alt={label}
          />
        </div>
        <div className="border-t text-center flex-col md:flex-row  border-gray-200 px-4 py-4 sm:px-3">
          <p>{label}</p>
        </div>
      </div>
    </div>
  )
}
