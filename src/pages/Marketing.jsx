import CategoryCard from "components/Cards/CategoryCard"
import Slideshow from "components/Carousel/Carousel"
import Layout from "components/Layout/Layout"
import { categories } from "./categories"

export default function Marketing() {
  return (
    <>
      <Slideshow />
      <Layout>
        <div className="my-8 px-2">
          <h2 className="text-2xl font-bold">Explore</h2>
        </div>
        <div className="grid grid-cols-2 px-2 md:px-0 gap-x-2 md:gap-x-0 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
          {categories.map(({ img, label, link }) => {
            return (
              <CategoryCard key={label} img={img} label={label} link={link} />
            )
          })}
        </div>
      </Layout>
    </>
  )
}
