import { Header } from "components"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Home, NotFound } from "./pages"
import Layout from "./components/Layout/Layout"
import Product from "./pages/Product"

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Layout>
            <Route path="/product" exact component={Product} />
          </Layout>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}
