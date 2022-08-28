import CartTotal from "../../../cart/components/cartCom/CartTotal";

const CartDetails = () => {
  return (
  <div>
		<h3>Cart Total</h3>
		<div className="marketplace-products">
			<div className="">
				<div><img src="#"/><span>Store Name</span></div>
				<CartTotal/>
			</div>
			<div className="">
				<div><img src="#"/><span>Store Name</span></div>
				<CartTotal/>
			</div>
		</div>
  </div>
  );
};

export default CartDetails;