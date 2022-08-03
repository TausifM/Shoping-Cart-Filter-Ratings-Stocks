import { useState } from "react"
import { Form, Button} from "react-bootstrap"
import { CartState } from "../context/Context";
import Rating from "./Rating"

const Filter = () => {
    // const [rating, setRating] = useState(3);
    const {filterState : {byStock, byRating, byFastDelivery, searchQuery, sort},
     filterDispatch} = CartState();
     console.log(byStock, byRating, byFastDelivery, searchQuery, sort);
  return (
    <div className="filter">
        <span className="filter-title">Filter Products</span>
        <span>
            <Form.Check 
            inline
            label= "Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={() => filterDispatch(
                {type : "SORT_BY_PRICE", payload : "lowToHigh"}
            )}
            checked={sort === "lowToHigh" ? true : false}
            />
        </span>
        <span>
            <Form.Check 
            inline
            label= "Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={() => filterDispatch(
                {type : "SORT_BY_PRICE", payload : "highToLow"}
            )}
            checked={sort === "highToLow" ? true : false}
            />
        </span>
        <span>
            <Form.Check 
            inline
            label= "Include out of Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={() => filterDispatch(
                {type : "FILTER_BY_STOCK"}
            )}
            checked={byStock ? true : false}
            />
        </span>
        <span>
            <Form.Check 
            inline
            label= "Fast Delivery"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            onChange={() => filterDispatch(
                {type : "FILTER_BY_DELIVERY"}
            )}
            checked={byFastDelivery ? true : false}
            />
        </span>
        <span>
            <label style={{paddingRight: 10}}>Rating: </label>
            <Rating rating={byRating} onClick={(i) => 
            filterDispatch({
                type:"FILTER_BY_RATING",
                payload: i + 1
            })} style={{cursor: "pointer"}}/>
        </span>
        <Button variant="light"
        onClick={() => filterDispatch({type : "CLEAR_FILTERS"})}
        >Clear Filters</Button>
    </div>
  )
}

export default Filter