
import { Badge, Container, FormControl, Navbar,  Dropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
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
                      <Badge>{11}</Badge>
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{minWidth: 370}}>
                          <span style={{padding: 10}}>Cart is Empty</span>
                      </Dropdown.Menu>
              </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
