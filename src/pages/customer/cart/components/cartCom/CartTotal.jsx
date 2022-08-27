import React from "react";
import cartStyle from "./cart.module.css";
const CartTotal = () => {
  return (
    <div>
      <div className={cartStyle.cart_totals}>
        <h5 className="mb-3">Cart totals</h5>
        <div className={cartStyle.cartTotalsRow}>
          <div>
            <span>Subtotal:</span>
          </div>
          <div>
            <span>30$</span>
          </div>
        </div>
        <div className={cartStyle.cartTotalsRow}>
          <div>
            <span>Tax:</span>
          </div>
          <div>
            {" "}
            <span>30$</span>
          </div>
        </div>
        <div className={cartStyle.cartTotalsRowLast}>
          <div>
            <span>Total:</span>
            <small>(Shipping fees not included)</small>
          </div>
          <div>
            {" "}
            <span>30$</span>
          </div>
        </div>

        <div className={`my-4  ${cartStyle.proceedBtn}`}>
          <button className="btn btn-primary">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
