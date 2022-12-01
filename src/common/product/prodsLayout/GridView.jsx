import React from "react";
import VerticalCard from "../prodsCard/VerticalCard";
import "./product.css";

const GridView = ({ products , addToCart }) => {
  return (
    <div className="prods-grid-view-container">
      {products && products.map((prod) => <VerticalCard product={prod} addToCart={addToCart} />)}
    </div>
  );
};

export default GridView;
