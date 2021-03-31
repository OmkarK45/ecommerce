import { useCart } from "../../context/cartContext"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { Link } from "react-router-dom"

export default function CartIcon() {
  const { state: cart } = useCart()
  return (
    <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
      <Link to="/cart">
        <HiOutlineShoppingCart className="w-6 h-6 text-gray-600 relative" />
        {cart && cart.cart.length > 0 ? (
          <span className="absolute top-2 text-xs bg-red-600 flex items-center justify-center h-5 w-5 rounded-full text-white left-3">
            {cart.cart.length}
          </span>
        ) : null}
      </Link>
    </div>
  )
}
