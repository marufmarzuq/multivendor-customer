import { AiOutlineShop } from "react-icons/ai";
import CartTotal from "../../../cart/components/cartCom/CartTotal";
import cartDeailsStyle from "./checkout.module.css";
const CartDetails = () => {
  return (
    <div>
      {/* <h3>Cart Total</h3> */}
      <div className={cartDeailsStyle.cartDetails}>
        <h4 className="mb-4">Products</h4>
        <div className="mb-4">
          {/* <div><img src="#"/><span>Store Name</span></div> */}
          <div className={cartDeailsStyle.shopName}>
            <h4>
              {" "}
              <span>
                <AiOutlineShop />
              </span>{" "}
              Store Name
            </h4>
          </div>
          <CartTotal />
        </div>
        <div className="mb-4">
          {/* <div><img src="#"/><span>Store Name</span></div> */}
          <div className={cartDeailsStyle.shopName}>
            <h4>
              {" "}
              <span>
                <AiOutlineShop />
              </span>{" "}
              Store Name
            </h4>
          </div>
          <CartTotal />
        </div>
        {/* <div className="">
				<div><img src="#"/><span>Store Name</span></div>
				<CartTotal/>
			</div> */}
      </div>
    </div>
  );
};

export default CartDetails;
