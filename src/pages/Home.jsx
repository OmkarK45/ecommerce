import axios from "axios"
import { Carousel } from "components"
import Layout from "components/Layout/Layout"
import SectionHeader from "components/ui/Section/SectionHeader"
import { useEffect } from "react"

import { fetchProductsSuccess } from "../context/actions/shopActions"
import { useShop } from "../context/shopContext"

export default function Home() {
  const { state: shop, dispatch: shopDispatch } = useShop()
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => shopDispatch(fetchProductsSuccess(res.data)))
    }
    fetch()
  }, [shopDispatch])

  return (
    <>
      <Carousel />
      {JSON.stringify(shop)}
      <Layout>
        <SectionHeader title="Latest Arrivals" />
      </Layout>
    </>
  )
}
