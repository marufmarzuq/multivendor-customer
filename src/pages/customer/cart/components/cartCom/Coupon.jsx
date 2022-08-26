import React from "react";

const Coupon = () => {
  return (
		<div className="coupon">
			<h5 className="mb-3">Have Coupon code?</h5>
			<input type="text" placeholder="Enter coupon code" />
			<button className="btn">Apply</button>
		</div>
  );
};

export default Coupon;