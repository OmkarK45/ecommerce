import ProductCard from "components/Product/ProductCard"
import ProductDetail from "components/Product/ProductDetail"
import ProductLayout from "components/Product/ProductLayout"

export default function Product() {
  return (
    <div>
      <ProductLayout />
      <ProductCard />
      <ProductDetail />
    </div>
  )
}
