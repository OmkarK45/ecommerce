/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import { Button } from "components/ui"

export default function CartItem({
  product,
  removeFromCart,
  handleIncrement,
  handleDecrement,
}) {
  const { title, price, description, image } = product

  return (
    <li>
      <div className="flex items-start space-x-6 px-2 md:px-3 py-4">
        <img src={image} className="w-20 h-20 rounded" alt="" />
        <div className="flex flex-col space-y-2">
          <h2 className="text-base font-semibold">{title}</h2>
          <p className="text-gray-500 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            ratione!
          </p>
          <p className="text-lg font-bold">Rs. {price}</p>
          <div>
            <Button onClick={() => handleIncrement(product)} size="sm">
              +
            </Button>
            <input
              type="text"
              value={product.quantity}
              readOnly
              className="w-10 text-center"
            />
            <Button onClick={() => handleDecrement(product)}>-</Button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6 space-x-2">
        <Button
          variant="danger"
          onClick={() => removeFromCart(product)}
          size="sm"
        >
          <span className="text-white">Remove</span>
        </Button>
        <Button>Move to wishlist</Button>
      </div>
    </li>
  )
}
