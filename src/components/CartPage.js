import React, { useState, useEffect } from "react";

function CartPage({ cartItems }) {
  const [getCartItems, setGetCartItems] = useState([]);

  useEffect(() => {
    let ID = `${cartItems}`.replace("/product/", "");
    const fetchCartItem = async () => {
      await fetch(`https://fakestoreapi.com/products/${ID}`)
        .then((res) => res.json())
        .then((res) => {
          setGetCartItems([res]);
        })
        .catch((error) => console.log("Error:", error));
    };
    console.log(ID);

    fetchCartItem();
  }, [cartItems]);

  return (
    <>
      {getCartItems.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </>
  );
}

export default CartPage;
