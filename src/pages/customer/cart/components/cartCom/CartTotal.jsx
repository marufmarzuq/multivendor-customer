import React from "react";

const CartTotal = () => {
  return (
		<div className="cart_totals">
			<h5 className="mb-3">Cart totals</h5>
			<div className="">
				<span>Subtotal:</span>
				<span>30$</span>
			</div>
			<div className="">
				<span>Tax:</span>
				<span>30$</span>
			</div>
			<div className="">
				<span>Total:</span>
				<small>(Shipping fees not included)</small>
				<span>30$</span>
			</div>
		</div>
  );
};

export default CartTotal;