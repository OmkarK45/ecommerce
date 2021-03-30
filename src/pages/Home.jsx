import axios from "axios"
import { Carousel } from "components"
import Layout from "components/Layout/Layout"
import ProductLayout from "components/Product/ProductLayout"
import SectionHeader from "components/ui/Section/SectionHeader"
import { useEffect } from "react"

import { fetchProductsSuccess } from "../context/actions/shopActions"
import { useShop } from "../context/shopContext"

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const { state: shop, dispatch: shopDispatch } = useShop()
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => shopDispatch(fetchProductsSuccess(res.data)))
    }
    fetch()
  }, [shopDispatch])
  console.log(shop)
  return (
    <>
      <Carousel />
      {console.log(shop?.products?.loading)}
      {/* {JSON.stringify(shop)} */}
      <Layout>
        <SectionHeader title="Latest Arrivals" />
        <ProductLayout
          loading={shop?.products?.loading}
          productList={shop?.products?.data}
        />
      </Layout>
    </>
  )
}
