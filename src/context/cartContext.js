import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "./reducers/cartReducer"

const CartContext = createContext()
const intialState = {}
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, intialState)
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
