import React, { useState } from "react";
import "./ProductInformation.css";
import Select from "react-select";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ProductInformation = () => {
  const [tags, setTags] = useState(["example tag"]);
  console.log(tags);
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Product Information</div>
      <div className="widget-content-container">
        <div className="product-informaiton-form">
          <label htmlFor="product__name">
            <span>Product Name</span>
            <i>*</i>
          </label>
          <input id="product__name" type="text" />
          <label htmlFor="product__category">
            <span>Category</span>
            <i>*</i>
          </label>
          <Select options={options} placeholder="All Categories" />
          <label htmlFor="product__Brand">
            <span>Brand</span>
          </label>
          <Select options={options} placeholder="All Categories" />
          <label htmlFor="product__unit">
            <span>Unit</span>
            <i>*</i>
          </label>
          <input id="product__unit" type="text" />
          <label htmlFor="product__unit">
            <span>Minimum Qty</span>
            <i>*</i>
          </label>
          <input id="product__unit" type="number" min={1} defaultValue={1} />
          <label>
            <span>Tags</span>
            <i>*</i>
          </label>
          <ReactTagInput
            tags={tags}
            removeOnBackspace={true}
            onChange={(newTags) => setTags(newTags)}
          />
          <label htmlFor="product__Brand">
            <span>Barcode</span>
          </label>
          <input id="product__Brand" type="text" />
          <label>
            <span>Refundable</span>
          </label>
          <label class="confi-switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
