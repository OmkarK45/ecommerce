import { createServer, Model, Factory } from "miragejs"
import { Product } from "./models/Product"

export default function server() {
  createServer({
    models: {
      product: Model,
    },

    factories: {
      product: Factory.extend(Product),
    },
    seeds(server) {
      server.createList("product", 5)
    },
    routes() {
      this.namespace = "api"

      this.get("/products", (schema) => {
        return schema.products.all()
      })

      this.get("/products/:id", (schema, request) => {
        return schema.products.find(request.params.id)
      })
    },
  })
}
