import React from "react";
import topSecStyle from "./topSec.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const TopSecDigital = () => {
  return (
    <div>
      <h5>Digital Products</h5>

      <div className={topSecStyle.addBtnParent}>
        <Link to="add">
          <div className={topSecStyle.addBtn}>
            <AiOutlinePlusCircle className={topSecStyle.icon} />
            <h6 className="mt-3">Add New Digital Product </h6>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopSecDigital;
