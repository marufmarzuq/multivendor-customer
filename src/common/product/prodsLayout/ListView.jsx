import React from "react";
import HorizontalCard from "../prodsCard/HorizontalCard";
import "./product.css";

const ListView = ({ products }) => {
  return (
    <div className="prods-list-view-container">
      {products[0] && products.map((prod) => <HorizontalCard product={prod} />)}
    </div>
  );
};

export default ListView;
