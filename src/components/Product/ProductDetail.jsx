import { Button, Badge } from "components/ui"
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function ProductDetail() {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("/api/products/" + id)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err))
    }
    fetch()
  }, [id])
  console.log({ product })
  return (
    <div className="container rounded shadow bg-white mx-auto px-4 py-4 sm:px-6 lg:px-8 mb-10 ">
      <div className="flex flex-col space-y-3 md:flex-row">
        <div className="flex-1">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="Product Name goes here"
            className="w-1/2 mx-auto  h-full"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center space-y-3">
          <div className="space-y-3">
            <h1 className="text-xl md:text-2xl font-semibold">
              Nike&#8482; Air Jordan
            </h1>
            <p className="text-gray-500 text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              repellat inventore suscipit ducimus dolor error expedita ab,
              delectus accusamus cum. Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <div className="flex flex-col space-y-2 md:flex-row md:justify-between ">
            <div className="flex space-x-3">
              <p className="text-2xl font-bold">₹ 13,999</p>
              <p className="text-gray-500 line-through">₹ 19,999</p>
            </div>
            <Badge rating="4.5" />
          </div>
          <div className="flex flex-col md:space-x-2 md:flex-row justify-center space-y-2 md:space-y-0">
            <Button size="md" variant="primary" fullWidth className="uppercase">
              <HiOutlineShoppingBag className="mr-2 h-4 w-4" /> Buy Now
            </Button>
            <Button size="md" fullWidth className="uppercase">
              <HiOutlineShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
