import faker from "faker/locale/en_IND"
faker.seed(123)

export const Product = {
  id: () => faker.datatype.uuid(),
  title: () => faker.commerce.productName(),
  color: () => faker.commerce.color(),
  department: () => faker.commerce.department(),
  price: () => faker.commerce.price(49, 30000, 2),
  productDescription: () => faker.commerce.productDescription(),
  image: () => faker.random.image(),
  brand: () =>
    faker.random.arrayElement([
      "Apple",
      "Microsoft",
      "Asus",
      "Acer",
      "Samsung",
      "Dell",
      "Motorola",
      "HP",
      "Redmi",
      "Nike",
      "Puma",
      "Reebok",
    ]),
  expressDelivery: () => faker.datatype.boolean(),
  ratings: () =>
    faker.random.arrayElement([2, 3, 3.5, 4, 4.2, 4.4, 4.5, 4.8, 5]),
  inStock: () => faker.datatype.boolean(),
  offer: () =>
    faker.random.arrayElement([
      "",
      "Save 70%",
      "End of season sale",
      "Save 50%",
      "Additional 20% Cashback on select banks!",
      "Min 30% off",
    ]),
  reviewers: () => faker.datatype.number(9999),
}
