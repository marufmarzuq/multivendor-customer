import React from "react";
import ProductTable from "./components/cartCom/ProductTable";
import ActionButton from "./components/cartCom/ActionButton";
import Coupon from "./components/cartCom/Coupon";
import CartTotal from "./components/cartCom/CartTotal";
import OrderBump from "./components/cartCom/OrderBump";

const Cart = () => {
  return (
			<div className="wrapper">
				<div className="container">
					<ProductTable/>
					<ActionButton/>
					<div className="row">
						<div className="">
							<div className=""><Coupon/></div>
							<div className=""><CartTotal/></div>
						</div>
					</div>
					<OrderBump/>
				</div>
			</div>
  );
};

export default Cart;
