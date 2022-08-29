import { AiOutlineShop } from "react-icons/ai";
import CartTotal from "../../../cart/components/cartCom/CartTotal";

import cartDeailsStyle from "./checkout.module.css";
const CartDetails = () => {
  return (
    <div>
      <div className={cartDeailsStyle.cartDetails}>
        <h4 className="mb-4">Products</h4>
        <section>
          <div className="mb-4">
            <div className={cartDeailsStyle.shopName}>
              <h4>
                <span>
                  <AiOutlineShop />
                </span>
                Store Name
              </h4>
            </div>

            <div className={cartDeailsStyle.productInfo}>
              <div className={cartDeailsStyle.productInfoImg}>
                <img
                  src="https://farmart.botble.com/storage/products/2-150x150.jpg"
                  alt=""
                />
                <div className={cartDeailsStyle.imageTop}> 3</div>
              </div>
              <div>
                <h6> Pressure Cooker</h6>
                <small> ( Color: Green, Size: XXl ) </small>
              </div>

              <div className={cartDeailsStyle.productInfoPrice}>
                <h5>$ 2.15</h5>
              </div>
            </div>
            <CartTotal proceedKey="checkout" cartTotalTitle="checkout" />
          </div>
        </section>
        <section>
          <div className="mb-4">
            <div className={cartDeailsStyle.shopName}>
              <h4>
                <span>
                  <AiOutlineShop />
                </span>
                Store Name
              </h4>
            </div>

            <div className={cartDeailsStyle.productInfo}>
              <div className={cartDeailsStyle.productInfoImg}>
                <img
                  src="https://farmart.botble.com/storage/products/2-150x150.jpg"
                  alt=""
                />
                <div className={cartDeailsStyle.imageTop}> 3</div>
              </div>
              <div>
                <h6> Pressure Cooker</h6>
                <small> ( Color: Green, Size: XXl ) </small>
              </div>

              <div className={cartDeailsStyle.productInfoPrice}>
                <h5>$ 2.15</h5>
              </div>
            </div>
            <CartTotal proceedKey={"checkout"} cartTotalTitle="checkout" />
          </div>
        </section>

        <section>
          <div className="mb-4">
            {/* <div className={cartDeailsStyle.shopName}>
              <h4>
                <span>
                  <AiOutlineShop />
                </span>
                Store Name
              </h4>
            </div> */}

            {/* <div className={cartDeailsStyle.productInfo}>
              <div className={cartDeailsStyle.productInfoImg}>
                <img
                  src="https://farmart.botble.com/storage/products/2-150x150.jpg"
                  alt=""
                />
                <div className={cartDeailsStyle.imageTop}> 3</div>
              </div>
              <div>
                <h6> Pressure Cooker</h6>
                <small> ( Color: Green, Size: XXl ) </small>
              </div>

              <div className={cartDeailsStyle.productInfoPrice}>
                <h5>$ 2.15</h5>
              </div>
            </div> */}
            <CartTotal cartTotalTitle="checkout" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartDetails;
