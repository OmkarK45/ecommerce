import CartItem from "components/Cart/CartItem"
import CartItemWrapper from "components/Cart/CartItemWrapper"
import Checkout from "components/Cart/Checkout"
import EmptyCart from "components/ui/Placeholder/EmptyCart"
import { useCart } from "../context/cartContext"
export default function Cart() {
  // eslint-disable-next-line no-unused-vars
  const { state: cart, dispatch: cartDispatch } = useCart()
  console.log(cart.cart)
  return (
    <div>
      {JSON.stringify(cart)}
      <div className="flex my-3 ">
        <h1 className="font-bold text-2xl text-center md:text-left">
          Your Cart
        </h1>
      </div>
      {cart && cart.cart.length > 0 ? (
        <div className="flex flex-col md:space-x-3 space-y-3 md:space-y-0 space-x-0 md:flex-row md:items-start">
          <CartItemWrapper>
            <>
              <CartItem />
              <CartItem />
              <CartItem />
            </>
          </CartItemWrapper>
          <Checkout />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  )
}
