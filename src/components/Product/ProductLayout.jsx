import VerticalNav from "components/Layout/VerticalNav"
import ProductCardSkeleton from "components/ui/Placeholder/ProductCardSkeleton"
import ProductCard from "./ProductCard"
import { sidebarLinks as links } from "./../../common/defines"
export default function ProductLayout({ loading, productList, errorStatus }) {
  if (errorStatus) {
    return <div>Sorry something went wrong. We are sorry about it</div>
  }

  return (
    <div className="flex border border-blue-500 justify-between">
      <div className="hidden border border-red-800 w-1/5 md:block space-y-3">
        <VerticalNav heading="Departments" links={links} />
        <VerticalNav heading="Sort By" />
      </div>
      {/* <div className="flex flex-wrap lg:justify-between md:justify-start -mx-2 overflow-hidden sm:-mx-1 md:-mx-2 lg:-mx-2 xl:-mx-2 gap-y-4"> */}
      <div className="grid col-span-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg:grid-flow-row lg:gap-3 sm:gap-2 xl:grid-cols-4 md:gap-2 relative">
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
        <div className="py-4 col-span-2 md:hidden bg-white z-10 sticky inset-x-0 bottom-0">
          hi there
        </div>
      </div>
    </div>
  )
}
