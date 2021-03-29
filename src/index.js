import { CartProvider } from "./context/cartContext"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import { ShopProvider } from "./context/shopContext"

ReactDOM.render(
  <ShopProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ShopProvider>,
  document.getElementById("root")
)
