import { handleFilter, handleSort } from "../context/actions/shopActions"

// @Note to self -> data is array, sortMethod is string
export function getSortedData(data, sortMethod) {
  console.log("Sort method", sortMethod)
  switch (sortMethod) {
    case "lowHigh":
      return data.sort((a, b) => a.price - b.price)
    case "highLow":
      return data.sort((a, b) => b.price - a.price)
    case "clear":
      return data
    default:
      return data
  }
}

export function getSortDispatch(e) {
  switch (e) {
    case "az":
      return handleSort("az")
    case "za":
      return handleSort("za")
    case "lowHigh":
      return handleSort("lowHigh")
    case "highLow":
      return handleSort("highLow")
    case "clear":
      console.log("clear called")
      return handleSort(null)
    default:
      //   This could be better
      return {}
  }
}

export function getFilterDispatch(filter) {
  switch (filter) {
    case "outOfStock":
      return handleFilter(filter)
    case "expressDelivery":
      return handleFilter(filter)
    default:
      return {}
  }
}

export function getSlug(str) {
  return str
    .replace(/\W+(?!$)/g, "-")
    .toLowerCase()
    .replace(/\W$/, "")
    .toLowerCase()
}
