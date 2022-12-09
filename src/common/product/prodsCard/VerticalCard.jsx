import React, { useState } from "react";
import { BsCart2, BsStar, BsStarFill } from "react-icons/bs";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { GiUnbalanced } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCustomerWishlist } from "../../../redux/slices/wishlist";
import { setCompare } from "../../../redux/slices/compare";
import { priceFormat } from "../../../hooks/helper";
import QuickView from "../../quickView/QuickView";
import { setQuickView } from "../../../redux/slices/quickView";

const VerticalCard = ({ product, addToCart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products: wishlistedProds } = useSelector(
    (state) => state?.customerWishlist
  );
  const [openQuickView, setOpenQuickView] = useState(false);

  const { products: comparedProds } = useSelector((state) => state?.compare);

  const handleAddToCart = () => {
    dispatch(setQuickView({ open: true, product }));
    // add to cart
    if (product.product_type !== "variation") {
      addToCart(product);
    }
  };

  const handleQuickView = () => {
    dispatch(setQuickView({ open: true, product }));
  };

  const isWishlistedProd = () => {
    return wishlistedProds.some((wp) => {
      return wp.id === product.id;
    });
  };

  const addToWishlist = () => {
    let newWishlistedProds;
    if (isWishlistedProd(product)) {
      newWishlistedProds = wishlistedProds?.filter(
        (wp) => wp.id !== product.id
      );
    } else {
      newWishlistedProds = [...wishlistedProds, product];
    }
    dispatch(
      setCustomerWishlist({
        count: newWishlistedProds.length,
        products: newWishlistedProds,
      })
    );
    localStorage.setItem("my-wishlist", JSON.stringify(newWishlistedProds));
  };

  const isComparedProd = () => {
    return comparedProds.some((cp) => {
      return cp.id === product.id;
    });
  };

  const addToCompare = () => {
    if (isComparedProd()) {
      dispatch(setCompare({ open: true, products: comparedProds }));
    } else {
      let newCompareProds = [...comparedProds];
      if (comparedProds.length === 4) {
        newCompareProds.shift();
      }
      dispatch(
        setCompare({ open: true, products: [...newCompareProds, product] })
      );
      localStorage.setItem(
        "compared-prods",
        JSON.stringify([...newCompareProds, product])
      );
    }
  };

  return (
    <>
      <div className="vartical-prod-card-container">
        <div className="vpcc-image">
          <img src={product.thumbnail_img} alt={product.name} />
          <div className="card-action-btn-container">
            <div className="vpcc-btns btn-1" onClick={handleAddToCart}>
              <BsCart2 />
            </div>
            <div className="vpcc-btns btn-2" onClick={addToWishlist}>
              {isWishlistedProd() ? <IoMdHeart /> : <IoMdHeartEmpty />}
            </div>
            <div className="vpcc-btns btn-3" onClick={addToCompare}>
              <GiUnbalanced />
            </div>
            <div className="vpcc-btns btn-4" onClick={handleQuickView}>
              <IoEyeOutline />
            </div>
          </div>
        </div>
        <div
          className="vpcc-name"
          onClick={() => navigate(`../products/${product.slug}`)}
        >
          {product.name}
        </div>
        <div className="vpcc-footer">
          {product.product_type !== "variation" ? (
            <div className="vpcc-price">
              <bdi>{priceFormat(product.discount_price)}</bdi>
              <del className={product?.discount_price ? " del ms-1" : "ms-1"}>
                {priceFormat(product.unit_price)}
              </del>
            </div>
          ) : (
            priceFormat(product.discount_price_range, "variable")
          )}
          <div className="vpcc-rating">
            <Rating
              fullSymbol={<BsStarFill className="icon" color="#2e73e8" />}
              emptySymbol={<BsStar className="icon" />}
              initialRating={product?.total_rating}
              readonly
            />
          </div>
        </div>
      </div>
      {openQuickView && (
        <QuickView product={product} onClose={() => setOpenQuickView(false)} />
      )}
    </>
  );
};

export default VerticalCard;
