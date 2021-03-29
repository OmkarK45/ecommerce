export default function ProductCard() {
  return (
    <div className="shadow rounded overflow-hidden w-full sm:w-48 md:w-52 bg-white mt-4 pb-4">
      <img
        src="https://cdn.shopclues.com/images1/thumbnails/105192/640/1/149110017-105192149-1588784160.jpg"
        className="h-36 w-full object-cover block"
        alt="Product name goes here"
      />
      <div className="space-y-2 mt-2 px-4">
        <p className="text-xl font-semibold">Nike Air Jordan</p>
        <p className="text-gray-500 text-sm">Engineered to prefection</p>
        <div className="flex items-center space-x-2">
          <p className="text-lg font-bold">Rs.13,999</p>
          <p className="text-gray-500 line-through text-sm">Rs.19,999</p>
        </div>
        <div className="flex flex-col space-y-2">
          <button
            type="button"
            className="inline-flex justify-center items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Buy Now
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
