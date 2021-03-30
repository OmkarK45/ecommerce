/* eslint-disable react/jsx-no-bind */
import Button from "components/ui/Button/Button"
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi"
import toast from "react-hot-toast"
import { useCart } from "../../context/cartContext"
import { handleAddToCart } from "./../../context/actions/cartActions"

export default function ProductCard({ product }) {
  const { dispatch: cartDispatch } = useCart()
  const notify = (message) => toast.success(message)
  function addToCart(product) {
    console.log(product.id)
    cartDispatch(handleAddToCart(product))
    notify("Product Added to Cart")
  }
  return (
    <div className="flex flex-col justify-between shadow rounded overflow-hidden w-full sm:w-48 md:w-56 bg-white  pb-4 justify-self-start">
      <img
        src={product.image}
        className="h-36 w-full object-contain block"
        alt="Product name goes here"
      />
      <div className="space-y-2 mt-2 px-4 flex-grow">
        <p className="text-base md:text-base font-semibold truncate">
          {product.title}
        </p>
        <p className="text-gray-500 text-sm">
          Engineered to perfection and crafted with care
        </p>
        <div className="flex items-center space-x-2">
          <p className="text-lg md:text-xl font-bold">₹ 13,999</p>
          <p className="text-gray-500 line-through text-sm">₹ 19,999</p>
        </div>
      </div>
      <div className="flex flex-col  space-y-2 space-y-2 mt-2 px-4">
        <Button variant="primary" size="sm">
          <HiOutlineShoppingBag className="mr-2 h-4 w-4" /> Buy Now
        </Button>
        <Button onClick={() => addToCart(product)} size="sm">
          <HiOutlineShoppingCart className="mr-2 h-4 w-4" />
          Add To Cart
        </Button>
      </div>
    </div>
  )
}
