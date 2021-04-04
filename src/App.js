/* eslint-disable no-unused-vars */
//@TODO-> Clean imports to use path alias
import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Header, Layout } from "components"
import {
  Home,
  NotFound,
  Product,
  Cart,
  Wishlist,
  Test,
  ProductDetailPage,
  Marketing,
} from "./pages"
import FancyRoute from "./components/Route/Route"
import { useShop } from "./context/shopContext"
import axios from "axios"
import { fetchProductsSuccess } from "context/actions/shopActions"

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
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#059669",
            },
          },
        }}
      />
      <Router>
        <Header />
        <Switch>
          <FancyRoute path="/" exact component={Marketing} />
          <FancyRoute path="/store" exact component={Home} />
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
