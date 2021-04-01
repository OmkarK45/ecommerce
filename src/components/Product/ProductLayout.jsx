import VerticalNav from "components/Layout/VerticalNav"
import ProductCardSkeleton from "components/ui/Placeholder/ProductCardSkeleton"
import ProductCard from "./ProductCard"
import { sidebarLinks as links } from "./../../common/defines"
export default function ProductLayout({ loading, productList, errorStatus }) {
  if (errorStatus) {
    return <div>Sorry something went wrong. We are sorry about it</div>
  }

  return (
    <div className="flex gap-7">
      <div className="hidden md:block">
        <VerticalNav heading="Departments" links={links} />
      </div>
      <div className="flex flex-wrap lg:justify-between md:justify-start -mx-2 overflow-hidden sm:-mx-1 md:-mx-2 lg:-mx-2 xl:-mx-2 gap-4">
        {loading ? (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        ) : (
          <>
            {productList &&
              productList.map((product) => {
                return <ProductCard key={product.id} product={product} />
              })}
          </>
        )}
      </div>
    </div>
  )
}
