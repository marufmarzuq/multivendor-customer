import React from "react";
import CheckoutForm from "./components/checkoutCom/CheckoutForm";
import CartDetails from "./components/checkoutCom/CartDetails";
import { NavLink } from "react-router-dom";

const Checkout = () => {
  return (
		<div className="wrapper">
			<div className="container">
				<CheckoutForm/>
				<CartDetails/>
			</div>
		</div>
  );
};

export default Checkout;
