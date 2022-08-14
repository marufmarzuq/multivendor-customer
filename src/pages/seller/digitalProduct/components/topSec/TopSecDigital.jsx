import React from "react";
import topSecStyle from "./topSec.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const TopSecDigital = () => {
  return (
    <div>
      <h5>Digital Products</h5>

      <div className={topSecStyle.addBtnParent}>
        <Link className="btn btn-outline-success" to="/digital-products/add">
          Add New Digital Product
        </Link>
      </div>
    </div>
  );
};

export default TopSecDigital;
