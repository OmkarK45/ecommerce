import axiosService from "../common/axiosService"
import { API_URL } from "../common/defines"

export const fetchProductsData = () => {
  const endpoint = `${API_URL}/products`
  return axiosService.get(endpoint)
}

export const fetchSingleProductData = (query) => {
  const endpoint = `${API_URL}/products/${query.product_id}`
  return axiosService.get(endpoint)
}

export const fetchAllCategories = () => {
  const endpoint = `${API_URL}/products/categories`
  return axiosService.get(endpoint)
}

export const fetchCategoryProduct = (query) => {
  const endpoint = `${API_URL}/products/category/${query.category}`
  return axiosService.get(endpoint)
}
