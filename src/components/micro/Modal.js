import React from "react";

function Modal({ openModal }) {
  return (
    <div className={openModal ? "modal-open" : "modal"}>Added to Cart!!!</div>
  );
}

export default Modal;
