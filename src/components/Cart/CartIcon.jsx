import { useCart } from "../../context/cartContext"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { Link } from "react-router-dom"

export default function CartIcon() {
  const { state: cart } = useCart()
  return (
    <div className="relative">
      <Link to="/cart">
        <HiOutlineShoppingCart className="w-6 h-6 text-gray-600 " />
        {cart && (
          <span className="absolute -top-2 -right-2  text-xs bg-red-600 flex items-center justify-center h-5 w-5 rounded-full text-white">
            {cart.cart.length}
          </span>
        )}
      </Link>
    </div>
  )
}
