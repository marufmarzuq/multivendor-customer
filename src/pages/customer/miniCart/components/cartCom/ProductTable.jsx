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
import { priceFormat } from "../../../../../hooks/helper";
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
                    <section key={key}>
                      <div className={miniCartStyle.miniCart}>
                        <div>
                          <img src={item?.thumbnail_img} alt="" />
                        </div>
                        <div className={miniCartStyle.content}>
                          <h5>{item.name}</h5>
                          <h5>(x {item.quantity})</h5>
                          {/* Variation */}
                          { item.product_type == "variation" &&
														item.selectedVariant.map((variant,i)=>{
															return  (<span className="ms-1 me-2" key={i}>{variant.attribute} : {variant.variation}</span>)
														})
													}
                          <h6>{ priceFormat(item.itemTotal) }</h6>
                          <small>
                            {item?.variant
                              ? `( Variant: ${item?.variant} )`
                              : ""}
                          </small>
													<div><span className="me-1">Sold By : </span><span>{item.shop_name}</span></div>
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
                  <CartTotal cartTotal={cartTotal} cartTotalTitle="checkout" />
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
