import { Button, Card } from "react-bootstrap";
import Rating from "../component/Rating";

const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <Card style={{marginTop: "10px"}}>
        <Card.Img variant="top" src={prod.image} alt={prod.name} height="200" width="200" />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle>Product in Stock : {prod.inStock}
          <span>$ {prod.price.split(".")[0]}</span>
          {prod.fastDelivery ? <div>Fast Delivery</div> : <div>4 days for Delivery</div>}
          <Rating rating={prod.ratings}/>
          </Card.Subtitle>
          <Button variant="danger" style={{margin: "5px"}}>Remove from Cart</Button>
          <Button disabled={!prod.inStock}>{prod.inStock ? "Add to Cart" : "Out of Stock"}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
