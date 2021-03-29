import { CartProvider } from "./context/cartContext"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
)
