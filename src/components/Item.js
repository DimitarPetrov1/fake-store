import React from "react";
import "../css/App.css";

function Item({
  itemTitle,
  itemCategory,
  itemPrice,
  itemProductCode,
  itemImage,
  itemDescription,
}) {
  return (
    <div className="single-item">
      <p>{itemTitle}</p>
      <p>{itemCategory}</p>
      <p>price: {itemPrice}</p>
      <p>product code: {itemProductCode}</p>
      <img src={itemImage} alt={itemTitle} />
      <p>{itemDescription}</p>
    </div>
  );
}

export default Item;
