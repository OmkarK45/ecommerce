import { handleFilter } from "context/actions/shopActions"
import { useShop } from "context/shopContext"

export default function Filter() {
  const { state: shop, dispatch: shopDispatch } = useShop()
  return (
    <div className="flex flex-col justify-center space-y-3 pb-3">
      <div className="space-x-2">
        <input
          type="checkbox"
          id="outOfStock"
          value="outOfStock"
          onChange={() => shopDispatch(handleFilter("outOfStock"))}
          checked={shop.filters.outOfStock}
        />
        <label
          htmlFor="outOfStock"
          className="inline-flex mr-2 whitespace-nowrap text-sm font-medium text-gray-700"
        >
          Include out of stock
        </label>
      </div>
      <div className="space-x-2">
        <input
          type="checkbox"
          id="expressDelivery"
          value="expressDelivery"
          onChange={() => shopDispatch(handleFilter("expressDelivery"))}
          checked={shop.filters.expressDelivery}
        />
        <label
          htmlFor="outOfStock"
          className="inline-flex mr-2 whitespace-nowrap text-sm font-medium text-gray-700"
        >
          Express Delivery
        </label>
      </div>
    </div>
  )
}
