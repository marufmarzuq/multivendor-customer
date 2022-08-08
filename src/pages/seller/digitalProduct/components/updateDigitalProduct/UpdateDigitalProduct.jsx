import React, { useEffect } from "react";
import DigtalProductSEO from "../addDigitalProducts/components/digitalProductSEO/DigitalProductSEO";
import ProductDescriptionDigital from "../addDigitalProducts/components/productDescriptionDigital/ProductDescriptionDigital";
import ProductImagesDigital from "../addDigitalProducts/components/productImagesDigital/ProductImagesDigital";
import ProductInfoDigital from "../addDigitalProducts/components/productInfoDigital/ProductInfoDigital";
import ProductPriceStockDigital from "../addDigitalProducts/components/productPriceStockDigital/ProductPriceStockDigital";
import digitalProductStyle from "./updateDigital.module.css";

const UpdateDigitalProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="add-product mx-3 mb-5">
      <div className="page-title mt-3 mb-3">
        <h4>Update Digital product</h4>
      </div>
      <div className={digitalProductStyle.add_product_widget_container}>
        <ProductInfoDigital />
        <ProductImagesDigital />
        <ProductPriceStockDigital />
        <ProductDescriptionDigital />
        <DigtalProductSEO />
      </div>
    </div>
  );
};

export default UpdateDigitalProduct;
