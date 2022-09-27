import React from "react";

const TodaysDeal = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  setFieldValue,
}) => {
  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Todays Deal</div>
      <div className="widget-content-container">
        <div className="add-product-toggles-container">
          <span>Status</span>
          <div>
            <label className="confi-switch">
              <input
                checked={values.todays_deal == 1 ? true : false}
                name="todays_deal"
                onChange={(e) =>
                  setFieldValue("todays_deal", e.target.checked ? 1 : 0)
                }
                type="checkbox"
              />
              <span className="slider round"></span>
            </label>

            {errors.todays_deal && touched.todays_deal && (
              <small className="text-danger">{errors.todays_deal}</small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysDeal;
