import { useCart } from "../../context/cartContext"
import { HiOutlineHeart } from "react-icons/hi"
import { Link } from "react-router-dom"

export default function WishlistIcon() {
  const { state: cart } = useCart()
  return (
    <div className="border border-black relative">
      <Link to="/wishlist">
        <HiOutlineHeart className="w-6 h-6 text-gray-600 " />
        {cart && (
          <span className="absolute -top-2 -right-2 text-xs bg-yellow-600 flex items-center justify-center h-5 w-5 rounded-full text-white ">
            {cart.wishList.length}
          </span>
        )}
      </Link>
    </div>
  )
}
