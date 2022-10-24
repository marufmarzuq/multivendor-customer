import {useEffect,useState} from "react";
import CheckoutForm from "./components/checkoutCom/CheckoutForm";
import CartDetails from "./components/checkoutCom/CartDetails";
import checkoutStyle from "./checkoutStyle.module.css";
import BreadCumb from "../../../common/breadcumb/BreadCumb";
import { useCart } from "react-use-cart";
import { storeCart } from "../../../hooks/helper";

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
        <div className={checkoutStyle.checkoutForm}>
          <CheckoutForm />
        </div>
        <div className={checkoutStyle.cartDetails}>
          <CartDetails storesCart={storesCart} items={items} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
