import { shopReducer } from "./reducers/shopReducer"

import { createContext, useReducer, useContext } from "react"
const ShopContext = createContext()
const initialState = {
  products: {
    loading: true,
    data: [],
    error: false,
    sort: null,
  },
}
export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState)
  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  )
}
export function useShop() {
  return useContext(ShopContext)
}
