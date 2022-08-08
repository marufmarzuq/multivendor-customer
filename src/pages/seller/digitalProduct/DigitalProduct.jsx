import React from "react";
import TopSecDigital from "./components/topSec/TopSecDigital";
import AllDigitalProducts from "./components/allProducts/AllDigitalPorducts";
import digitalProdStyle from "./digitalProduct.module.css";
const DigitalProduct = () => {
  return (
    <div className={digitalProdStyle.spacing}>
      <TopSecDigital />
      <AllDigitalProducts />
    </div>
  );
};

export default DigitalProduct;
