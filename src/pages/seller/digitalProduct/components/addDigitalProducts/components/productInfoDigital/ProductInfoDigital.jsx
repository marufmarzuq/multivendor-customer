import React, { useState } from "react";
import "./ProductInformation.css";
import Select from "react-select";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import UploadFilesModal from "../../../../../UploadFiles/UploadFilesModal";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ProductInfoDigital = () => {
  const [tags, setTags] = useState(["example tag"]);
  const [show, setShow] = useState(false);

  return (
    <div className="add-product-single-widget">
      <div className="widget-title">General</div>
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

          <label>
            <span>Tags</span>
            <i>*</i>
          </label>
          <ReactTagInput
            tags={tags}
            removeOnBackspace={true}
            onChange={(newTags) => setTags(newTags)}
          />

          <label>
            <span> Add Files</span>
          </label>
          <div onClick={() => setShow(!show)} className="custom-browse">
            <div>Browse</div>
            <div>Choose File</div>
          </div>
          <UploadFilesModal show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
};

export default ProductInfoDigital;
