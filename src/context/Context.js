import { createContext, useContext, useReducer } from "react";
import faker from '@faker-js/faker'
import { cartReducer, filterReducer } from "./Reducer";
const Cart = createContext();
// for signle data it will not change on every render
faker.seed(99);
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5,6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1,2,3,4,5]),
  }));
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  });
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byRating: 0,
    byFastDelivery: false,
    searchQuery: ""
  })
  console.log(products, "hi")
  return <Cart.Provider value={{state, dispatch,filterState, filterDispatch}}>{children}</Cart.Provider>;
};

export default Context;
export const CartState = () => {
  return useContext(Cart)
}
