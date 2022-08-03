import React from "react";

const Featured = () => {
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Featured</div>
      <div className="widget-content-container">
        <div className="add-product-toggles-container">
          <span>Status</span>
          <label class="confi-switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Featured;
