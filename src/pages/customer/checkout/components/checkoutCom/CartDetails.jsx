import { AiOutlineShop } from "react-icons/ai";
import CartTotal from "../../../cart/components/cartCom/CartTotal";
import cartDeailsStyle from "./checkout.module.css";
import ShopCart from "./ShopCart";

const CartDetails = ({storesCart,cartTotal}) => {
  return (
    <div>
      <div className={cartDeailsStyle.cartDetails}>
        <h4 className="mb-4">Products</h4>
        {
        storesCart.length > 0 &&
					storesCart.map((items,key)=>{
						return <ShopCart items={items} key={key}/>
					})
        }
        <section>
          <div className="mb-4">
						<h4 className="mb-4">GrandTotal</h4>
            <CartTotal cartTotalTitle="checkout" cartTotal={cartTotal}  />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartDetails;
