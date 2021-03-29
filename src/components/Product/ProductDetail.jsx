import { HiOutlineShoppingCart, HiStar } from "react-icons/hi"

export default function ProductDetail() {
  return (
    <div className="container bg-white mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <img
            src="https://cdn.shopclues.com/images1/thumbnails/105192/640/1/149110017-105192149-1588784160.jpg"
            alt="Product Name goes here"
            className="w-full"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center space-y-3">
          <div className="space-y-3">
            <h1 className="text-xl md:text-2xl font-semibold">
              Nike Air Jordan
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              repellat inventore suscipit ducimus dolor error expedita ab,
              delectus accusamus cum.
            </p>
          </div>
          <div className="flex flex-col space-y-2 md:flex-row md:justify-between ">
            <div className="flex space-x-3">
              <p className="text-2xl font-bold">Rs. 13,999</p>
              <p className="text-gray-500 line-through">Rs. 19,999</p>
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-green-800">
                <HiStar className="text-lg" /> 4.5/5
              </span>
            </div>
          </div>
          <div className="flex flex-col md:space-x-2 md:flex-row lg:flex-row justify-center">
            <button
              type="button"
              className="inline-flex flex-1 w-full justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Buy Now
            </button>
            <button
              type="button"
              className="inline-flex mt-2 sm:mt-0 flex-1 items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <HiOutlineShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
