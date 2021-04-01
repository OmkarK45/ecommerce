import axiosService from "../common/axiosService"

export const fetchProductsData = () => {
  const endpoint = `/products`
  return axiosService.get(endpoint)
}

export const fetchSingleProductData = (query) => {
  const endpoint = `/products/${query.id}`
  return axiosService.get(endpoint)
}

export const fetchAllCategories = () => {
  const endpoint = `/products/categories`
  return axiosService.get(endpoint)
}

export const fetchCategoryProduct = (query) => {
  const endpoint = `/products/category/${query.category}`
  return axiosService.get(endpoint)
}
