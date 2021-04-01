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
  offers: () =>
    faker.random.arrayElements(
      [
        "",
        "Save 70%",
        "Save upto 40% with SBI Credit Card*",
        "Save 50% on Bajaj Finance App",
        "Additional 20% Cashback on select banks!",
        "Flat Rs. 500 Cashback on PayTM app",
        "5% Unlimited Cashback on Axis Bank Credit Card",
        "10% off on Kotak Bank Credit and Debit Cards, up to ₹750. On orders of ₹2000 and above",
      ],
      3
    ),
  reviewers: () => faker.datatype.number(9999),
}
