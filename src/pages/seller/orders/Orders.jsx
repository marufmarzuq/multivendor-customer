import React from "react";
import OrderList from "./components/ordersList/OrderList";
import ordersStyle from "./orders.module.css";

const Orders = () => {
    return (
		<div className={ordersStyle.spacing}>
			<OrderList />
		</div>
    );
};

export default Orders;
