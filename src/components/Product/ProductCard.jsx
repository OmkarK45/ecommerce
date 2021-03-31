/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import Button from "components/ui/Button/Button"
import {
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiHeart,
  HiOutlineHeart,
} from "react-icons/hi"
import toast from "react-hot-toast"
import { useCart } from "../../context/cartContext"
import { handleAddToCart } from "./../../context/actions/cartActions"
import {
  handleAddToWishList,
  handleRemoveFromWishList,
} from "./../../context/actions/wishListActions"

export default function ProductCard({ product }) {
  const { state: cart, dispatch: cartDispatch } = useCart()
  const notify = (message) => toast.success(message)

  function addToCart(product) {
    cartDispatch(handleAddToCart(product))
    notify("Product Added to Cart")
  }
  const wishListed = cart.wishList.filter((item) => item.id === product.id)

  function addToWishlist(product) {
    if (wishListed.length === 0) {
      cartDispatch(handleAddToWishList(product))
      notify("Item added to wishlist")
    } else {
      cartDispatch(handleRemoveFromWishList(product))
      notify("Item removed from wishlist")
    }
  }

  return (
    <div className="flex flex-col justify-between shadow rounded overflow-hidden w-full sm:w-48 md:w-56 bg-white relative pb-4 justify-self-start">
      <button
        className="absolute right-4 rounded-full top-3 bg-red-100 p-1  text-red-500 text-lg transform  focus:outline-none hover:scale-150 transition"
        onClick={() => addToWishlist(product)}
      >
        {wishListed.length === 0 ? <HiOutlineHeart /> : <HiHeart />}
      </button>
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
        {/* <Button variant="primary" size="sm">
          <HiOutlineShoppingBag className="mr-2 h-4 w-4" /> Wishlist
        </Button> */}
        <Button onClick={() => addToCart(product)} size="sm">
          <HiOutlineShoppingCart className="mr-2 h-4 w-4" />
          Add To Cart
        </Button>
      </div>
    </div>
  )
}
