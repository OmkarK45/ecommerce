import { Header, Layout } from "components"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Home, NotFound, Product, Cart } from "./pages"

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
          </Layout>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}
