import { Carousel } from "components"
import Layout from "components/Layout/Layout"
import SectionHeader from "components/ui/Section/SectionHeader"
export default function Home() {
  return (
    <>
      <Carousel />
      <Layout>
        <SectionHeader title="Latest Arrivals" />
      </Layout>
    </>
  )
}
