import { SHOP } from "../actionTypes"

// Fetching actions
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

// Sorting actions
export const handleSort = (sort) => ({
  type: SHOP.SORT_PRODUCTS,
  payload: {
    sort,
  },
})

export const handleSearch = (query) => ({
  type: SHOP.SEARCH_PRODUCTS,
  payload: {
    query,
  },
})

export const handleFilter = (filter) => ({
  type: SHOP.FILTER,
  payload: {
    filter,
  },
})
