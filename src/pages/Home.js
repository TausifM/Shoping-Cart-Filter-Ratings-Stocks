import Filter from "../component/Filter";
import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct";
import './style.css'
const Home = () => {
  // Destructure products from state of useReducer
  const {state: {products}} = CartState();
  console.log(products)
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {products.map((product) => (
          <SingleProduct prod={product}  key={product.id}/>
        ))}
      </div>
    </div>
  )
}

export default Home