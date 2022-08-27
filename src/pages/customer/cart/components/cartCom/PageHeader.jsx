import React from "react";
import { NavLink } from "react-bootstrap";

const PageHeader = () => {
  return (
		<div className="">
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><NavLink>Home</NavLink></li>
					<li class="breadcrumb-item active" aria-current="page">Shopping Cart</li>
				</ol>
			</nav>
			<div className="row">
				<h1 className="text-center">Shopping Cart</h1>
			</div>
		</div>
  );
};

export default PageHeader;