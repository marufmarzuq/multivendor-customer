import React from "react";
import { AiOutlineArrowLeft, AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import cartStyle from "./cart.module.css";
const ActionButton = () => {
  return (
    <div className={`my-5 ${cartStyle.actionButton}`}>
      <NavLink to={`/shop`}>
				<button className="btn mb-2 md-md-0 btn-outline-primary mr-3">
					{" "}
					<AiOutlineArrowLeft /> Continue Shopping
				</button>
			</NavLink>
      <NavLink to={`/`}>
				<button className="btn mb-2 md-md-0 btn-outline-primary">
				{" "}
        <AiOutlineHome /> Back to Home
      </button>
      </NavLink>
    </div>
  );
};

export default ActionButton;
