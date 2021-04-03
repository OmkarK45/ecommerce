/* eslint-disable no-unused-vars */
//@TODO-> Clean imports to use path alias
import { Header, Layout } from "components"
import { Toaster } from "react-hot-toast"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Home, NotFound, Product, Cart } from "./pages"
import ProductDetail from "./components/Product/ProductDetail"
import FancyRoute from "./components/Route/Route"
import Wishlist from "./pages/Wishlist"
import Test from "./pages/Test"
import { useShop } from "./context/shopContext"
import axios from "axios"
import { useEffect } from "react"
import { fetchProductsSuccess } from "context/actions/shopActions"
import { useCart } from "context/cartContext"
import ProductDetailPage from "./pages/ProductDetailPage"

export default function App() {
  const { state: shop, dispatch: shopDispatch } = useShop()

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("/api/products")
        .then((res) => shopDispatch(fetchProductsSuccess(res.data)))
    }
    fetch()
  }, [shopDispatch])

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Router>
        <Header />
        <Switch>
          <FancyRoute path="/" exact component={Home} />
          <Layout>
            <FancyRoute path="/product" exact component={Product} />
            <FancyRoute path="/cart" exact component={Cart} />
            <FancyRoute path="/wishlist" exact component={Wishlist} />
            <FancyRoute
              path="/products/:id/:slug"
              exact
              component={ProductDetailPage}
            />
            {/* Test route */}
            <FancyRoute path="/test" exact component={Test} />
          </Layout>
          <FancyRoute path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}
