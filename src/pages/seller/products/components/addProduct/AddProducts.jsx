import React, { useEffect } from "react";
import ProductInformation from "./components/productInformation/ProductInformation";

import ProductImages from "./components/productImages/ProductImages";
import ProductVideos from "./components/productVideos/ProductVideos";
import ProductVariation from "./components/productVariation/ProductVariation";
import ProductPriceStock from "./components/productPriceStock/ProductPriceStock";
import ProductDescription from "./components/productDescription/ProductDescription";
import ProductSEO from "./components/productSEO/ProductSEO";
import StockVisibility from "./components/stockVisibility/StockVisibility";
import CashOnDelivery from "./components/cashOnDelivery/CashOnDelivery";
import Featured from "./components/featured/Featured";
import TodaysDeal from "./components/todaysDeal/TodaysDeal";
import ShippingTime from "./components/shippingTime/ShippingTime";
import PdfSpecification from "./components/pdfSpecification/PdfSpecification";
import "./addProducts.css";

const AddProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="add-product mx-3 mb-5">
      <div className="page-title mt-3 mb-3">
        <h4>Add New product</h4>
      </div>
      <div className="add-product-widget-container">
        <div className="apw-left">
          <ProductInformation />
          <ProductImages />
          <ProductVideos />
          <ProductVariation />
          <ProductPriceStock />
          {/* <ProductDescription /> */}
          <PdfSpecification />
          <ProductSEO />
        </div>
        <div className="apw-right">
          <StockVisibility />
          <CashOnDelivery />
          <Featured />
          <TodaysDeal />
          <ShippingTime />
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
