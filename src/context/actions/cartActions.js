import { CART } from "../actionTypes"

export const handleAddToCart = (data) => ({
  type: CART.ADD_TO_CART,
  payload: data,
})

export const handleRemoveFromCart = (data) => ({
  type: CART.REMOVE_FROM_CART,
  payload: data,
})

export const handleIncreaseQuantity = (data) => ({
  type: CART.INCREASE_QTY,
  payload: data,
})
export const handleDecreaseQuantity = (data) => ({
  type: CART.DECREASE_QTY,
  payload: data,
})
