import React, { useState } from "react";
import { BsCart2, BsStar, BsStarFill } from "react-icons/bs";
import { GiUnbalanced } from "react-icons/gi";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productPlaceholder } from "../../../assets";
import { setCompare } from "../../../redux/slices/compare";
import { setCustomerWishlist } from "../../../redux/slices/wishlist";
import { priceFormat } from "../../../hooks/helper";
import QuickView from "../../quickView/QuickView";

const HorizontalCard = ({ product, addToCart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products: wishlistedProds } = useSelector(
    (state) => state?.customerWishlist
  );
  const [openQuickView, setOpenQuickView] = useState(false);
  const { products: comparedProds } = useSelector((state) => state?.compare);

  const handleAddToCart = () => {
    setOpenQuickView(true);
    // add to cart
    if (product.product_type !== "variation") {
      addToCart(product);
    }
  };

  const handleQuickView = () => {
    setOpenQuickView(true);
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
      console.log("Clicked");
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
      <div className="horizontal-prod-card-container">
        <div className="hpcc-image">
          <img src={product.thumbnail_img} alt={product.name} />
        </div>
        <div className="hpcc-content">
          <div
            className="hpcc-name"
            onClick={() => navigate(`../products/${product.slug}`)}
          >
            {product.name}
          </div>
          <div className="hpcc-rating">
            <Rating
              fullSymbol={<BsStarFill className="icon" color="#2e73e8" />}
              emptySymbol={<BsStar className="icon" />}
              initialRating={product?.total_rating}
              readonly
            />
          </div>
            {product.product_type !== "variation" ? (
              <div className="hpcc-price">
                  <bdi>{priceFormat(product.discount_price)}</bdi>
                  <del className={product?.discount_price ? " del ms-1" : "ms-1"}>
                    {priceFormat(product.unit_price)}
                  </del>
              </div>
            ) : (
              priceFormat(product.discount_price_range, "variable")
            )}
          <div className="hpcc-description">
            { product?.description }
          </div>
        </div>
        <div className="hpcc-actions">
          <div className="hpcc-btns" onClick={handleAddToCart}>
            <BsCart2 /> <span>Add to Cart</span>
          </div>
          <div className="hpcc-btns" onClick={addToWishlist}>
            {isWishlistedProd() ? (
              <>
                <IoMdHeart /> <span>Wishlisted</span>
              </>
            ) : (
              <>
                <IoMdHeartEmpty />
                <span>Wishlist</span>
              </>
            )}
          </div>
          <div className="hpcc-btns" onClick={addToCompare}>
            <GiUnbalanced /> <span>Compare</span>
          </div>
          <div className="hpcc-btns" onClick={handleQuickView}>
            <IoEyeOutline /> <span>Quick View</span>
          </div>
        </div>
      </div>
      {openQuickView && (
        <QuickView product={product} onClose={() => setOpenQuickView(false)} />
      )}
    </>
  );
};

export default HorizontalCard;
