import { WISHLIST } from "../actionTypes"

export const handleAddToWishList = (data) => ({
  type: WISHLIST.ADD_TO_WISHLIST,
  payload: data,
})
export const handleRemoveFromWishList = (data) => ({
  type: WISHLIST.REMOVE_FROM_WISHLIST,
  payload: data,
})
