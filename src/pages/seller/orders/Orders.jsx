import React, { useState, useEffect } from "react";
import axios from 'axios';
import OrderList from "./components/ordersList/OrderList";
import ordersStyle from "./orders.module.css";
import { API_URL } from "../services/Api/api";
import authHeader from "../services/auth-header";

const Orders = () => {
    const [orderData, setOrderData] = useState([]);
		const [loading, setLoading] = useState(false);

    useEffect(() => {
			setLoading(true);

			axios.get(`${API_URL}/orders?search_value=${null}&sort_by=price_high_to_low&per_page=${10}&page=${1}`, {
				headers: {
				"Authorization": authHeader(),
				}
			}).then((response) => {
				setLoading(false);
				setOrderData(response?.data?.data);
			})
    }, []);

    return (
		<div className={ordersStyle.spacing}>
			<OrderList orderData={orderData} loading={loading}/>
		</div>
    );
};

export default Orders;
