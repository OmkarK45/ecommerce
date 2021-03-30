import { Header, Layout } from "components"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Home, NotFound, Product, Cart } from "./pages"
import ProductDetail from "./components/Product/ProductDetail"

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Layout>
            <Route path="/product" exact component={Product} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/productdetail" exact component={ProductDetail} />
            <Route path="*" component={NotFound} />
          </Layout>
        </Switch>
      </Router>
    </>
  )
}
