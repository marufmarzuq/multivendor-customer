import React from "react";

const StockVisibility = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  setFieldValue,
}) => {
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Stock Visibility State</div>
      <div className="widget-content-container">
        <div className="add-product-toggles-container">
          <span>Show Stock Quantity</span>
          <label className="confi-switch">
            <input
              type="radio"
              name="stock_visibility_state"
              value="quantity"
              onChange={(e) =>
                setFieldValue("stock_visibility_state", e.target.value)
              }
            />
            <span className="slider round"></span>
          </label>
          <span>Show Stock With Text Only</span>
          <label className="confi-switch">
            <input
              onChange={(e) =>
                setFieldValue("stock_visibility_state", e.target.value)
              }
              type="radio"
              name="stock_visibility_state"
              value="text"
            />
            <span className="slider round"></span>
          </label>
          <span>Hide Stock</span>
          <label className="confi-switch">
            <input
              onChange={(e) =>
                setFieldValue("stock_visibility_state", e.target.value)
              }
              type="radio"
              name="stock_visibility_state"
              value="hide"
            />
            <span className="slider round"></span>
          </label>
        </div>
        {errors.stock_visibility_state && touched.stock_visibility_state && (
          <small className="text-danger">{errors.stock_visibility_state}</small>
        )}
      </div>
    </div>
  );
};

export default StockVisibility;
