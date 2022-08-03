import React from "react";
import "./ProductVariation.css";
import Select from "react-select";

const ProductVariation = () => {
  const colorsOptions = [
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
  ];
  const attributesOptions = [
    { value: "size", label: "Size" },
    { value: "fabric", label: "Fabric" },
    { value: "bag", label: "Bag" },
  ];
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Product Variation</div>
      <div className="widget-content-container">
        <div className="ap-single-content">
          <p>Colors</p>
          <label class="confi-switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="ap-single-content">
          <p>Select colors</p>
          <Select options={colorsOptions} />
        </div>
        <div className="ap-single-content">
          <p>Attributes</p>
          <div>
            <div>
              <Select options={attributesOptions} />
            </div>
            <span className="helper-text">
              Choose the attributes of this product and then input values of
              each attribute
            </span>
          </div>
        </div>
        <div className="ap-single-content">
          <p>Size</p>
          <input type="text" placeholder="Enter choice values" />
        </div>
        <div className="ap-single-content">
          <p>Fabric</p>
          <input type="text" placeholder="Enter choice values" />
        </div>
        <div className="ap-single-content">
          <p>Bag</p>
          <input type="text" placeholder="Enter choice values" />
        </div>
      </div>
    </div>
  );
};

export default ProductVariation;
