import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./quickView.css";
import { BsChevronRight, BsStar, BsStarFill } from "react-icons/bs";
import { setQuickView } from "../../redux/slices/quickView";
import { productPlaceholder } from "../../assets";
import Rating from "react-rating";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const QuickView = ({ product }) => {
  const [price, setPrice] = useState(product?.unit_price);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [fabric, setFabric] = useState("");
  const [sku, setSku] = useState("");
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  console.log(product);

  useEffect(() => {
    if (color && size && fabric) {
      product.variations.map((singleVariant) => {
        if (
          singleVariant.variant.Color === color &&
          singleVariant.variant.Size === size &&
          singleVariant.variant.Fabric === fabric
        ) {
          setPrice(singleVariant.price);
          setSku(singleVariant.sku);
        }
        return null;
      });
    }
  }, [color, size, fabric]);

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
                initialRating={product?.avg_rating}
                readonly
              />
              <div className="qvi-price">${price}</div>
              <div className="qvi-short-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus nobis id placeat.
              </div>
              <div>
                <div className="qvi-color-title">
                  Color{color && `: ${color}`}
                </div>
                <div className="qvi-variants">
                  {product?.colors.map((clr) => (
                    <div
                      style={{ background: clr?.code }}
                      className={`qvi-single-color-btn ${
                        color === clr?.name && "active"
                      }`}
                      onClick={() => setColor(clr?.name)}
                    ></div>
                  ))}
                </div>
                <div className="qvi-color-title">Size{size && `: ${size}`}</div>
                <div className="qvi-variants">
                  {product?.choice_options?.Size?.map((singleSize) => (
                    <div
                      className={`qvi-single-size-btn ${
                        size === singleSize && "active"
                      }`}
                      onClick={() => setSize(singleSize)}
                    >
                      {singleSize}
                    </div>
                  ))}
                </div>
                <div className="qvi-color-title">
                  Fabric{fabric && `: ${fabric}`}
                </div>
                <div className="qvi-variants">
                  {product?.choice_options?.Fabric?.map((singleFabric) => (
                    <div
                      className={`qvi-single-fabric-btn ${
                        fabric === singleFabric && "active"
                      }`}
                      onClick={() => setFabric(singleFabric)}
                    >
                      {singleFabric}
                    </div>
                  ))}
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
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  />
                  <button onClick={() => setQty(Number(qty) + 1)}>
                    <HiOutlineChevronRight />
                  </button>
                </div>
                <div
                  className={`qvi-add-to-cart-btn ${
                    (!size || !color || !fabric) && "disabled"
                  }`}
                >
                  ADD TO CART
                </div>
                <div>
                  <div className="qvi-extras">
                    <span>SKU: </span>
                    <span>{sku}</span>
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

export default QuickView;
