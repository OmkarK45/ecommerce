import { SHOP } from "../actionTypes"

export const fetchProducts = () => ({
  type: SHOP.FETCH_PRODUCTS,
})

export const fetchProductsSuccess = (data) => ({
  type: SHOP.FETCH_PRODUCTS_SUCCESS,
  payload: {
    data,
  },
})
export const fetchProductsFail = (err) => ({
  type: SHOP.FETCH_PRODUCT_FAIL,
  payload: {
    err,
  },
})
