import { CartProvider } from "./context/cartContext"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import { ShopProvider } from "./context/shopContext"
import server from "./backend/server"
server()
ReactDOM.render(
  <ShopProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ShopProvider>,
  document.getElementById("root")
)
