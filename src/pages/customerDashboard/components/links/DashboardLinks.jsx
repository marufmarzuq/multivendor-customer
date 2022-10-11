import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import linkStyle from "./links.module.css";
const DashboardLinks = () => {
  const location = useLocation();

  const [pathName, setPathName] = useState("profile");
  useEffect(() => {
    if (location.pathname.split("/").length > 2) {
      setPathName(location.pathname.split("/")[2]);
    } else {
      setPathName("profile");
    }
  }, [location.pathname]);
  return (
    <div className={linkStyle.linksContainer}>
      <ul>
        <li className={pathName == "profile" ? linkStyle.activeLink : ""}>
          <NavLink to="/dashboard" shref="">
            Profile
          </NavLink>
        </li>
        <li className={pathName == "orders" ? linkStyle.activeLink : ""}>
          <NavLink to="/dashboard/orders"> Orders</NavLink>
        </li>

        <li className={pathName == "order-returns" ? linkStyle.activeLink : ""}>
          <NavLink to="/dashboard/order-returns">
            {" "}
            Order Return Requests
          </NavLink>
        </li>
				{/*
        <li
          className={pathName == "password-change" ? linkStyle.activeLink : ""}
        >
          <NavLink to="/dashboard/password-change"> Change Password</NavLink>
        </li> */}
        <li className={pathName == "become-vendor" ? linkStyle.activeLink : ""}>
          <NavLink to="/dashboard/become-vendor"> Become A Vendor </NavLink>
        </li>
        <li>
          <a href=""> Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardLinks;
