import VerticalNav from "components/Layout/VerticalNav"
import ProductCardSkeleton from "components/ui/Placeholder/ProductCardSkeleton"
import ProductCard from "./ProductCard"
import { sidebarLinks as links } from "./../../common/defines"
import Grid from "./ProductGrid"
import MobileSort from "./../Dropdown/MobileSort"
export default function ProductLayout({ loading, productList, errorStatus }) {
  if (errorStatus) {
    return <div>Sorry something went wrong. We are sorry about it</div>
  }

  return (
    <div className="flex border border-blue-500 justify-between">
      <div className="hidden border border-red-800 w-1/5 md:block space-y-3">
        <VerticalNav links={links} />
      </div>
      <Grid>
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
        <MobileSort />
      </Grid>
    </div>
  )
}
