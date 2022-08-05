import React, { useState } from "react";
import "./ProductSEO.css";
import UploadFilesModal from "../../../../../UploadFiles/UploadFilesModal";

const ProductSEO = () => {
  const [show, setShow] = useState(false);
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
            <div onClick={() => setShow(!show)} className="custom-browse">
              <div>Browse</div>
              <div>Choose File</div>
            </div>

            <UploadFilesModal show={show} setShow={setShow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSEO;
