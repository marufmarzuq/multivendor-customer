import React, { useState } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useCart } from "react-use-cart";

const ProdQty = ({ prod }) => {
  const [qty, setQty] = useState(prod.quantity);
  const { updateItemQuantity } = useCart();
  const handleClick = (type) => {
    if (type === "plus") {
      setQty(Number(qty) + 1);
      updateItemQuantity(prod?.id, qty + 1);
    } else {
      setQty(Number(qty) - 1);
      updateItemQuantity(prod?.id, qty - 1);
    }
  };
  return (
    <div className="mini-cart-qty-container">
      <button disabled={qty <= 1} onClick={() => handleClick("minus")}>
        <HiOutlineChevronLeft />
      </button>
      <span>{qty}</span>
      <button onClick={() => handleClick("plus")}>
        <HiOutlineChevronRight />
      </button>
    </div>
  );
};

export default ProdQty;
