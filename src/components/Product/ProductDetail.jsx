import { Button } from "components/ui"
import {
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiStar,
} from "react-icons/hi"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { MdLocalOffer } from "react-icons/md"
import Divider from "components/ui/Divider"
import Skeleton from "components/ui/Placeholder/Skeleton"
import clsx from "clsx"
export default function ProductDetail() {
  const [product, setProduct] = useState({})
  const { id } = useParams()
  const [image, setImageURL] = useState("")

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("/api/products/" + id)
        .then((res) => setProduct(res.data.product))
        .catch((err) => console.log(err))
    }
    fetch()
  }, [id])

  function handleImageLoad() {
    setImageURL("loaded")
  }

  console.log(product?.offers)
  return (
    <>
      {product ? (
        <div className="container rounded shadow bg-white mx-auto px-4 py-4 sm:px-6 lg:px-8 mb-10 ">
          <div className="flex flex-col space-y-3 md:flex-row">
            <div className="flex-1">
              {!image && product.image && <Skeleton height="full" />}
              <img
                // src={product.image}
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Product Image"
                className={clsx("w-1/2 mx-auto  h-0", image && " h-full")}
                onLoad={handleImageLoad}
              />
            </div>
            <div className="flex flex-1 flex-col justify-center space-y-3">
              <div className="space-y-2.5">
                <h1 className="text-xl md:text-2xl font-semibold">
                  {product?.title}
                </h1>
                <p className="text-gray-700">By {product.brand}</p>
                <p className="text-gray-500 text-sm">
                  {product?.productDescription}
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2 md:flex-row md:justify-between ">
                <div className="flex space-x-3">
                  <p className="text-2xl font-bold">₹ {product.price}</p>
                  <p className="text-gray-500 line-through">₹ 19,999</p>
                </div>
                <span className="flex items-center bg-green-600 px-1 text-white text-sm space-x-1 rounded">
                  <HiStar /> {product.ratings}
                  <p className="text-xs">
                    ({parseInt(product.reviewers).toLocaleString("en-IN")}{" "}
                    Reviews)
                  </p>
                </span>
              </div>
              <div>
                <Divider label="Offers" />
                <div className="flex flex-col space-y-2 mt-3">
                  <ul>
                    {product?.offers.map((offer, i) => {
                      return (
                        <li key={i} className="flex items-center space-x-3">
                          <MdLocalOffer className="text-blue-600" />
                          <p>{offer}</p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:space-x-2 md:flex-row justify-center space-y-2 md:space-y-0">
                <Button
                  size="md"
                  variant="primary"
                  fullWidth
                  className="uppercase"
                >
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
      ) : (
        "Loading"
      )}
    </>
  )
}
