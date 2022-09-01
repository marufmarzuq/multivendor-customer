import {
  AiOutlineCheckCircle,
  AiOutlineDelete,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import CartTotal from "../../../cart/components/cartCom/CartTotal";
import miniCartStyle from "../../miniCart.module.css";
const ProductTable = () => {
  return (
    <>
      <div className="pt-3">
        <div className={miniCartStyle.miniCartContainer}>
          <section>
            <div className={miniCartStyle.miniCart}>
              <div>
                <img
                  src="https://farmart.botble.com/storage/products/6-150x150.jpg"
                  alt=""
                />
              </div>
              <div className={miniCartStyle.content}>
                <h5> Nikon Camera </h5>
                <h6> $ 100.00 </h6>
                <small>( color: black )</small>
              </div>
              <div className="d-flex justify-content-end">
                <button>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          </section>

          <section>
            <div className={miniCartStyle.miniCart}>
              <div>
                <img
                  src="https://farmart.botble.com/storage/products/6-150x150.jpg"
                  alt=""
                />
              </div>
              <div className={miniCartStyle.content}>
                <h5> Nikon Camera </h5>
                <h6> $ 100.00 </h6>
                <small>( color: black )</small>
              </div>
              <div className="d-flex justify-content-end">
                <button>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          </section>

          <section>
            <div className={miniCartStyle.miniCart}>
              <div>
                <img
                  src="https://farmart.botble.com/storage/products/6-150x150.jpg"
                  alt=""
                />
              </div>
              <div className={miniCartStyle.content}>
                <h5> Nikon Camera </h5>
                <h6> $ 100.00 </h6>
                <small>( color: black )</small>
              </div>
              <div className="d-flex justify-content-end">
                <button>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4">
              <CartTotal cartTotalTitle="checkout" />
            </div>
            <div className={miniCartStyle.buttons}>
              <div>
                {" "}
                <button className="btn btn-primary">
                  <NavLink to="cart">
                    {" "}
                    <AiOutlineShoppingCart /> View Cart
                  </NavLink>
                </button>
              </div>

              <div className="d-flex justify-content-end">
                <button className="btn btn-primary">
                  <NavLink to="/checkout">
                    {" "}
                    <AiOutlineCheckCircle /> Checkout
                  </NavLink>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
