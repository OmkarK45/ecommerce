// @Note to self -> data is array, sortMethod is string
export function getSortedData(data, sortMethod) {
  console.log("Sort method", sortMethod)
  switch (sortMethod) {
    case "lowHigh":
      return data.sort((a, b) => a.price - b.price)
    case "highLow":
      return data.sort((a, b) => b.price - a.price)
    default:
      return data
  }
}

export function getSlug(str) {
  return str
    .replace(/\W+(?!$)/g, "-")
    .toLowerCase()
    .replace(/\W$/, "")
    .toLowerCase()
}
