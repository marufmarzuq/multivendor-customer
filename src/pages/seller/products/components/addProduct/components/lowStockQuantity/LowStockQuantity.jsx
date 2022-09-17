import React from "react";
import "./lowStockQuantity.css";
const LowStockQuantity = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
}) => {
  return (
    <div className="add-product-single-widget">
      <div className="widget-title"> Low Stock Quantity Warning</div>
      <div className="widget-content-container">
        <label className="mb-2" htmlFor="low-stock">
          <small>Quantity</small>
        </label>
        <div>
          <input
            name="low_stock_quantity"
            value={values.low_stock_quantity}
            onChange={handleChange}
            onBlur={handleBlur}
            id="low-stock"
            type="number"
            min={0}
          />
          {errors.low_stock_quantity && touched.low_stock_quantity && (
            <small className="text-danger"> {errors.low_stock_quantity} </small>
          )}
        </div>
      </div>
    </div>
  );
};

export default LowStockQuantity;
