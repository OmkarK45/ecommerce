/* eslint-disable no-unused-vars */
import { Carousel } from "components"
import Layout from "components/Layout/Layout"
import ProductLayout from "components/Product/ProductLayout"
import SectionHeader from "components/ui/Section/SectionHeader"
import { useEffect } from "react"

import { useCart } from "../context/cartContext"
import { useShop } from "../context/shopContext"
import { getSortedData } from "./../common/helpers"

export default function Home() {
  const { state: shop, dispatch: shopDispatch } = useShop()
  const { state: cart } = useCart()

  const sortedData = getSortedData(shop.data, shop.sort)
  console.log("shop", shop.data)
  function getSearchedItems(query) {
    return shop.data.filter((product) =>
      product.title.toLowerCase().includes(query) ? product : null
    )
  }
  console.log(getSearchedItems(shop.searchQuery))
  return (
    <>
      <Carousel />
      <Layout>
        <SectionHeader title="Store" />
        <ProductLayout
          loading={shop?.loading}
          productList={shop?.data}
          errorStatus={shop?.error}
        />
      </Layout>
    </>
  )
}
