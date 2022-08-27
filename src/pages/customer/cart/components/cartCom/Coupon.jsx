import React from "react";
import cartStyle from "./cart.module.css";
const Coupon = () => {
  return (
    <div className={cartStyle.coupon}>
      <h5 className="mb-3">Have Coupon code?</h5>
      <input type="text" placeholder="Enter coupon code" />
      <button className={`btn  ${cartStyle.couponBtn}`}>Apply</button>
    </div>
  );
};

export default Coupon;
