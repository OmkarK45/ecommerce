import { useState } from "react"
import { HiOutlineFilter } from "react-icons/hi"
import { FaRegTimesCircle } from "react-icons/fa"
import { BiSort } from "react-icons/bi"
import { List, ListItem } from "./../List/List"
import { useShop } from "../../context/shopContext"
import { getSortDispatch } from "../../common/helpers"
export function Overlay({ children, handleOverlayClose }) {
  return (
    <div className="absolute px-6  z-20 bottom-14 inset-x-0  bg-gray-100">
      <div className="absolute right-12">
        <button onClick={handleOverlayClose}>
          <FaRegTimesCircle className="w-5 h-5 mt-3" />
        </button>
      </div>
      {children}
    </div>
  )
}

export default function MobileSort() {
  const [sortOverlay, setSortOverlay] = useState(false)
  const [filterOverlay, setFilterOverlay] = useState(false)
  const { dispatch: shopDispatch } = useShop()
  function handleOverlayClose() {
    console.log({ sortOverlay, filterOverlay })
    setSortOverlay(false)
    setFilterOverlay(false)
  }
  return (
    <>
      <div className=" z-20 mx-auto w-full grid grid-cols-2 col-span-2 sm:col-span-full md:hidden bg-white sticky inset-x-0 bottom-0">
        {sortOverlay ? (
          <Overlay handleOverlayClose={handleOverlayClose}>
            <List>
              <ListItem>
                <button
                  onClick={() => shopDispatch(getSortDispatch("popular"))}
                >
                  Popularity
                </button>
              </ListItem>
              <ListItem>
                <button onClick={() => shopDispatch(getSortDispatch("latest"))}>
                  Latest
                </button>
              </ListItem>
              <ListItem>
                <button
                  onClick={() => shopDispatch(getSortDispatch("discount"))}
                >
                  Discount
                </button>
              </ListItem>
              <ListItem>
                <button
                  onClick={() => shopDispatch(getSortDispatch("highLow"))}
                >
                  Price - High to Low
                </button>
              </ListItem>
              <ListItem>
                <button
                  onClick={() => shopDispatch(getSortDispatch("lowHigh"))}
                >
                  Price - Low to High
                </button>
              </ListItem>
            </List>
          </Overlay>
        ) : null}
        {filterOverlay ? (
          <Overlay handleOverlayClose={handleOverlayClose}>
            <List>
              <ListItem>Include out of stock</ListItem>
            </List>
          </Overlay>
        ) : null}
        <div>
          <button
            className="flex uppercase items-center h-full w-full py-4"
            onClick={() => {
              if (filterOverlay) {
                setFilterOverlay(false)
              }
              setSortOverlay(!sortOverlay)
            }}
          >
            <div className="flex items-center mx-auto">
              <BiSort className="w-5 h-5 mr-2" /> Sort by
            </div>
          </button>
        </div>
        <div>
          <button
            className="flex uppercase items-center h-full w-full text-center"
            onClick={() => {
              if (sortOverlay) {
                setSortOverlay(false)
              }
              setFilterOverlay(!filterOverlay)
            }}
          >
            <div className="flex items-center mx-auto">
              <HiOutlineFilter className="w-5 h-5 mr-2" /> Filter
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
