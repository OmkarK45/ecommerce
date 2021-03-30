import { CART } from "../actionTypes"

export function cartReducer(state, action) {
  switch (action.type) {
    case CART.ADD_TO_CART: {
      const isProductAdded = state.cart.find(
        (item) => item.id === action.payload.id
      )
      return {
        ...state,
        cart: isProductAdded
          ? state.cart.map((item) => {
              if (item.id === action.payload.id) {
                item.quantity++
              }
              return item
            })
          : [{ ...action.payload, quantity: 1 }, ...state.cart],
      }
    }
    default:
      return {}
  }
}
