import React from "react";
import topSecStyle from "./topSec.module.css";

import { Link } from "react-router-dom";
const TopSec = () => {
  return (
    <div>
      {/* <h5 className={topSecStyle.head}>Products</h5> */}

      <div className={topSecStyle.addBtnParent}>
        <h5 className="mt-3">Products</h5>
        <Link className="btn btn-success" to="/seller/products/add">
          Add New Product
        </Link>
      </div>
    </div>
  );
};

export default TopSec;
