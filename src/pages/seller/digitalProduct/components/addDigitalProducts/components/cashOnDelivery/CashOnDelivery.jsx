import React from "react";
import "./CashOnDelivery.css";

const CashOnDelivery = () => {
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Cash On Delivery</div>
      <div className="widget-content-container">
        <div className="add-product-toggles-container">
          <span>Status</span>
          <label className="confi-switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CashOnDelivery;
