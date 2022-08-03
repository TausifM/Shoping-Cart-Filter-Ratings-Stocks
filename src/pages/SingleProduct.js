import { Button, Card } from "react-bootstrap";
import Rating from "../component/Rating";
import { CartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {state : {cart}, dispatch} = CartState();
  return (
    <div className="products">
      <Card style={{marginTop: "10px"}}>
        <Card.Img variant="top" src={prod.image} alt={prod.name} height="200" width="200" />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle>Price : 
          <span style={{fontWeight: "900"}}> $ {prod.price.split(".")[0]}</span>
          {prod.fastDelivery ? <div>Fast Delivery</div> : <div>4 days for Delivery</div>}
          <Rating rating={prod.ratings}/>
          </Card.Subtitle>
          {cart.some(p => p.id === prod.id) ? (<Button variant="danger" style={{margin: "5px"}}
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: prod
            })
           }}
          
          >Remove from Cart</Button>)
           : (<Button disabled={!prod.inStock} onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: prod
            })
           }}>
            {prod.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>)
          }
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
