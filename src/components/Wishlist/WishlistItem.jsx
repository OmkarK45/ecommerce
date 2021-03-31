/* eslint-disable react/jsx-no-bind */
import { Button } from "components/ui"
import { HiOutlineShoppingCart, HiOutlineTrash } from "react-icons/hi"
export default function WishlistItem({
  product,
  removeFromWishlist,
  addToCart,
}) {
  // eslint-disable-next-line no-unused-vars
  const { image, title, price, description } = product
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
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6 flex items-center space-x-2 ">
        <Button
          variant="danger"
          onClick={() => removeFromWishlist(product)}
          size="sm"
        >
          <HiOutlineTrash className="mr-2 h-4 w-4" />
          <span className="text-white">Remove</span>
        </Button>

        <Button onClick={() => addToCart(product)} size="sm">
          <HiOutlineShoppingCart className="mr-2 h-4 w-4" />
          Add To Cart
        </Button>
      </div>
    </li>
  )
}
