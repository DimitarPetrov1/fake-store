import React from "react";
import "../css/cart.css";

function CartPage({ cartItems }) {
  return (
    <>
      {cartItems
        ? cartItems.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <img src={item.image} alt={`${item.title}`} />
              </div>
            );
          })
        : null}
    </>
  );
}

export default CartPage;
