import CartItem from "components/Cart/CartItem"
import CartItemWrapper from "components/Cart/CartItemWrapper"
import Checkout from "components/Cart/Checkout"
import SEO from "components/SEO"
import Empty from "components/ui/Placeholder/Empty"
import { toast } from "react-hot-toast"

import {
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  handleRemoveFromCart,
} from "../context/actions/cartActions"
import { handleAddToWishList } from "../context/actions/wishListActions"
import { useCart } from "../context/cartContext"

export default function Cart() {
  const notify = (message) => toast.success(message)

  // eslint-disable-next-line no-unused-vars
  const { state: cart, dispatch: cartDispatch } = useCart()
  function removeFromCart(product) {
    cartDispatch(handleRemoveFromCart(product))
    notify("Item removed from cart!")
  }

  function handleIncrement(product) {
    cartDispatch(handleIncreaseQuantity(product))
  }

  function handleDecrement(product) {
    console.log(product)
    if (product.quantity === 1) {
      cartDispatch(handleRemoveFromCart(product))
      notify("Item removed from cart")
    } else {
      cartDispatch(handleDecreaseQuantity(product))
    }
  }

  function addToWishlist(product) {
    cartDispatch(handleAddToWishList(product))
  }

  console.log(cart.cart)
  return (
    <>
      <SEO title="Your Cart | Doge Mart" />
      <div>
        <div className="flex my-3 ">
          <h1 className="font-bold text-2xl text-center md:text-left">
            Your Cart
          </h1>
        </div>
        {cart && cart.cart.length > 0 ? (
          <div className="flex flex-col md:space-x-3 space-y-3 md:space-y-0 space-x-0 md:flex-row md:items-start">
            <CartItemWrapper>
              <>
                {cart.cart.map((item) => {
                  return (
                    <CartItem
                      removeFromCart={removeFromCart}
                      handleIncrement={handleIncrement}
                      handleDecrement={handleDecrement}
                      addToWishlist={addToWishlist}
                      key={item.id}
                      product={item}
                    />
                  )
                })}
              </>
            </CartItemWrapper>
            <Checkout />
          </div>
        ) : (
          <Empty label="Your Cart is empty" reference="cart" />
        )}
      </div>
    </>
  )
}
