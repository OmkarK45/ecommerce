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
    <div className="flex space-x-1">
      <p>Sort By</p>
      <select onChange={sortSelectChange} name="sort" id="">
        <option value="az">A to Z</option>
        <option value="za">Z to A</option>
        <option value="lowHigh">Price - Low to High</option>
        <option value="highLow">Price - High to Low</option>
      </select>
    </div>
  )
}
