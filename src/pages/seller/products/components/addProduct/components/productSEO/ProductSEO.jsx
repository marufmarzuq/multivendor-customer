import React from "react";
import "./ProductSEO.css";

const ProductSEO = () => {
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">SEO Meta Tags</div>
      <div className="widget-content-container">
        <div className="ap-single-content">
          <p>Meta Title</p>
          <input type="text" />
        </div>
        <div className="ap-single-content">
          <p>Description</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="ap-single-content">
          <div>
            <p>Meta Image</p>
          </div>
          <div>
            <div className="custom-browse">
              <div>Browse</div>
              <div>Choose File</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSEO;
