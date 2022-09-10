import React from "react";
import "./ProductPriceStock.css";
import Select from "react-select";

const SettingSocialLinks = ({ values, handleSubmit, handleChange }) => {
  const discountOptions = [
    { value: "flat", label: "Flat" },
    { value: "percent", label: "Percent" },
  ];
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="add-product-single-widget setting-social-links">
        <div className="widget-title"> Social Media Link </div>
        <div className="widget-content-container">
          <div className="ap-single-content">
            <p> Facebook </p>
            <div>
              <input
                name="facebook"
                onChange={handleChange}
                value={values.facebook}
                type="text"
                placeholder="www.facebook.com"
              />
              <small>Insert link with https</small>
            </div>
          </div>
          <div className="ap-single-content">
            <p> Twitter </p>
            <div>
              {" "}
              <input
                name="twitter"
                onChange={handleChange}
                value={values.twitter}
                type="text"
                placeholder="www.twitter.com"
              />
              <small>Insert link with https</small>
            </div>
          </div>
          <div className="ap-single-content">
            <p> Google </p>
            <div>
              <input
                name="google"
                onChange={handleChange}
                value={values.google}
                type="text"
                placeholder="www.google.com"
              />
              <small>Insert link with https</small>
            </div>
          </div>
          <div className="ap-single-content">
            <p> Youtube </p>
            <div>
              <input
                name="youtube"
                onChange={handleChange}
                value={values.youtube}
                type="text"
                placeholder="www.youtube.com"
              />
              <small>Insert link with https</small>
            </div>
          </div>
          <div className="ap-single-content">
            <p> Instagram </p>
            <div>
              <input
                name="instagram"
                onChange={handleChange}
                value={values.instagram}
                type="text"
                placeholder="www.instagram.com"
              />
              <small>Insert link with https</small>
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="btn btn-success"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SettingSocialLinks;
