import React from "react";
import topSecStyle from "./topSec.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const TopSec = () => {
  return (
    <div>
      <h5>Products</h5>

      <div className={topSecStyle.addBtnParent}>
        <Link className="btn btn-outline-success" to="/products/add">
          Add New Product
        </Link>
      </div>
    </div>
  );
};

export default TopSec;
