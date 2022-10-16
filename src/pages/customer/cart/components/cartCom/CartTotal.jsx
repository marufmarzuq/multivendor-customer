import React from "react";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import cartStyle from "./cart.module.css";
const CartTotal = ({ proceedKey, cartTotalTitle, total = 0 }) => {
  return (
    <div>
      <div className={cartStyle.cart_totals}>
        {cartTotalTitle != "checkout" ? (
          <h5 className="mb-3">Cart totals</h5>
        ) : (
          ""
        )}
        <div className={cartStyle.cartTotalsRow}>
          <div>
            <span>Subtotal:</span>
          </div>
          <div className="d-flex justify-content-end">
            <span>$ {total}</span>
          </div>
        </div>
        <div className={cartStyle.cartTotalsRow}>
          <div>
            <span>Tax (2%):</span>
          </div>
          <div className="d-flex justify-content-end">
            <span>$ {(total * 2) / 100} </span>
          </div>
        </div>
        <div className={cartStyle.cartTotalsRowLast}>
          <div>
            <span>Total:</span>
            <small>(Shipping fees not included)</small>
          </div>
          <div className="d-flex justify-content-end">
            <span>$ {total + (total * 2) / 100}</span>
          </div>
        </div>

        {proceedKey == "checkout" ? (
          <div class="form-group mt-3 ">
            <h6
              className="pb-1"
              style={{
                fontWeight: "bold",
              }}
              htmlFor=""
            >
              Shipping Method:
            </h6>
            <select class="form-control" name="" id="">
              <option>Free Shipping</option>
              <option>Economy</option>
              <option>Ultra Fast</option>
            </select>
          </div>
        ) : (
          ""
        )}

        {proceedKey == "cart" ? (
          <div className={`my-4  ${cartStyle.proceedBtn}`}>
            <button className="btn btn-primary">
              {" "}
              <AiOutlineDeliveredProcedure /> Proceed to checkout
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartTotal;
