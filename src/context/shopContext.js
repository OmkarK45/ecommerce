import { shopReducer, initialState } from "./reducers/shopReducer"

import { createContext, useReducer, useContext } from "react"
const ShopContext = createContext()

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
