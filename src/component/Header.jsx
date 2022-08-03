
import { Badge, Container, FormControl, Navbar,  Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import './style.css';
const Header = () => {
  const {state: {cart}, dispatch} =  CartState();
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              type="text"
              placeholder="Search a product"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
              <Dropdown align>
                  <Dropdown.Toggle variant="success" >
                      <FaShoppingCart color="white" fontSize="25px" />
                      <Badge>{cart.length}</Badge>
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{minWidth: 330}}>
                        {cart.length > 0 ? (
                        <>{cart.map((prod)=> (
                          <span className="cartitem" key={prod.id}>
                            <img src={prod.image} className="cartItemImg" alt={prod.name}/>
                            <div className="cartItemDetail">
                              <span className="cartItemName">{prod.name}</span>
                              <span className="cartItemPrice"> $ {prod.price.split(".")[0]}</span>
                            </div>
                            <AiFillDelete className="cartItemDelete" fontSize="20px" style={{cursor: "pointer"}} 
                            onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: prod})}
                            />
                          </span>

                        ))}
                        </>) 
                        : (<span style={{padding: 10}}>Cart is Empty</span>)}
                      </Dropdown.Menu>
              </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
