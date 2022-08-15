import React from "react";
import AddProducts from "../addProduct/AddProducts";
import CashOnDelivery from "../addProduct/components/cashOnDelivery/CashOnDelivery";
import Featured from "../addProduct/components/featured/Featured";
import LowStockQuantity from "../addProduct/components/lowStockQuantity/LowStockQuantity";
import PdfSpecification from "../addProduct/components/pdfSpecification/PdfSpecification";
import ProductDescription from "../addProduct/components/productDescription/ProductDescription";
import ProductImages from "../addProduct/components/productImages/ProductImages";
import ProductInformation from "../addProduct/components/productInformation/ProductInformation";
import ProductPriceStock from "../addProduct/components/productPriceStock/ProductPriceStock";
import ProductSEO from "../addProduct/components/productSEO/ProductSEO";
import ProductVariation from "../addProduct/components/productVariation/ProductVariation";
import ProductVideos from "../addProduct/components/productVideos/ProductVideos";
import ShippingConfiguration from "../addProduct/components/shippingConfiguration/ShippingConfiguration";
import ShippingTime from "../addProduct/components/shippingTime/ShippingTime";
import StockVisibility from "../addProduct/components/stockVisibility/StockVisibility";
import TodaysDeal from "../addProduct/components/todaysDeal/TodaysDeal";

const UpdateProduct = () => {
  return (
    <div>
      <div className="add-product mx-3 mb-5">
        <div className=" d-flex justify-content-between mt-3 mb-3">
          <h4>Update product</h4>
          <button className="btn btn-outline-success"> Save Product </button>
        </div>
        <div className="add-product-widget-container">
          <div className="">
            <ProductInformation />
            <ProductImages />
            <ProductVideos />
            <ProductVariation />
            <ProductPriceStock />
            <ProductDescription />
            <PdfSpecification />
            <ProductSEO />
          </div>
          <div className="">
            <ShippingConfiguration />
            <LowStockQuantity />
            <StockVisibility />
            <CashOnDelivery />
            <Featured />
            <TodaysDeal />
            <ShippingTime />
          </div>
        </div>
        <div className="mt-4">
          <button className="btn btn-lg btn-outline-success">
            {" "}
            Save Product{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
