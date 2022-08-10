import React, { useEffect } from "react";
import digitalProductStyle from "./addDigitalProduct.module.css";
import ProductInfoDigital from "./components/productInfoDigital/ProductInfoDigital";
import ProductImagesDigital from "./components/productImagesDigital/ProductImagesDigital";
import ProductPriceStockDigital from "./components/productPriceStockDigital/ProductPriceStockDigital";
import ProductDescriptionDigital from "./components/productDescriptionDigital/ProductDescriptionDigital";
import DigtalProductSEO from "./components/digitalProductSEO/DigitalProductSEO";

const AddDigitalProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="add-product mx-3 mb-5">
      <div className="page-title mt-3 mb-3">
        <h4>Add New Digital product</h4>
      </div>
      <div className={digitalProductStyle.add_product_widget_container}>
        <ProductInfoDigital />
        <ProductImagesDigital />
        <ProductPriceStockDigital />
        <ProductDescriptionDigital />
        <DigtalProductSEO />
      </div>
      <div className="addDigitalProduct">
        <button className="btn  btn-lg btn-success">
          {" "}
          Add Digital Product{" "}
        </button>
      </div>
    </div>
  );
};

export default AddDigitalProducts;
