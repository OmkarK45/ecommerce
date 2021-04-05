import { useEffect, useState } from "react"
import { Transition } from "@headlessui/react"
import { Link } from "react-router-dom"
import Logo from "components/ui/Logo"
import Searchbar from "components/ui/Searchbar"
import { WishlistIcon } from "components/Wishlist"
import { CartIcon } from "components/Cart"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    function handleEscape(event) {
      if (!mobileOpen) return

      if (event.key === "Escape") {
        setMobileOpen(false)
      }
    }

    document.addEventListener("keyup", handleEscape)
    return () => document.removeEventListener("keyup", handleEscape)
  }, [mobileOpen])

  return (
    <>
      <div className="flex   shadow border-b border-gray-300 sticky top-0 left-0 z-40  overflow-hidden bg-white">
        <Transition
          show={mobileOpen}
          unmount={false}
          className="fixed inset-0 z-40 flex"
        >
          <Transition.Child
            unmount={false}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {() => (
              <div className="fixed inset-0">
                <div
                  onClick={() => setMobileOpen(false)}
                  className="absolute inset-0 opacity-75 bg-gray-600"
                />
              </div>
            )}
          </Transition.Child>

          <Transition.Child
            unmount={false}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white"
          >
            <div className="absolute top-0 right-0 p-1 -mr-14">
              <Transition.Child
                unmount={false}
                className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
                aria-label="Close sidebar"
                as="button"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  className="w-6 h-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Transition.Child>
            </div>
            <div className="flex items-center flex-shrink-0 px-4"></div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14"></div>
        </Transition>

        <div
          className="flex-1 max-w-7xl mx-auto overflow-auto focus:outline-none"
          tabIndex={0}
        >
          <div className="relative z-10 flex justify-between items-center flex-shrink-0 h-16 px-4 bg-white lg:border-none overflow-hidden">
            <Link className="z-20" to="/store">
              <Logo />
            </Link>
            <div className="hidden md:block ">
              <Searchbar />
            </div>
            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center lg:space-x-10">
              <WishlistIcon />
              <CartIcon />
            </div>
            <button
              className="text-gray-400 focus:outline-none focus:bg-gray-100 focus:text-gray-600 lg:hidden"
              aria-label="Open sidebar"
              onClick={() => setMobileOpen(true)}
            >
              <svg
                className="w-6 h-6 transition duration-150 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>
          <div className="block sm:hidden">
            <Searchbar />
          </div>
        </div>
      </div>
    </>
  )
}
