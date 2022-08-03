import { useState } from "react"
import { Form, Button} from "react-bootstrap"
import Rating from "./Rating"

const Filter = () => {
    const [rating, setRating] = useState(3)
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
            />
        </span>
        <span>
            <Form.Check 
            inline
            label= "Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            />
        </span>
        <span>
            <Form.Check 
            inline
            label= "Include out of Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            />
        </span>
        <span>
            <Form.Check 
            inline
            label= "Fast Delivery"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            />
        </span>
        <span>
            <label style={{paddingRight: 10}}>Rating: </label>
            <Rating rating={rating} onClick={(i) => setRating(i + 1)} style={{cursor: "pointer"}}/>
        </span>
        <Button variant="light">Clear Filters</Button>
    </div>
  )
}

export default Filter