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
      <div className=" d-flex justify-content-between me-md-5 pe-md-4 me-0 pe-0 mt-3 mb-3">
        <h4>Add New Digital product</h4>
        <button className="btn me-md-5  me-0 btn-outline-success">
          Save Product
        </button>
      </div>
      <div className={digitalProductStyle.add_product_widget_container}>
        <ProductInfoDigital />
        <ProductImagesDigital />
        <ProductPriceStockDigital />
        <ProductDescriptionDigital />
        <DigtalProductSEO />
      </div>
      <div className="mt-4">
        <button className="btn  btn-lg btn-outline-success">
          {" "}
          Save Product{" "}
        </button>
      </div>
    </div>
  );
};

export default UpdateDigitalProduct;
