import {Fragment, useEffect,useState} from "react";
import CheckoutForm from "./components/checkoutCom/CheckoutForm";
import CartDetails from "./components/checkoutCom/CartDetails";
import checkoutStyle from "./checkoutStyle.module.css";
import BreadCumb from "../../../common/breadcumb/BreadCumb";
import { useCart } from "react-use-cart";
import { storeCart } from "../../../hooks/helper";
import { NavLink } from "react-router-dom";

const Checkout = () => {
	const [storesCart, setStoreCart] = useState([]);

	const {
    isEmpty,
    totalUniqueItems,
    items,
		cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

	useEffect(() => {
		setStoreCart(storeCart(items))
	}, []);

  return (
    <div className="wrapper">
      <BreadCumb data={"Checkout"} />
      <div className={`container ${checkoutStyle.checkoutContainer}`}>
				{
					!isEmpty ?
					(
						<Fragment>
							<div className={checkoutStyle.checkoutForm}>
								<CheckoutForm storesCart={storesCart} cartTotal={cartTotal} />
							</div>
							<div className={checkoutStyle.cartDetails}>
								<CartDetails storesCart={storesCart} cartTotal={cartTotal} />
							</div>
						</Fragment>
					) :
					(
							<h6>Your Cart is empty. Go to <NavLink to={`/shop`}>Shop</NavLink></h6>
					)
				}
      </div>

    </div>
  );
};

export default Checkout;
