import React from "react";
import cartStyle from "./cart.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
const Coupon = () => {
  return (
    <div className={cartStyle.coupon}>
      <h5 className="mb-3">Have Coupon code?</h5>
      <input type="text" placeholder="Enter coupon code" />
      <button className={`btn  ${cartStyle.couponBtn}`}>
        {" "}
        <AiOutlineCheckCircle /> Apply
      </button>
    </div>
  );
};

export default Coupon;
