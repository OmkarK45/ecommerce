/* eslint-disable consistent-return */
import { SHOP } from "../actionTypes"

export function shopReducer(state, action) {
  switch (action.type) {
    case SHOP.FETCH_PRODUCTS:
      return {
        ...state,
        products: {
          ...state.products,
          loading: false,
          data: action.payload.data,
        },
      }
    case SHOP.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: {
          ...state.products,
          loading: false,
          data: action.payload.data,
        },
      }
    case SHOP.FETCH_PRODUCT_FAIL:
      return {
        ...state,
        products: {
          data: [],
          error: true,
          loading: false,
        },
      }
    case SHOP.SORT_PRODUCTS:
      return {
        ...state,
        products: {
          ...state.products,
          sort: action.payload.sort,
        },
      }
    default:
      break
  }
}
