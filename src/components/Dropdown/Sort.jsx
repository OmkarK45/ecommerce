import { getSortDispatch } from "../../common/helpers"
import { useShop } from "../../context/shopContext"

export function Sort() {
  const { state: shop, dispatch: shopDispatch } = useShop()
  function checkboxChange(e) {
    shopDispatch(getSortDispatch(e.target.value))
  }
  function handleClear() {
    shopDispatch(getSortDispatch("clear"))
  }
  return (
    <div className="flex flex-col justify-center space-y-3">
      {shop.sort ? <button onClick={handleClear}>Clear Sorts</button> : null}

      <div className="space-x-1">
        <input
          checked={shop.sort === "lowHigh"}
          onChange={checkboxChange}
          type="radio"
          value="lowHigh"
          id="sort"
        />
        <label
          htmlFor="sort"
          className="inline-flex mr-2 whitespace-nowrap text-sm font-medium text-gray-700"
        >
          Price - Low to High
        </label>
      </div>
      <div className="space-x-1">
        <input
          checked={shop.sort === "highLow"}
          onChange={checkboxChange}
          type="radio"
          value="highLow"
          id="sort"
        />
        <label
          htmlFor="sort"
          className="inline-flex mr-2 whitespace-nowrap text-sm font-medium text-gray-700"
        >
          Price - High to Low
        </label>
      </div>
    </div>
  )
}
