import React from "react";
import { NavLink } from "react-router-dom";
import breadCumbStyle from "./breadcumb.module.css";
const BreadCumb = ({ data }) => {
  return (
    <div className={breadCumbStyle.breamcumbContainer}>
      <nav className="container" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <NavLink to="/"> Home </NavLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {data}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCumb;
