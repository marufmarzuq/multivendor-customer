import { NavLink } from "react-router-dom";
import checkoutStyle from "./checkout.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
const CheckoutForm = () => {
  return (
    <div className="">
      <h4 className="mb-4">Shipping Information</h4>
      {/* Billing details */}
      <div className={checkoutStyle.name}>
        {/* <label htmlFor="name"> Name : </label> */}
        <input type="text" placeholder="Enter your Name" id="name" />
      </div>
      <div className={checkoutStyle.emailPhone}>
        <div className={checkoutStyle.email}>
          {/* <label htmlFor="email"> Email : </label> */}
          <input type="email" placeholder="Enter your Email" id="email" />
        </div>
        <div className={checkoutStyle.phone}>
          {/* <label htmlFor="phone"> Phone : </label> */}
          <input type="number" placeholder="Phone" id="phone" />
        </div>
      </div>
      {/* Payment method */}

      <div className="my-3">
        <h4 className="mt-4">Payment Method</h4>
        <div class="form-check">
          <input
            class="form-check-input my-2"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label ms-2 my-2" for="flexRadioDefault1">
            Stripe
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input my-2"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label ms-2 my-2" for="flexRadioDefault2">
            Cache on delivery (COD)
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input my-2"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
          />
          <label class="form-check-label ms-2 my-2" for="flexRadioDefault3">
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
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
