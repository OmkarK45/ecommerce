import { useShop } from "../../context/shopContext"
import { useState } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import { handleSearch } from "./../../context/actions/shopActions"
import { useHistory, useLocation } from "react-router"

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const { dispatch: shopDispatch } = useShop()
  const location = useLocation()
  const history = useHistory()

  function handleInputChange(e) {
    setSearchQuery(e.target.value)
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (location.pathname !== "/store") {
        history.push("/store")
      }
      shopDispatch(handleSearch(searchQuery))
    }
  }
  return (
    <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
      <div className="min-w-0 flex justify-center flex-1 md:px-8 lg:px-0 xl:col-span-6">
        <div className="flex w-full sm:w-1/2 md:w-3/4  items-center px-1 md:px-6 pb-4  md:py-4 md:max-w-3xl md:mx-auto lg:max-w-lg lg:mx-0 xl:px-0">
          <div className="w-full">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <HiOutlineSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:bg-white focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                placeholder="Explore Doge Mart"
                type="search"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                autoComplete="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
