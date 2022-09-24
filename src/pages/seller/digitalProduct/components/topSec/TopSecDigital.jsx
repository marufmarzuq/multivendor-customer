import React from "react";
import topSecStyle from "./topSec.module.css";

import { NavLink } from "react-router-dom";
const TopSecDigital = () => {
  return (
    <div>
      <div className={topSecStyle.addBtnParent}>
        <h5 className="mt-3">Digital Products</h5>
        <NavLink className="btn btn-success" to="/seller/products/digital/add">
          Add New Digital Product
        </NavLink>
      </div>
    </div>
  );
};

export default TopSecDigital;
