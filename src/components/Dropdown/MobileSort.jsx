import { useState } from "react"
import { HiOutlineFilter } from "react-icons/hi"
import { BiSort } from "react-icons/bi"
import { List, ListItem } from "./../List/List"
import { useShop } from "../../context/shopContext"
import { getSortDispatch } from "../../common/helpers"
export function Overlay({ children, handleOverlayClose }) {
  return (
    <div className="absolute px-6  z-20 bottom-14 inset-x-0  bg-gray-100">
      <div className="absolute right-12">
        <button onClick={handleOverlayClose}>X</button>
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
      <div className="py-4 z-20 border border-red-800 grid place-items-center grid-cols-2 col-span-2 sm:col-span-full md:hidden bg-white sticky inset-x-0 bottom-0">
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
            className="flex uppercase items-center"
            onClick={() => {
              if (filterOverlay) {
                setFilterOverlay(false)
              }
              setSortOverlay(!sortOverlay)
            }}
          >
            <BiSort className="w-5 h-5 mr-2" /> Sort by
          </button>
        </div>
        <div>
          <button
            className="flex uppercase items-center"
            onClick={() => {
              if (sortOverlay) {
                setSortOverlay(false)
              }
              setFilterOverlay(!filterOverlay)
            }}
          >
            <HiOutlineFilter className="w-5 h-5 mr-2" /> Filter
          </button>
        </div>
      </div>
    </>
  )
}
