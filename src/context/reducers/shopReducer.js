/* eslint-disable consistent-return */
import { SHOP } from "../actionTypes"

export const initialState = {
  loading: true,
  data: [],
  error: false,
  sort: null,
  searchQuery: null,
  brandFilter: null,
}
export function shopReducer(state, action) {
  switch (action.type) {
    case SHOP.FETCH_PRODUCTS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.data.products],
      }
    case SHOP.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.data.products],
      }

    case SHOP.FETCH_PRODUCT_FAIL:
      return {
        ...state,
        error: true,
        loading: false,
        data: [],
      }
    case SHOP.SORT_PRODUCTS:
      return {
        ...state,
        sort: action.payload.sort,
        data: [...state.data],
      }
    case SHOP.SEARCH_PRODUCTS:
      return {
        ...state,
        searchQuery: action.payload.query,
        data: [...state.data],
      }
    case SHOP.FILTER_BY_BRAND:
      return {
        ...state,
        brandFilter: action.payload.brand,
      }
    default:
      return { ...state }
  }
}
