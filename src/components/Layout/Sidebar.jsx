import { sidebarLinks } from "../../common/defines"
import VerticalNav from "./VerticalNav"
import { NavLink } from "react-router-dom"
import { HiOutlineShoppingCart, HiOutlineHeart } from "react-icons/hi"
import { useCart } from "context/cartContext"

export default function Sidebar() {
  const { state: cart } = useCart()
  return (
    <div
      className="h-screen z-40 absolute  flex bg-gray-100"
      style={{ minHeight: "640px" }}
    >
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow bg-white overflow-y-auto">
          <div className="flex-grow flex flex-col">
            <div className="px-2">
              <VerticalNav links={sidebarLinks} />
              {/* TBD Sort and Filter */}
              <nav className="space-y-1 mt-2">
                <NavLink
                  to="/cart"
                  activeClassName="bg-gray-200 text-gray-900"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <HiOutlineShoppingCart className="text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
                  <span className="truncate">Cart</span>
                  <span className="bg-gray-50 ml-auto inline-block py-0.5 px-3 text-xs rounded-full">
                    {cart.cart.length}
                  </span>
                </NavLink>
                <NavLink
                  to="/wishlist"
                  activeClassName="bg-gray-200 text-gray-900"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <HiOutlineHeart className="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
                  <span className="truncate">Wishlist</span>
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
