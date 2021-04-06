import { CartProvider } from "./context/cartContext"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import { ShopProvider } from "./context/shopContext"
import server from "./backend/server"
import { HelmetProvider } from "react-helmet-async"
server()
ReactDOM.render(
  <HelmetProvider>
    <ShopProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ShopProvider>
  </HelmetProvider>,
  document.getElementById("root")
)
