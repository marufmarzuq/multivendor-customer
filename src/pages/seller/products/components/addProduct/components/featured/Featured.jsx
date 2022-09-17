import React from "react";

const Featured = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  setFieldValue,
}) => {
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Featured</div>
      <div className="widget-content-container">
        <div className="add-product-toggles-container">
          <span>Status</span>
          <div>
            <label className="confi-switch">
              <input
                checked={values.featured}
                onChange={(e) => setFieldValue("featured", e.target.checked)}
                name="featured"
                type="checkbox"
              />
              <span className="slider round"></span>
            </label>

            {errors.featured && touched.featured && (
              <small className="text-danger">{errors.featured}</small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
