import CategoryCard from "components/Cards/CategoryCard"
import Slideshow from "components/Carousel/Carousel"
import Layout from "components/Layout/Layout"

export default function Marketing() {
  return (
    <>
      <Slideshow />
      <Layout>
        <div className="my-8">
          <h2 className="text-2xl font-bold">Explore</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-4 md:grid-cols-3 lg:grid-cols-4">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </Layout>
    </>
  )
}
