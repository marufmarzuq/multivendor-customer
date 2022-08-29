import React from "react";
import cartStyle from "./cart.module.css";
const CartTotal = ({ proceedKey, cartTotalTitle }) => {
  console.log(proceedKey);
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
          <div>
            <span>$ 30</span>
          </div>
        </div>
        <div className={cartStyle.cartTotalsRow}>
          <div>
            <span>Tax:</span>
          </div>
          <div>
            {" "}
            <span>$ 30</span>
          </div>
        </div>
        <div className={cartStyle.cartTotalsRowLast}>
          <div>
            <span>Total:</span>
            <small>(Shipping fees not included)</small>
          </div>
          <div>
            {" "}
            <span>$ 30</span>
          </div>
        </div>

        {proceedKey == "checkout" ? (
          <div class="form-group mt-3 ">
            <h6
              className="pb-1"
              style={{
                fontWeight: "bold",
              }}
              for=""
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
            <button className="btn btn-primary">Proceed to checkout</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartTotal;
