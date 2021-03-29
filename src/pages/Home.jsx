import { Carousel } from "components"
import Layout from "components/Layout/Layout"
import SectionHeader from "components/ui/Section/SectionHeader"
import { useCart } from "../context/cartContext"

export default function Home() {
  const { ok } = useCart(0)
  return (
    <>
      <Carousel />
      <Layout>
        <SectionHeader title="Latest Arrivals" />
        {ok}
      </Layout>
    </>
  )
}
