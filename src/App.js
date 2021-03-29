import { Header } from "components"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Home, NotFound } from "./pages"

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}
