import React from "react";
import ShoppingCart from "./ShoppingCart";

function BuyButton() {
  return (
    <button title="Add to Cart" className="btn btn-buy_now">
      <ShoppingCart />
    </button>
  );
}

export default BuyButton;
