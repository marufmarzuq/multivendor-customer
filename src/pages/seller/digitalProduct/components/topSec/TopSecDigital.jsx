import React from "react";
import topSecStyle from "./topSec.module.css";
import { NavLink } from "react-router-dom";
import { loadFromLocalStorage } from "../../../../../utils/seller/manageLocalStorage";

const TopSecDigital = () => {
	const user = loadFromLocalStorage();
	return (
		<div>
		<div className={topSecStyle.addBtnParent}>
			<h5 className="mt-3">Digital Products</h5>
			{
				user?.verified ?
				(
					<NavLink className="btn btn-success" to="/seller/products/digital/add">Add New Digital Product</NavLink>
				)
				:
				(
					<p>Vendor is not verified. Please contact to administrator.</p>
				)
			}
		</div>
		</div>
	);
};

export default TopSecDigital;
