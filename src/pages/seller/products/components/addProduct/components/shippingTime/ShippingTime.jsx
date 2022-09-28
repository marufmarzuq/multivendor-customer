import React from "react";
import "./ShippingTime.css";

const ShippingTime = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  setFieldValue,
}) => {
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Estimate Shipping Time </div>
      <div className="widget-content-container">
        <div className="shipping-input-container">
          <input
            name="est_shipping_days"
            value={values.est_shipping_days}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            min={1}
            placeholder="Enter Shipping Time"
          />
          <span>Days</span>
        </div>

        {errors.est_shipping_days && touched.est_shipping_days && (
          <small className="text-danger">{errors.est_shipping_days}</small>
        )}
      </div>
    </div>
  );
};

export default ShippingTime;
