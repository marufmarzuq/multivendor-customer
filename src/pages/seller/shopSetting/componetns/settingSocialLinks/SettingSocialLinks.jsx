import React from "react";
import "./ProductPriceStock.css";
import Select from "react-select";

const SettingSocialLinks = () => {
  const discountOptions = [
    { value: "flat", label: "Flat" },
    { value: "percent", label: "Percent" },
  ];
  return (
    <div className="add-product-single-widget setting-social-links">
      <div className="widget-title"> Social Media Link </div>
      <div className="widget-content-container">
        <div className="ap-single-content">
          <p> Facebook </p>
          <div>
            <input type="text" placeholder="www.facebook.com" />
            <small>Insert link with https</small>
          </div>
        </div>
        <div className="ap-single-content">
          <p> Twitter </p>
          <div>
            {" "}
            <input type="text" placeholder="www.twitter.com" />
            <small>Insert link with https</small>
          </div>
        </div>
        <div className="ap-single-content">
          <p> Google </p>
          <div>
            <input type="text" placeholder="www.google.com" />
            <small>Insert link with https</small>
          </div>
        </div>
        <div className="ap-single-content">
          <p> Youtube </p>
          <div>
            <input type="text" placeholder="www.youtube.com" />
            <small>Insert link with https</small>
          </div>
        </div>
        <div className="ap-single-content">
          <p> Instagram </p>
          <div>
            <input type="text" placeholder="www.instagram.com" />
            <small>Insert link with https</small>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button className="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  );
};

export default SettingSocialLinks;
