import React from "react";

const ShopPageSettings = (
  submiting,
  handleSubmit,
  handleChange,
  values,
  errors,
  touched,
  setFieldValue
) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="add-product-single-widget">
        <div className="widget-title">Basic Info</div>
        <div className="widget-content-container">
          <div className="product-informaiton-form">
            <label htmlFor="name">
              <span>Categories</span>
              <i>*</i>
            </label>
            <div>
              <input name="name" type="text" id="name" />
            </div>
            <label htmlFor="about_shop">
              <span>About Shop</span>
            </label>
            <div>
              <textarea name="about_shop" type="text" id="name" rows={5} />
            </div>
          </div>

          <div className="d-flex justify-content-end mt-4 ">
            <button
              disabled={submiting}
              onClick={() => handleSubmit()}
              type="submit"
              className="btn btn-success"
            >
              {submiting ? (
                <div>
                  <div
                    className="spinner-border spinner-border-sm me-1"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  Save
                </div>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ShopPageSettings;
