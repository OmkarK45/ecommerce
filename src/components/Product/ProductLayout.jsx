import ProductCard from "./ProductCard"

export default function ProductLayout() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row md:space-x-2 flex-wrap ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}
