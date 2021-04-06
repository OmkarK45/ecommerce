import Button from "./../ui/Button/Button"
import { useCart } from "../../context/cartContext"
export default function Checkout() {
  const { state: cart } = useCart()
  console.log(cart.cart)
  function getPrice() {
    const cartArr = cart.cart
    const price = cartArr.reduce(
      (prev, current) =>
        Math.round(((prev + current.price * current.quantity) * 100) / 100),
      0
    )
    return price.toLocaleString("en-IN")
  }
  return (
    <div className="lg:sticky top-16 w-full md:w-1/2 lg:w-1/3 bg-white border border-gray-300 overflow-hidden rounded-md">
      <ul className="divide-y divide-gray-300" data-todo-x-max="1">
        <div className="px-6 py-4">
          <h1 className="text-base font-semibold uppercase">
            Price Details ({cart.cart.length} Items)
          </h1>
          <li className="py-4 space-y-3">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Total MRP
                </p>
              </div>
              <div>
                <p className="font-bold">₹ {getPrice()}</p>
              </div>
            </div>
            {cart && cart.cart.length > 0
              ? cart.cart.map((item) => {
                  return (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          <span className="font-bold">{item.quantity}</span> x{" "}
                          {item.title}
                        </p>
                      </div>
                      <div>
                        <p className="font-bold">
                          ₹{" "}
                          {Math.round(
                            item.price * item.quantity
                          ).toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  )
                })
              : "null"}
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Delivery Charges
                </p>
              </div>
              <div>
                <p className="font-bold">FREE</p>
              </div>
            </div>
            <div className="border-t-2  pt-4 flex items-center space-x-4">
              <div className="flex-1  min-w-0">
                <p className="text-base  text-gray-900 truncate">
                  Total Amount
                </p>
              </div>
              <div>
                <p className="font-bold text-lg">
                  ₹ {getPrice().toLocaleString("en-IN")}/-
                </p>
              </div>
            </div>
            <Button variant="primary" fullWidth>
              Checkout
            </Button>
            <p className="text-gray-500 text-sm">Total price incl GST*</p>
          </li>
        </div>
      </ul>
    </div>
  )
}
