import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i} onClick={() => onClick(i)} style={style}>
           {console.log(i, rating)}
            {rating > i ? (
              <AiFillStar style={{color : "gold"}} fontSize="25px" />
            ) : (
              <AiOutlineStar style={{color : "gold"}} fontSize="25px" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
