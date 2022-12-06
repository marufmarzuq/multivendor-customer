import { useDispatch } from "react-redux";
import "./miniCart.css";
import { BsCart2, BsChevronRight } from "react-icons/bs";
import { setMiniCart } from "../../redux/slices/miniCart";
import { useCart } from "react-use-cart";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import ProdQty from "./ProdQty";
import Variations from "./Variations";

const MiniCart = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shipping = 18;

  const close = (e) => {
    e.stopPropagation();
    dispatch(setMiniCart({ open: false }));
  };

  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    metadata,
  } = useCart();
console.log(items);
  return (
    <div className="mini-cart">
      <div className="mini-cart-outer-container" onClick={close}>
        <div
          className="mini-cart-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mini-cart-inner-container">
            <div className="cart-header">My Cart</div>
            {items?.length ? (
              <>
                <div className="mini-cart-scrollable">
                  {items?.map((prod,key) => (
                    <div className="single-mini-cart-item" key={key}>
                      <div className="smci-img">
                        <img src={prod.thumbnail_img} alt={prod.name} />
                      </div>
                      <div className="smci-right">
                        <div className="smci-min-height">
                          <div className="smcir-top">
                            <div className="smcir-name">{prod.name}</div>
                            <div
                              className="smcir-delete"
                              onClick={() => removeItem(prod.id)}
                            >
                              <GrClose />
                            </div>
                          </div>
                          {
                            prod.product_type == "variation" &&
                            <Variations item={prod}/>
                          }
                        </div>
                        <div className="smcir-bottom">
                          <div className="smcir-qty">
                            <ProdQty prod={prod} /> <div>x ${prod.price}</div>
                          </div>
                          <div className="smcir-item-total">
                            ${prod.itemTotal}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mini-cart-prices">
                  <div className="mc-subtotal">
                    <div>Subtotal</div>
                    <div>${cartTotal}</div>
                  </div>
                  <div className="mc-shipping">
                    <div>Shipping</div>
                    <div>${shipping}</div>
                  </div>
                  <div className="mc-total">
                    <div>Total</div>
                    <div>${cartTotal + shipping}</div>
                  </div>
                </div>
                <div className="mini-cart-actions">
                  <div
                    className="mc-view-cart-btn"
                    onClick={() => {
                      navigate("../cart");
                      dispatch(setMiniCart({ open: false }));
                    }}
                  >
                    View Cart
                  </div>
                  <div
                    className="mc-add-to-cart-btn"
                    onClick={() => {
                      navigate("../checkout");
                      dispatch(setMiniCart({ open: false }));
                    }}
                  >
                    CHECKOUT
                  </div>
                </div>
              </>
            ) : (
              <div className="empty-mini-cart-container">
                <BsCart2 />
                <div className="emc-desc">No products in the cart.</div>
                <div className="emc-btn" onClick={close}>
                  RETURN TO SHOP
                </div>
              </div>
            )}

            <div className="mini-cart-close" onClick={close}>
              <BsChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
