import React from "react";

import "../home.css";

const AddSection = () => {
  return (
    <section className="ads my-4">
      <div className="container">
        <div className="row ads-wrapper">
          <div className="col-12 col-md-6 offset-md-1 text-center">
            <h2 className="ad-header">Fashion Jewelry</h2>
            <a href="#" className="button-outline">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddSection;
