import React from "react";

function CartPage({ cartItems }) {
  return (
    <>
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <img src={item.image} alt={`${item.title}`} />
          </div>
        );
      })}
    </>
  );
}

export default CartPage;
