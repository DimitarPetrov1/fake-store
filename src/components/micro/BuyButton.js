import React from "react";
import ShoppingCart from "./ShoppingCart";

function BuyButton({ addToCartFunction }) {
  return (
    <button
      title="Add to Cart"
      className="btn btn-buy_now"
      onClick={addToCartFunction}
    >
      <ShoppingCart />
    </button>
  );
}

export default BuyButton;
