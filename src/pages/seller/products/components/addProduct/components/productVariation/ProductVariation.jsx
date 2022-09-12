import React, { useState } from "react";
import "./ProductVariation.css";
import Select from "react-select";
import ReactTagInput from "@pathofdev/react-tag-input";

const ProductVariation = () => {
  const [tags, setTags] = useState(["Black", "Red", "Blue", "Green"]);
  const [size, setSize] = useState([]);
  const [attribute, setAttribute] = useState("");
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

  console.log(attribute);
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Product Variation</div>
      <div className="widget-content-container">
        <div className="ap-single-content">
          <p>Colors</p>
          <label className="confi-switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="ap-single-content">
          {/* <p>Select colors</p>
          <Select options={colorsOptions} /> */}

          <p>Color *</p>

          <ReactTagInput
            tags={tags}
            removeOnBackspace={true}
            onChange={(newTags) => setTags(newTags)}
          />
        </div>
        <div className="ap-single-content">
          <p>Attributes</p>
          <div>
            <div>
              <Select
                onChange={(e) => setAttribute(e.value)}
                options={attributesOptions}
                placeholder="Attributes"
              />
            </div>
            <span className="helper-text">
              Choose the attributes of this product and then input values of
              each attribute
            </span>
          </div>
        </div>
        {attribute == "size" && (
          <div className="ap-single-content">
            <p>Size</p>
            <ReactTagInput
              tags={size}
              removeOnBackspace={true}
              onChange={(newTags) => setSize(newTags)}
            />
          </div>
        )}
        {attribute == "fabric" && (
          <div className="ap-single-content">
            <p>Fabric</p>
            <input type="text" placeholder="Enter choice values" />
          </div>
        )}
        {attribute == "bag" && (
          <div className="ap-single-content">
            <p>Bag</p>
            <input type="text" placeholder="Enter choice values" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductVariation;
