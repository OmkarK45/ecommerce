import { useState } from "react"
import clsx from "clsx"
import { HiOutlineX, HiMenu } from "react-icons/hi"
import { RiShoppingBasketFill } from "react-icons/ri"
import Searchbar from "components/ui/Searchbar"
export default function Header() {
  const [open, setOpen] = useState(false)
  function handleMenu() {
    setOpen(!open)
  }
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
          <div className="relative h-16 flex justify-between">
            <div className="relative z-10 px-2 flex lg:px-0">
              <div className="flex-shrink-0 flex items-center">
                <RiShoppingBasketFill className="h-8 w-auto text-yellow-700" />
              </div>
            </div>
            <Searchbar />
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
          <nav className="hidden lg:py-2 lg:flex lg:space-x-8">
            {/* Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" */}
            <a
              href="/"
              className="bg-gray-100 text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
            >
              Dashboard
            </a>

            <a
              href="/"
              className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
            >
              Team
            </a>
          </nav>
        </div>
        <nav className={clsx(!open && "hidden lg:hidden", open && "block")}>
          <div className="pt-2 pb-3 px-2 space-y-1">
            {/* Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" */}
            <a
              href="/"
              className="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
            >
              Dashboard
            </a>

            <a
              href="/"
              className="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
            >
              Team
            </a>
          </div>
        </nav>
      </header>
    </>
  )
}
