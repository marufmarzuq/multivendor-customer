import React from "react";
import VarticalCard from "../prodsCard/VarticalCard";
import "./product.css";

const GridView = ({ products }) => {
  console.log(products);
  return (
    <div className="prods-grid-view-container">
      {products[0] && products.map((prod) => <VarticalCard product={prod} />)}
    </div>
  );
};

export default GridView;
