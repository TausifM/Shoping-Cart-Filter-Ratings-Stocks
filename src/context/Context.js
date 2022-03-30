import { createContext } from "react";
import faker from '@faker-js/faker'
const Cart = createContext();
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5,6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1,2,3,4,5]),
  }))
  console.log(products, "hi")
  return <Cart.Provider>{children}</Cart.Provider>;
};

export default Context;
