import React from "react";
import HorizontalCard from "../prodsCard/HorizontalCard";
import "./product.css";

const ListView = ({ products, addToCart }) => {
  return (
    <div className="prods-list-view-container">
      {products[0] &&
        products.map((prod, i) => (
          <HorizontalCard key={i} product={prod} addToCart={addToCart} />
        ))}
    </div>
  );
};

export default ListView;
