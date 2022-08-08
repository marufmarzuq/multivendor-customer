import React from "react";
import "./lowStockQuantity.css";
const LowStockQuantity = () => {
  return (
    <div className="add-product-single-widget">
      <div className="widget-title"> Low Stock Quantity Warning</div>
      <div className="widget-content-container">
        <label className="mb-2" htmlFor="low-stock">
          <small>Quantity</small>
        </label>
        <input id="low-stock" type="number" min={0} />
      </div>
    </div>
  );
};

export default LowStockQuantity;
