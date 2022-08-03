import React from "react";
import topSecStyle from "./topSec.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const TopSec = () => {
  return (
    <div>
      <h5>Products</h5>

      <div className={topSecStyle.addBtnParent}>
        <Link to="add-products">
          <div className={topSecStyle.addBtn}>
            <AiOutlinePlusCircle className={topSecStyle.icon} />
            <h6 className="mt-3">Add New Product</h6>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopSec;
