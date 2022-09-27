import React from "react";
import "./CashOnDelivery.css";

const CashOnDelivery = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  setFieldValue,
}) => {
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Cash On Delivery</div>
      <div className="widget-content-container">
        <div className="add-product-toggles-container">
          <span>Status</span>
          <div>
            <label className="confi-switch">
              <input
                name="cash_on_delivery"
                checked={values.cash_on_delivery == 1 ? true : false}
                onChange={(e) =>
                  setFieldValue("cash_on_delivery", e.target.checked ? 1 : 0)
                }
                type="checkbox"
              />
              <span className="slider round"></span>
            </label>
          </div>

          {errors.cash_on_delivery && touched.cash_on_delivery && (
            <small className="text-danger">{errors.cash_on_delivery}</small>
          )}
        </div>
      </div>
    </div>
  );
};

export default CashOnDelivery;
