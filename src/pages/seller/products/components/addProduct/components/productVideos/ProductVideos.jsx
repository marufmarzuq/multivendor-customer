import React from "react";
import "./ProductVideos.css";
import Select from "react-select";

const ProductVideos = () => {
  const options = [
    { value: "youtube", label: "Youtube" },
    { value: "dailymottion", label: "Dailymottion" },
    { value: "vimeo", label: "Vimeo" },
  ];
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Product Videos</div>
      <div className="widget-content-container">
        <div className="ap-single-content">
          <p>Video Provider</p>
          <Select
            options={options}
            defaultValue={{ value: "youtube", label: "Youtube" }}
          />
        </div>
        <div className="ap-single-content">
          <p>Video Link</p>
          <div>
            <div>
              <input placeholder="video link" type="text" />
            </div>
            <span className="helper-text">
              Use proper link without extra parameter. Don't use short share
              link/embeded iframe code.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVideos;
