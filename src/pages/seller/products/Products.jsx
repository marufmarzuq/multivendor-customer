import React from "react";
import TopSec from "./components/topSec/TopSec";
import AllProducts from "./components/allProducts/AllProducts";
import productsStyle from "./products.module.css";

const Products = () => {
  return (
    <div className={productsStyle.spacing}>
      <TopSec />
      <AllProducts />
    </div>
  );
};

export default Products;
