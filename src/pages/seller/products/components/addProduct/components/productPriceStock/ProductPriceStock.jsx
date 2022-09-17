import React from "react";
import "./ProductPriceStock.css";
import Select from "react-select";

const ProductPriceStock = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  setFieldValue,
}) => {
  const discountOptions = [
    { value: "flat", label: "Flat" },
    { value: "percent", label: "Percent" },
  ];
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Product Price + Stock</div>
      <div className="widget-content-container">
        <div className="ap-single-content">
          <p>Unit price *</p>
          <div>
            <input
              name="unit_price"
              onBlur={handleBlur}
              value={values.unit_price}
              onChange={handleChange}
              type="number"
              min={0}
            />

            {errors.unit_price && touched.unit_price && (
              <small className="text-danger"> {errors.unit_price} </small>
            )}
          </div>
        </div>
        <div className="ap-single-content">
          <p>Purchase price *</p>
          <div>
            <input
              name="purchase_price"
              onBlur={handleBlur}
              value={values.purchase_price}
              onChange={handleChange}
              type="number"
              min={0}
            />

            {errors.purchase_price && touched.purchase_price && (
              <small className="text-danger"> {errors.purchase_price} </small>
            )}
          </div>
        </div>
        <div className="ap-single-content">
          <p>Discount type *</p>
          <div>
            <Select
              name="discount_type"
              onBlur={handleBlur}
              id="discount_type"
              onChange={(option) =>
                setFieldValue("discount_type", option.value)
              }
              options={discountOptions}
            />

            {errors.discount_type && touched.discount_type && (
              <small className="text-danger"> {errors.discount_type} </small>
            )}
          </div>
        </div>
        <div className="ap-single-content">
          <p>Discount *</p>
          <div>
            <input
              name="discount"
              onBlur={handleBlur}
              value={values.discount}
              onChange={handleChange}
              type="number"
              min={0}
            />

            {errors.discount && touched.discount && (
              <small className="text-danger"> {errors.discount} </small>
            )}
          </div>
        </div>
        <div className="ap-single-content">
          <p>Quantity *</p>
          <div>
            <input
              name="quantity"
              onBlur={handleBlur}
              value={values.quantity}
              onChange={handleChange}
              type="number"
              min={0}
            />

            {errors.quantity && touched.quantity && (
              <small className="text-danger"> {errors.quantity} </small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPriceStock;
