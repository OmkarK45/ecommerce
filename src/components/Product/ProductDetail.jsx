import { Button } from "components/ui"
import {
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiStar,
  HiCheckCircle,
} from "react-icons/hi"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { MdLocalOffer } from "react-icons/md"
import Divider from "components/ui/Divider"
import Skeleton from "components/ui/Placeholder/Skeleton"
import clsx from "clsx"
import { useCart } from "context/cartContext"
import { handleAddToCart } from "./../../context/actions/cartActions"
import { toast } from "react-hot-toast"
import ProductDetailSkeleton from "components/ui/Placeholder/ProductDetailSkeleton"
import SEO from "components/SEO"

export default function ProductDetail() {
  const [product, setProduct] = useState({})
  const { id } = useParams()
  const [image, setImageURL] = useState("")
  const { dispatch: cartDispatch } = useCart()

  const notify = () =>
    toast.success("Product added to cart", {
      iconTheme: {
        primary: "#059669",
      },
    })

  function addToCart() {
    cartDispatch(handleAddToCart(product))
    notify()
  }

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
      <SEO title={product?.title} />

      <Link to="/store" className="block my-3">
        <Button>Back to store</Button>
      </Link>
      {/* this needs some thinking */}
      {product.offers ? (
        <div className="container px-4 py-4 mx-auto mb-10 bg-white rounded shadow sm:px-6 lg:px-8 lg:py-10">
          <div className="flex flex-col space-y-3 md:flex-row">
            <div className="flex items-center flex-1 mx-auto">
              <div className="md:w-5/6 md:mx-auto">
                {!image && product.image && (
                  <Skeleton height="h-full" width="w-3/4" />
                )}
                <img
                  src={product.image}
                  alt="Product Image"
                  className={clsx(
                    "mx-auto block rounded-lg h-0",
                    image && " h-auto object-cover"
                  )}
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center flex-1 space-y-3">
              <div className="space-y-2.5">
                <h1 className="text-xl font-semibold md:text-2xl">
                  {product?.title}
                </h1>
                <p className="text-gray-700">By {product.brand}</p>
                <p className="text-sm text-gray-500">
                  {product?.productDescription}
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2 md:flex-row md:justify-between ">
                <div className="flex space-x-3">
                  <p className="text-2xl font-bold">₹ {product.price}</p>
                  <p className="text-gray-500 line-through">₹ 19,999</p>
                </div>
                <span className="flex items-center px-1 space-x-1 text-sm text-white bg-green-600 rounded">
                  <HiStar /> {product.ratings}
                  <p className="text-xs">
                    ({parseInt(product.reviewers).toLocaleString("en-IN")}{" "}
                    Reviews)
                  </p>
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col mt-3 space-y-2">
                  <Divider label="Offers" />
                  <ul>
                    {product?.offers.map((offer, i) => {
                      return (
                        <li key={i}>
                          <div className="flex items-center space-x-3">
                            <MdLocalOffer className="w-5 h-5 text-blue-700" />

                            <p>{offer}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                  {product.expressDelivery ? (
                    <>
                      <Divider label="Perks" />
                      <ul>
                        <li className="flex items-center space-x-3">
                          <HiCheckCircle className="w-5 h-5 text-green-700" />
                          <p>Express Delivery available.</p>
                        </li>
                      </ul>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-2 md:space-x-2 md:flex-row md:space-y-0">
                <Button
                  size="md"
                  variant="primary"
                  fullWidth
                  className="uppercase"
                >
                  <HiOutlineShoppingBag className="w-4 h-4 mr-2" /> Buy Now
                </Button>
                <Button
                  size="md"
                  fullWidth
                  className="uppercase"
                  onClick={addToCart}
                >
                  <HiOutlineShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ProductDetailSkeleton />
      )}
    </>
  )
}
