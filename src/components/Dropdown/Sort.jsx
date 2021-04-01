import { handleSort } from "../../context/actions/shopActions"
import { useShop } from "../../context/shopContext"

export default function Sort() {
  const { dispatch: shopDispatch } = useShop()
  function sortSelectChange(e) {
    switch (e.target.value) {
      case "az":
        return shopDispatch(handleSort("az"))
      case "za":
        return shopDispatch(handleSort("za"))
      case "lowHigh":
        return shopDispatch(handleSort("lowHigh"))
      case "highLow":
        return shopDispatch(handleSort("highLow"))
      default:
        //   This could be better
        return {}
    }
  }
  return (
    <div className="flex items-center space-x-1">
      <label
        htmlFor="sort"
        className="block mr-2 whitespace-nowrap text-sm font-medium text-gray-700"
      >
        Sort By
      </label>
      <select
        onChange={sortSelectChange}
        name="sort"
        id="sort"
        className="block shadow-sm w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md"
      >
        <option value="az">A to Z</option>
        <option value="za">Z to A</option>
        <option value="lowHigh">Price - Low to High</option>
        <option value="highLow">Price - High to Low</option>
      </select>
    </div>
  )
}
