import React from "react";
import { Table } from "react-bootstrap";
import orderStyle from "./orderReturns.module.css";
import { BsArrowRightCircle } from "react-icons/bs";

const UserOrderReturns = () => {
  return (
    <div>
      <h4>Order Return Requests</h4>
			<div className={orderStyle.container}>
        <label htmlFor=""> Order ID</label>
        <input type="text" placeholder="Type Order ID" />

        <label htmlFor=""> Refund Reason </label>
        <textarea cols={"5"} rows={"5"} name="refund_reason" placeholder="Please type refund reason"></textarea>

      </div>
      <button className="btn btn-primary mt-2 "> {" "} Update <BsArrowRightCircle /></button>
    </div>
  );
};

export default UserOrderReturns;
