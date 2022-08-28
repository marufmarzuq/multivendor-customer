import CartTotal from "../../../cart/components/cartCom/CartTotal";
import Coupon from "../../../cart/components/cartCom/Coupon";
import ProductDetails from "./ProductDetails";

const CartDetails = () => {
  return (
  <div>
		<h3>Cart Total</h3>
		<div className="marketplace-products">
			{/* Store wise total */}
			<div className="">
				<div><img src="#"/><span>Store Name</span></div>
				<ProductDetails/>
				<CartTotal/>
			</div>
			<div className="">
				<div><img src="#"/><span>Store Name</span></div>
				<CartTotal/>
			</div>
			{/* Coupon */}
			<div className="">
				<div>You have a coupon code?</div>
				<Coupon/>
			</div>
			{/* Grand total */}
			<CartTotal/>
		</div>
  </div>
  );
};

export default CartDetails;