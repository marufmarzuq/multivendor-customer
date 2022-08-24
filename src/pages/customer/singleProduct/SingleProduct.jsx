import React from "react";
import Slider from "./components/singleCom/Slider";
import ProductDetails from "./components/singleCom/ProductDetails";

const SingleProduct = () => {
  return (
    <section className="single-product-wrap my-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-5 mb-md-2 overflow-hidden">
            <Slider />
            {/* <ProductDetails /> */}
          </div>
          <div className="col-12 col-md-6 mb-5 mb-md-2 overflow-hidden">
            {/* <Slider /> */}
            <ProductDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;