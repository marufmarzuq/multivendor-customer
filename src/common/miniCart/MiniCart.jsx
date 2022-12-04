import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./miniCart.css";
import { BsChevronRight, BsStar, BsStarFill } from "react-icons/bs";
import { setQuickView } from "../../redux/slices/quickView";
import { productPlaceholder } from "../../assets";
import Rating from "react-rating";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const MiniCart = ({ product }) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const close = (e) => {
    e.stopPropagation();
    dispatch(setQuickView({ open: false, product: null }));
  };
  return (
    <div className="quick-view">
      <div className="quick-view-outer-container" onClick={close}>
        <div
          className="quick-view-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="quick-view-inner-container">
            <div className="qvi-scrollable">
              <div className="qvi-image">
                <img src={productPlaceholder} alt="" />
              </div>
              <div className="qvi-name">{product?.name}</div>
              <Rating
                fullSymbol={<BsStarFill className="icon" color="#2e73e8" />}
                emptySymbol={<BsStar className="icon" />}
                initialRating={product?.total_rating}
                readonly
              />
              <div className="qvi-price">${product?.price}</div>
              <div className="qvi-short-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus nobis id placeat.
              </div>
              <div>
                <div className="qvi-color-title">Color</div>
                <div className="qvi-variants">
                  <div
                    className={`qvi-single-color-btn red ${
                      color === "red" && "active"
                    }`}
                    onClick={() => setColor("red")}
                  ></div>
                  <div
                    className={`qvi-single-color-btn blue ${
                      color === "blue" && "active"
                    }`}
                    onClick={() => setColor("blue")}
                  ></div>
                  <div
                    className={`qvi-single-color-btn green ${
                      color === "green" && "active"
                    }`}
                    onClick={() => setColor("green")}
                  ></div>
                </div>
                <div className="qvi-color-title">Size</div>
                <div className="qvi-variants">
                  <div
                    className={`qvi-single-size-btn ${
                      size === "M" && "active"
                    }`}
                    onClick={() => setSize("M")}
                  >
                    M
                  </div>
                  <div
                    className={`qvi-single-size-btn ${
                      size === "L" && "active"
                    }`}
                    onClick={() => setSize("L")}
                  >
                    L
                  </div>
                  <div
                    className={`qvi-single-size-btn ${
                      size === "XL" && "active"
                    }`}
                    onClick={() => setSize("XL")}
                  >
                    XL
                  </div>
                </div>
              </div>
              <div className="qvi-actions">
                <div className="qvi-qty-container">
                  <button
                    disabled={qty <= 1}
                    onClick={() => setQty(Number(qty) - 1)}
                  >
                    <HiOutlineChevronLeft />
                  </button>
                  <input
                    type="number"
                    min={1}
                    defaultValue={1}
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  />
                  <button onClick={() => setQty(Number(qty) + 1)}>
                    <HiOutlineChevronRight />
                  </button>
                </div>
                <div className="qvi-add-to-cart-btn">ADD TO CART</div>
                <div>
                  <div className="qvi-extras">
                    <span>SKU: </span>
                    <span>FSH_ILVX4</span>
                  </div>
                  <div className="qvi-extras">
                    <span>Categories: </span>
                    {["Fleece", "Denim"].map((cat, i) => (
                      <span key={i}>
                        {["Fleece", "Denim"].length !== i + 1 ? cat + "," : cat}
                      </span>
                    ))}
                  </div>
                  <div className="qvi-extras">
                    <span>Tags: </span>
                    {product?.tags[0] &&
                      product?.tags.map((tag, i) => (
                        <span key={i}>
                          {product?.tags.length !== i + 1 ? tag + "," : tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="quick-view-close" onClick={close}>
              <BsChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
