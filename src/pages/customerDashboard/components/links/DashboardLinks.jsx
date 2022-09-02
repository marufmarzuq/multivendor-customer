import React from "react";
import { NavLink } from "react-router-dom";
import linkStyle from "./links.module.css";
const DashboardLinks = () => {
  return (
    <div className={linkStyle.linksContainer}>
      <ul>
        <li>
          <NavLink to="/dashboard" shref="">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/orders"> Orders</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/order-returns">
            {" "}
            Order Return Requests
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/password-change"> Change Password</NavLink>
        </li>
        <li>
          <NavLink to="/seller-request"> Become A Vendor </NavLink>
        </li>
        <li>
          <a href=""> Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardLinks;
