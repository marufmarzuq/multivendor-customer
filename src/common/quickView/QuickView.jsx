import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./quickView.css";
import { BsChevronRight, BsStar, BsStarFill } from "react-icons/bs";
import { setQuickView } from "../../redux/slices/quickView";
import { productPlaceholder } from "../../assets";
import Rating from "react-rating";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useCart } from "react-use-cart";
import { setMiniCart } from "../../redux/slices/miniCart";
import { priceFormat } from "../../hooks/helper";

const QuickView = ({ product }) => {

  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const dispatch = useDispatch();

  const [selectVariant, setSelectVariant] = useState([]);
  const [variantPrice, setVariantPrice] = useState("");

  useEffect(() => {
    const quickViewProduct = {...product};
    quickViewProduct.selectedVariant = selectVariant;
    
    var getVariant = "";
    // sort by index
    selectVariant.sort((a, b) => parseFloat(a.index) - parseFloat(b.index));

    // combination of variation
    if (selectVariant?.length > 0) {
      selectVariant.map((variant, key) => {
        var dash = `${selectVariant.length !== key + 1 ? "-" : ""}`;
        getVariant += `${variant.variation}` + `${dash}`;
      });
      // get price
      if (getVariant !== "") {
        const found = product.variations.find(
          (element) => element.variant_slug == getVariant
        );

        if (found) {
          quickViewProduct.price = found.price;
          quickViewProduct.variation = getVariant;
          setVariantPrice(found.price);
        }
      }
    }
  }, [selectVariant]);

console.log(selectVariant);
console.log(product);
  const getVariation = (attribute, newVariant, index) => {
    if (
      selectVariant.find((item) => item.attribute === attribute) !== undefined
    ) {
      // item exist
      let filteredVariant = selectVariant.filter(
        (item) => item.attribute !== attribute
      );
      setSelectVariant([
        ...filteredVariant,
        { attribute: attribute, variation: newVariant, index },
      ]);
    } else {
      setSelectVariant([
        ...selectVariant,
        { attribute: attribute, variation: newVariant, index },
      ]);
    }
  };

  const handleAddToCart = () => {
    addItem(product, qty);
    dispatch(setQuickView({ open: false, product: null }));
    dispatch(setMiniCart({ open: true }));
  };

  const close = (e) => {
    e.stopPropagation();
    dispatch(setQuickView({ open: false, product: null }));
  };
  
  return (
    <div className="quick-view" key={product?.id}>
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
              <div className="qvi-price">{priceFormat(variantPrice)}</div>
              <div className="qvi-short-desc">
                {/* {product?.description} */}
              </div>
              <div>
                  {product?.colors.length > 0 && (
                    <Fragment>
                      <div className="qvi-color-title">Colors :{" "}</div>
                      <div className="qvi-variants">
                        {product?.colors.map((item, key) => {
                          return (
                              <div
                              key={key}
                              style={{ background: item?.code }}
                              className={`qvi-single-color-btn ${
                                item === "" && "active"
                              }`}
                              onClick={(e) => getVariation("Colors", item.name, 0)}
                              ></div>
                          );
                        })}
                      </div>
                    </Fragment>
                  )}
                  { Object.keys(product?.choice_options)?.length > 0 && (
                      <Fragment>
                        {Object.keys(product?.choice_options)?.map((item, key) => {
                          return (
                            <Fragment key={key}>
                                <div className="qvi-color-title">{item}</div>
                                <div className="qvi-variants">
                                  {product?.choice_options[item]?.map((variant, i) => {
                                    return (
                                      <div
                                        key={i}
                                        className={`qvi-single-fabric-btn ${
                                          variant === "" && "active"
                                        }`}
                                        onClick={() => getVariation(item, variant, key + 1)}
                                      >
                                          {variant}
                                      </div>
                                    );
                                  })}
                                </div>
                            </Fragment>
                          );
                        })}
                      </Fragment>
                  )}
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
                  className={`qvi-add-to-cart-btn ${ variantPrice == "" && "disabled" }`}
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </div>
                <div>
                  <div className="qvi-extras">
                    <span>SKU: </span>
                    <span>{product?.sku}</span>
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
