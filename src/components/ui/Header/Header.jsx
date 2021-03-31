/* eslint-disable no-unused-vars */
import clsx from "clsx"
import CartIcon from "components/Cart/CartIcon"
import Searchbar from "components/ui/Searchbar"
import { useState } from "react"
import { HiMenu, HiOutlineX } from "react-icons/hi"
import { Link, NavLink } from "react-router-dom"
import { categories } from "../../../common/defines"
import Logo from "../Logo"
import WishlistIcon from "../../Wishlist/WishlistIcon"
import Sidebar from "components/Layout/Sidebar"

export default function Header() {
  const [open, setOpen] = useState(false)
  function handleMenu() {
    setOpen(!open)
  }
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
          <div className="relative h-16 flex justify-between">
            <div className="relative z-10 px-2 flex lg:px-0">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <Logo />
                </Link>
              </div>
            </div>
            <Searchbar />
            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center lg:space-x-10">
              <WishlistIcon />
              <CartIcon />
            </div>
            <div className="relative z-10 flex items-center lg:hidden">
              <button
                onClick={handleMenu}
                className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none "
              >
                {open ? (
                  <HiOutlineX className="block h-6 w-6" />
                ) : (
                  <HiMenu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        <nav className={clsx(!open && "hidden lg:hidden", open && "block")}>
          <Sidebar />
        </nav>
      </header>
    </>
  )
}
