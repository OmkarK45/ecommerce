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
        <div className="absolute z-20 w-full h-full bg-white opacity-50 cursor-not-allowed sm:w-48 md:w-60">
          <div className="flex items-center justify-center h-1/2">
            <p className="z-20 text-xl text-center ">Out of Stock</p>
          </div>
        </div>
      )}

      <button
        className="absolute z-10 p-1 text-lg text-red-500 transition transform bg-red-100 rounded-full right-4 top-3 focus:outline-none hover:scale-150"
        onClick={() => addToWishlist(product)}
      >
        {wishListed.length === 0 ? <HiOutlineHeart /> : <HiHeart />}
      </button>

      <Link to={`/products/${product.id}/${getSlug(product.title)}`}>
        <div className="relative ">
          {!image && product.image && <Skeleton height="h-32" />}

          <img
            src={product.image.slice(0, 4).concat("s") + product.image.slice(4)}
            className={clsx(
              "h-0 mb-5 w-full object-cover block",
              image && " h-36"
            )}
            alt="Product name goes here"
            onLoad={handleImageLoad}
          />

          <div className="absolute z-10 flex items-center px-1 text-sm text-white bg-green-600 rounded -bottom-2 right-4">
            <HiStar /> {product.ratings}
          </div>
        </div>

        <div className="flex-grow px-2 mt-2 space-y-2 md:px-4 ">
          <p className="text-base font-semibold truncate md:text-base">
            {product.title}
          </p>
          <p className="text-xs text-gray-500 truncate md:text-sm">
            {product.productDescription.split(/,|\./)[0]}
          </p>
          <div className="flex items-center space-x-1">
            <p className="font-bold text-md md:text-xl">
              ₹ {parseInt(product.price).toLocaleString("en-IN")}
            </p>
            <p className="text-xs text-gray-500 line-through">₹ 19,999</p>
          </div>
        </div>
      </Link>
      <div className="flex flex-col px-2 mt-2 space-y-2 md:px-4">
        <Button
          variant="primary"
          className="opacity-90"
          onClick={() => addToCart(product)}
          size="sm"
        >
          <HiOutlineShoppingCart className="w-4 h-4 mr-2" />
          Add To Cart
        </Button>
      </div>
    </div>
  )
}
