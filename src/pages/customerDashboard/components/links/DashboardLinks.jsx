import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import authService from "../../../customer/services/auth.service";
import linkStyle from "./links.module.css";
import { useNavigate } from "react-router-dom";
import { loadFromLocalStorage } from "../../../../utils/user/manageLocalStorage";

const DashboardLinks = () => {
  const location = useLocation();
  const [pathName, setPathName] = useState("profile");
  const user = loadFromLocalStorage();

  useEffect(() => {
    if (location.pathname.split("/").length > 2) {
      setPathName(location.pathname.split("/")[2]);
    } else {
      setPathName("profile");
    }
  }, [location.pathname]);

	// Logout
  const navigate = useNavigate();

	const logout = () => {
		authService.logout();
    navigate("/login");
  };
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
				<li className={pathName == "order-return-list" ? linkStyle.activeLink : ""}>
          <NavLink to="/dashboard/order-return-list">
            {" "}
            Order Return List
          </NavLink>
        </li>
        <li className={pathName == "order-returns" ? linkStyle.activeLink : ""}>
          <NavLink to="/dashboard/order-returns">
            {" "}
            Order Return Requests
          </NavLink>
        </li>
        <li
          className={pathName == "supports" ? linkStyle.activeLink : ""}
        >
          <NavLink to="/dashboard/supports">Supports</NavLink>
        </li>
		{
			user?.seller == false &&
			<li className={pathName == "become-vendor" ? linkStyle.activeLink : ""}>
				<NavLink to="/dashboard/become-vendor"> Become A Vendor </NavLink>
		  	</li>
		}
        <li>
			<NavLink to="/login" onClick={logout}>Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardLinks;
