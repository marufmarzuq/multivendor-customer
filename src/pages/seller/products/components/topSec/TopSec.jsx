import React from "react";
import topSecStyle from "./topSec.module.css";
import { Link } from "react-router-dom";
import { loadFromLocalStorage } from "../../../../../utils/seller/manageLocalStorage";

const TopSec = () => {
	const user = loadFromLocalStorage();
  return (
	<div className={topSecStyle.addBtnParent}>
		<h5 className="mt-3">Products</h5>
		{
			user?.verified ?
			(
				<Link className="btn btn-success" to="/seller/products/add">Add New Product</Link>
			)
			:
			(
				<p>Vendor is not verified. Please contact to administrator.</p>
			)
		}
	</div>
  );
};

export default TopSec;
