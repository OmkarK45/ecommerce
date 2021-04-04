export default function ProductCardSkeleton() {
  return (
    <>
      <div className="flex flex-col justify-between  md:shadow border border-gray-200 md:border-none md:rounded overflow-hidden w-full sm:w-48 md:w-60 bg-white relative pb-4 justify-self-start animate-pulse">
        <div className="h-36 w-full object-cover block bg-gray-300"></div>
        <div className="space-y-2 mt-2 px-4">
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="flex items-center space-x-2">
            <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="w-full bg-gray-300 rounded px-2.5 py-3"></div>
            <div className="w-full bg-gray-300 rounded px-2.5 py-3"></div>
          </div>
        </div>
      </div>
    </>
  )
}
