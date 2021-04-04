/* eslint-disable react/jsx-no-bind */
import Button from "components/ui/Button/Button"
import toast from "react-hot-toast"
import {
  HiHeart,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiStar,
} from "react-icons/hi"
import { Link } from "react-router-dom"

import { getSlug } from "../../common/helpers"
import { useCart } from "../../context/cartContext"
import { handleAddToCart } from "./../../context/actions/cartActions"
import {
  handleAddToWishList,
  handleRemoveFromWishList,
} from "./../../context/actions/wishListActions"
import { useState } from "react"
import Skeleton from "components/ui/Placeholder/Skeleton"
import clsx from "clsx"

export default function ProductCard({ product }) {
  const { state: cart, dispatch: cartDispatch } = useCart()
  const notify = (message) => toast.success(message)

  const [image, setImageURL] = useState("")

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

  const handleImageLoad = () => {
    setImageURL("loaded")
  }

  return (
    <div
      className={clsx(
        "flex flex-col justify-between  md:shadow border border-gray-200 md:border-none md:rounded overflow-hidden w-full sm:w-48 md:w-60 bg-white relative pb-4 justify-self-start"
      )}
    >
      {!product.inStock && (
        <div className="absolute cursor-not-allowed bg-white w-full h-full z-20 sm:w-48 md:w-60  top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 opacity-50">
          <div className="flex h-full items-center justify-center">
            <p className="text-xl z-20 text-center ">Out of Stock</p>
          </div>
        </div>
      )}

      <button
        className="absolute right-4 rounded-full top-3 bg-red-100 p-1  text-red-500 text-lg transform  focus:outline-none hover:scale-150 transition z-10"
        onClick={() => addToWishlist(product)}
      >
        {wishListed.length === 0 ? <HiOutlineHeart /> : <HiHeart />}
      </button>

      <Link to={`/products/${product.id}/${getSlug(product.title)}`}>
        <div className=" relative">
          {!image && product.image && <Skeleton height="32" />}
          <img
            src={product.image}
            className={clsx(
              "h-0 mb-5 w-full object-cover block",
              image && " h-36"
            )}
            alt="Product name goes here"
            onLoad={handleImageLoad}
          />

          <div className="flex items-center absolute z-10 -bottom-2 right-4 bg-green-600 px-1 text-white text-sm rounded">
            <HiStar /> {product.ratings}
          </div>
        </div>

        <div className="space-y-2 mt-2 px-2 md:px-4 flex-grow ">
          <p className="text-base md:text-base font-semibold truncate">
            {product.title}
          </p>
          <p className="text-gray-500 text-xs md:text-sm">
            {/* {product.productDescription.split(/,|\./)[0]} */}
            Lorem ipsum dolor sit amet.
          </p>
          <div className="flex items-center space-x-1">
            <p className="text-md md:text-xl font-bold">
              ₹ {parseInt(product.price).toLocaleString("en-IN")}
            </p>
            <p className="text-gray-500 line-through text-xs">₹ 19,999</p>
          </div>
        </div>
      </Link>
      <div className="flex flex-col  space-y-2 space-y-2 mt-2 px-2 md:px-4">
        <Button
          variant="primary"
          className="opacity-90"
          onClick={() => addToCart(product)}
          size="sm"
        >
          <HiOutlineShoppingCart className="mr-2 h-4 w-4" />
          Add To Cart
        </Button>
      </div>
    </div>
  )
}
