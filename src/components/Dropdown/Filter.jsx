import { handleFilter } from "context/actions/shopActions"
import { useShop } from "context/shopContext"

export default function Filter() {
  const { state: shop, dispatch: shopDispatch } = useShop()
  function handleChange(filter) {
    switch (filter) {
      case "outOfStock":
        return shopDispatch(handleFilter(filter))
      case "expressDelivery":
        return shopDispatch(handleFilter(filter))
      default:
        return {}
    }
  }
  return (
    <div className="flex flex-col justify-center space-y-3 pb-3">
      <div className="space-x-2">
        <input
          type="checkbox"
          id="outOfStock"
          value="outOfStock"
          onChange={() => handleChange("outOfStock")}
          checked={shop.filters.outOfStock}
        />
        <label htmlFor="outOfStock">Include out of stock</label>
      </div>
      <div className="space-x-2">
        <input
          type="checkbox"
          id="expressDelivery"
          value="expressDelivery"
          onChange={() => handleChange("expressDelivery")}
          checked={shop.filters.expressDelivery}
        />
        <label htmlFor="outOfStock">Express Delivery</label>
      </div>
    </div>
  )
}
