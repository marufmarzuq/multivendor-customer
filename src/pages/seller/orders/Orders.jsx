import React, { useState, useEffect } from "react";
import axios from 'axios';
import OrderList from "./components/ordersList/OrderList";
import ordersStyle from "./orders.module.css";
import { API_URL } from "../services/Api/api";
import authHeader from "../services/auth-header";

const Orders = () => {
    return (
		<div className={ordersStyle.spacing}>
			<OrderList/>
		</div>
    );
};

export default Orders;
