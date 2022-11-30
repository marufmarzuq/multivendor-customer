import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./quickView.css";
import { BsChevronRight, BsStar, BsStarFill } from "react-icons/bs";
import { setQuickView } from "../../redux/slices/quickView";
import { productPlaceholder } from "../../assets";
import Rating from "react-rating";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const QuickView = () => {
  const { open, product } = useSelector((state) => state.quickView);
  const dispatch = useDispatch();

  console.log(open, product);
  document.onclick = (e) => {
    if (e.target.className === "quick-view-outer-container") {
      dispatch(setQuickView({ open: false, product: null }));
    }
  };
  return (
    open && (
      <div className="quick-view">
        <div className="quick-view-outer-container">
          <div className="quick-view-container">
            <div className="quick-view-inner-container">
              <div className="qvi-scrollable">
                <div className="qvi-image">
                  <img src={productPlaceholder} alt="" />
                </div>
                <div className="qvi-name">{product.name}</div>
                <Rating
                  fullSymbol={<BsStarFill className="icon" color="#2e73e8" />}
                  emptySymbol={<BsStar className="icon" />}
                  initialRating={product?.total_rating}
                  readonly
                />
                <div className="qvi-price">${product.price}</div>
                <div className="qvi-short-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellendus nobis id placeat.
                </div>
                <div>
                  <div className="qvi-color-title">Color</div>
                  <div className="qvi-variants">
                    <div className="qvi-single-color-btn red"></div>
                    <div className="qvi-single-color-btn blue"></div>
                    <div className="qvi-single-color-btn green"></div>
                  </div>
                  <div className="qvi-color-title">Size</div>
                  <div className="qvi-variants">
                    <div className="qvi-single-size-btn">L</div>
                    <div className="qvi-single-size-btn">M</div>
                    <div className="qvi-single-size-btn">XL</div>
                  </div>
                </div>
                <div className="qvi-actions">
                  <div className="qvi-qty-container">
                    <span>
                      <HiOutlineChevronLeft />
                    </span>
                    <input type="number" min={1} defaultValue={1} />
                    <span>
                      <HiOutlineChevronRight />
                    </span>
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
                          {["Fleece", "Denim"].length !== i + 1
                            ? cat + ","
                            : cat}
                        </span>
                      ))}
                    </div>
                    <div className="qvi-extras">
                      <span>Tags: </span>
                      {product.tags[0] &&
                        product.tags.map((tag, i) => (
                          <span key={i}>
                            {product.tags.length !== i + 1 ? tag + "," : tag}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="quick-view-close"
                onClick={() =>
                  dispatch(setQuickView({ open: false, product: null }))
                }
              >
                <BsChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default QuickView;
