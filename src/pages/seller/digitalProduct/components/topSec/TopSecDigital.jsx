import React from "react";
import topSecStyle from "./topSec.module.css";

import { NavLink } from "react-router-dom";
const TopSecDigital = () => {
  return (
    <div>
      <h5>Digital Products</h5>

      <div className={topSecStyle.addBtnParent}>
        <NavLink className="btn btn-outline-success" to="/products/digital/add">
          Add New Digital Product
        </NavLink>
      </div>
    </div>
  );
};

export default TopSecDigital;
