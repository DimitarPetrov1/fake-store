import React from "react";
import "../css/App.css";
import "../css/single-item-box.css";
import Star from "./micro/Star";

function SingleItem({ itemTitle, itemPrice, itemImage }) {
  // This is a dummy rating generator based on the PRICE of the item (for consistency)
  let rating = Math.floor((itemPrice / 6) % 10);

  return (
    <div className="single-item-box">
      <img className="single-item-box-img" src={itemImage} alt={itemTitle} />

      <div className="single-item-box-info">
        <h2 className="single-item-box-title">{itemTitle}</h2>
        <div className="single-item-box__price_rating">
          <p className="single-item-box-price">${itemPrice}</p>
          <div className="rating-wrap">
            {rating === 0 ? (
              "Not rated yet"
            ) : (
              <>
                <Star isStarred={rating >= 1 ? true : false} />
                <Star isStarred={rating >= 2 ? true : false} />
                <Star isStarred={rating >= 3 ? true : false} />
                <Star isStarred={rating >= 4 ? true : false} />
                <Star isStarred={rating >= 5 ? true : false} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
