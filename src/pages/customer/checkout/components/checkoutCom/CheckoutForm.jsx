import { useState } from "react";
import { NavLink } from "react-router-dom";
import checkoutStyle from "./checkout.module.css";
import { AiOutlineArrowLeft, AiOutlineCheckCircle } from "react-icons/ai";

const CheckoutForm = () => {
	const [paymentMethod, setPaymentMethod] = useState('cod');

  return (
    <div className="">
      <h4 className="mb-4">Shipping Information</h4>
      {/* Billing details */}
      <div className={checkoutStyle.name}>
        <label htmlFor="name"> Name : </label>
        <input type="text" placeholder="Enter your Name" id="name" />
      </div>
      <div className={checkoutStyle.emailPhone}>
        <div className={checkoutStyle.email}>
          <label htmlFor="email"> Email : </label>
          <input type="email" placeholder="Enter your Email" id="email" />
        </div>
        <div className={checkoutStyle.phone}>
          <label htmlFor="phone"> Phone : </label>
          <input type="tel" placeholder="Phone" id="phone" />
        </div>
      </div>
			<div className={checkoutStyle.address}>
				<label htmlFor="address"> Address : </label>
        <textarea name="address" id="address" rows={'5'} cols={'5'}></textarea>
      </div>
      {/* Payment method */}

      <div className="my-3">
        <h4 className="mt-4">Payment Method</h4>
        <div className="form-check">
          <input
            className="form-check-input my-2"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label ms-2 my-2" htmlFor="flexRadioDefault1">
            Stripe
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input my-2"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={(e)=>setPaymentMethod(e.target.value)}
						checked={ paymentMethod == "cod" ? 'checked' : ''}
          />
          <label className="form-check-label ms-2 my-2" htmlFor="flexRadioDefault2">
            Cache on delivery (COD)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input my-2"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
          />
          <label className="form-check-label ms-2 my-2" htmlFor="flexRadioDefault3">
            Paypal
          </label>
        </div>
      </div>

      {/* Order Notes */}
      <div className="">
        <label htmlFor="order_notes"> Order Notes : </label>
        <textarea
          rows="5"
          cols="5"
          placeholder="Notes about your order"
          id="order_notes"
        ></textarea>
      </div>

      <div className={checkoutStyle.submitBtn}>
        <div>
          <NavLink to="/">
            <AiOutlineArrowLeft /> Back to cart
          </NavLink>
        </div>

        <div className="d-flex justify-content-end">
          <NavLink to="/thank-you" className="btn btn-primary">
            <AiOutlineCheckCircle /> Checkout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
