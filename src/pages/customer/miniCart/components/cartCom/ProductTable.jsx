import {
  AiOutlineCheckCircle,
  AiOutlineDelete,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiSad } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import CartTotal from "../../../cart/components/cartCom/CartTotal";
import miniCartStyle from "../../miniCart.module.css";
const ProductTable = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  return (
    <>
      <div className="pt-3">
        <div className={miniCartStyle.miniCartContainer}>
          {isEmpty ? (
            <p className={miniCartStyle.noItem}>
              Your Cart is Empty
              <BiSad className="ms-2" />
            </p>
          ) : (
            <div>
              <section>
                {items.map((item, key) => {
                  return (
                    <section>
                      <div className={miniCartStyle.miniCart} key={key}>
                        <div>
                          <img src={item?.thumbnail_img} alt="" />
                        </div>
                        <div className={miniCartStyle.content}>
                          <h5>{item.name}</h5>
                          <h5>(x {item.quantity})</h5>
                          <h6> $ {item.itemTotal} </h6>
                          <small>
                            {item?.variant
                              ? `( Variant: ${item?.variant} )`
                              : ""}
                          </small>
                        </div>
                        <div className={miniCartStyle.cartIncreaseButton}>
                          <button
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <AiOutlineMinusCircle />
                          </button>
                          <button
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <AiOutlinePlusCircle />
                          </button>

                          <button onClick={() => removeItem(item.id)}>
                            <AiOutlineDelete />
                          </button>
                        </div>
                      </div>
                    </section>
                  );
                })}
              </section>
              <section>
                <div className="mb-4">
                  <CartTotal total={cartTotal} cartTotalTitle="checkout" />
                </div>
                <div className={miniCartStyle.buttons}>
                  <div>
                    <button className="btn btn-primary">
                      <NavLink to="cart">
                        <AiOutlineShoppingCart /> View Cart
                      </NavLink>
                    </button>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary">
                      <NavLink to="/checkout">
                        <AiOutlineCheckCircle /> Checkout
                      </NavLink>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductTable;
