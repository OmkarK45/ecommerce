import { Button, Badge } from "components/ui"
import { HiOutlineShoppingCart } from "react-icons/hi"

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
            <Badge rating="4.5" />
          </div>
          <div className="flex flex-col md:space-x-2 md:flex-row lg:flex-row justify-center">
            <Button size="md" variant="primary" fullWidth>
              Buy Now
            </Button>
            <Button size="md" fullWidth>
              <HiOutlineShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
