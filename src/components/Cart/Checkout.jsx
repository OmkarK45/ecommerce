import Button from "./../ui/Button/Button"
export default function Checkout() {
  return (
    <div className="lg:sticky w-full md:w-1/2 lg:w-1/3 bg-white border border-gray-300 overflow-hidden rounded-md">
      <ul className="divide-y divide-gray-300" data-todo-x-max="1">
        <div className="px-6 py-4">
          <h1 className="text-base font-semibold uppercase">
            Price Details (1 item)
          </h1>
          <li className="py-4 space-y-3">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Total MRP
                </p>
              </div>
              <div>
                <p className="font-bold">Rs. 19,999</p>
              </div>
            </div>
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
            <div className="border-t-2 flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Total Amount
                </p>
              </div>
              <div>
                <p className="font-bold">Rs. 19,999</p>
              </div>
            </div>
            <Button variant="primary" fullWidth>
              Checkout
            </Button>
          </li>
        </div>
      </ul>
    </div>
  )
}
