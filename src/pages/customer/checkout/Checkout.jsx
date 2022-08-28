import React from "react";
import CheckoutForm from "./components/checkoutCom/CheckoutForm";
import CartDetails from "./components/checkoutCom/CartDetails";

import checkoutStyle from "./checkoutStyle.module.css";
import BreadCumb from "../../../common/breadcumb/BreadCumb";

const Checkout = () => {
  return (
    <div className="wrapper">
      <BreadCumb data={"Checkout"} />
      <div className={`container ${checkoutStyle.checkoutContainer}`}>
        <div className={checkoutStyle.checkoutForm}>
          <CheckoutForm />
        </div>
        <div className={checkoutStyle.cartDetails}>
          <CartDetails />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
