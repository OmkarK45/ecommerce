import CartItemWrapper from "components/Cart/CartItemWrapper"
import { handleRemoveFromWishList } from "../context/actions/wishListActions"

import Empty from "../components/ui/Placeholder/Empty"
import WishlistItem from "../components/Wishlist/WishlistItem"
import { useCart } from "../context/cartContext"
import { toast } from "react-hot-toast"
import { handleAddToCart } from "../context/actions/cartActions"

export default function Wishlist() {
  const { state: cart, dispatch: cartDispatch } = useCart()
  const notify = (message) => toast.success(message)
  function removeFromWishlist(product) {
    cartDispatch(handleRemoveFromWishList(product))
    notify("Item has been removed from wishlist!")
  }
  function addToCart(product) {
    cartDispatch(handleAddToCart(product))
    cartDispatch(handleRemoveFromWishList(product))
    notify("Product Added to Cart")
  }
  return (
    <>
      {JSON.stringify(cart)}
      <div className="flex my-3 ">
        <h1 className="font-bold text-2xl text-center md:text-left">
          Your Wishlist
        </h1>
      </div>
      {cart && cart.wishList.length > 0 ? (
        <div className="flex flex-col md:space-x-3 space-y-3 md:space-y-0 space-x-0 md:flex-row md:items-start">
          <CartItemWrapper>
            {cart.wishList.map((item) => {
              return (
                <WishlistItem
                  key={item.id}
                  product={item}
                  addToCart={addToCart}
                  removeFromWishlist={removeFromWishlist}
                />
              )
            })}
          </CartItemWrapper>
        </div>
      ) : (
        <Empty label="Your wishlist is empty" reference="wishlist" />
      )}
    </>
  )
}
