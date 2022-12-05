import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./miniCart.css";
import { BsChevronRight, BsStar, BsStarFill } from "react-icons/bs";
import { productPlaceholder } from "../../assets";
import Rating from "react-rating";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { setMiniCart } from "../../redux/slices/miniCart";
import { useCart } from "react-use-cart";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const MiniCart = ({ product }) => {
  const navigate = useNavigate();
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

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
  console.log({
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    metadata,
  });

  return (
    <div className="mini-cart">
      <div className="mini-cart-outer-container" onClick={close}>
        <div
          className="mini-cart-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mini-cart-inner-container">
            <div className="cart-header">My Cart</div>
            <div className="mini-cart-scrollable">
              {items?.map((prod) => (
                <div className="single-mini-cart-item">
                  <div className="smci-img">
                    <img src={productPlaceholder} alt="" />
                  </div>
                  <div className="smci-right">
                    <div className="smci-min-height">
                      <div className="smcir-top">
                        <div className="smcir-name">{prod.name}</div>
                        <div className="smcir-delete">
                          <GrClose />
                        </div>
                      </div>
                      <div className="smcir-variant">Yellow / L</div>
                    </div>
                    <div className="smcir-bottom">
                      <div className="smcir-qty">
                        {prod.quantity} x ${prod.price}
                      </div>
                      <div className="smcir-item-total">${prod.itemTotal}</div>
                    </div>
                  </div>
                </div>
              ))}
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
