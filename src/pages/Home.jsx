import axios from "axios"
import { Carousel } from "components"
import Layout from "components/Layout/Layout"
import ProductLayout from "components/Product/ProductLayout"
import SectionHeader from "components/ui/Section/SectionHeader"
import { useEffect } from "react"

import { fetchProductsSuccess } from "../context/actions/shopActions"
import { useCart } from "../context/cartContext"
import { useShop } from "../context/shopContext"
import { getSortedData } from "./../common/helpers"

export default function Home() {
  const { state: shop, dispatch: shopDispatch } = useShop()
  // eslint-disable-next-line no-unused-vars
  const { state: cart } = useCart()
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("/api/products")
        .then((res) => shopDispatch(fetchProductsSuccess(res.data)))
    }
    fetch()
  }, [shopDispatch])
  console.log("res.data", shop.products.data.products)
  console.log({ shop })
  const sortedData = getSortedData(shop.products.data, shop.products.sort)
  console.log(sortedData)
  return (
    <>
      <Carousel />
      <Layout>
        <SectionHeader title="Latest Arrivals" />
        <ProductLayout
          loading={shop?.products?.loading}
          productList={shop?.products.data?.products}
          errorStatus={shop?.products?.error}
        />
      </Layout>
    </>
  )
}
