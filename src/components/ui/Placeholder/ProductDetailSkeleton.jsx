export default function ProductDetailSkeleton() {
  return (
    <div className="container bg-white mx-auto px-4 sm:px-6 lg:px-8 mb-10 py-5 mt-2">
      <div className="flex flex-col md:flex-row animate-pulse">
        <div className="flex-1">
          <div className="w-4/5 h-full rounded bg-gray-200"></div>
        </div>
        <div className="flex flex-1 flex-col justify-center space-y-3">
          <div className="space-y-3">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className=" bg-gray-200 rounded h-28"></div>
          </div>
          <div className="flex flex-col space-x-2 md:flex-row md:justify-between">
            <div className="h-8 bg-gray-200 rounded w-full"></div>
            <div className="h-8 bg-gray-200 rounded w-full"></div>
          </div>
          <div className="flex flex-col md:space-x-2 md:flex-row lg:flex-row justify-center"></div>
        </div>
      </div>
    </div>
  )
}
