//@TODO-> Clean imports to use path alias
import { Header, Layout } from "components"
import { Toaster } from "react-hot-toast"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Home, NotFound, Product, Cart } from "./pages"
import ProductDetail from "./components/Product/ProductDetail"
import FancyRoute from "./components/Route/Route"
import Wishlist from "./pages/Wishlist"

export default function App() {
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
              component={ProductDetail}
            />
          </Layout>
          <FancyRoute path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}
