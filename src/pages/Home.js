import Filter from "../component/Filter";
import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct";
import './style.css'
const Home = () => {
  // Destructure products from state of useReducer
  const {
    state: {products}, 
    filterState : {byStock, byRating, byFastDelivery, searchQuery, sort}} = CartState();
  console.log(products);
  const transformProducts = () => {
    let sortedProducts = products;
    if(sort){
      sortedProducts = sortedProducts.sort((a, b) => (
        sort === 'lowToHigh' ? a.price -  b.price : b.price - a.price
      ))
    }
    if(!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if(byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    if(byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.ratings >= byRating);
    }
    if(searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
    }
    return sortedProducts;
  }
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {transformProducts().map((product) => (
          <SingleProduct prod={product}  key={product.id}/>
        ))}
      </div>
    </div>
  )
}

export default Home