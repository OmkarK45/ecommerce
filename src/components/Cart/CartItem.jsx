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
    <li className="px-6 py-4">
      <div className="flex items-start space-x-6">
        <img src={image} className="w-20 h-20 rounded" alt="" />
        <div className="flex flex-col space-y-2">
          <h2 className="text-base font-semibold">{title}</h2>
          <p className="text-gray-500 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            ratione!
          </p>
          <p className="text-lg font-bold">Rs. {price}</p>
          <div className=" flex flex-col justify-between lg:flex-row md:items-center">
            <div className="flex items-start space-x-2">
              <Button
                onClick={() => removeFromCart(product)}
                size="sm"
                variant="danger"
              >
                <p>Remove</p>
              </Button>
              <Button className="bg-red-50" size="sm">
                <p>Wishlist</p>
              </Button>
            </div>
            <div className="flex space-x-2 justify-start md:justify-start flex-row  md:space-y-0">
              <Button onClick={() => handleIncrement(product)} size="sm">
                +
              </Button>
              <input
                type="text"
                value={product.quantity}
                className="w-10 px-2"
              />
              <Button onClick={() => handleDecrement(product)}>-</Button>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
