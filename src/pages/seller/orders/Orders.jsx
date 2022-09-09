import React from "react";
import OrderList from "./components/ordersList/OrderList";
import ordersStyle from "./orders.module.css";

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
			<OrderList />
		</div>
    );
};

export default Orders;
