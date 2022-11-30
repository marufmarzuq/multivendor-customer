import React from "react";
import { BsCart2, BsStar, BsStarFill } from "react-icons/bs";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { GiUnbalanced } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";
import Rating from "react-rating";
import { productPlaceholder } from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import { setQuickView } from "../../../redux/slices/quickView";
import { useNavigate } from "react-router-dom";
import { setCustomerWishlist } from "../../../redux/slices/wishlist";

const VarticalCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products: wishlistedProds } = useSelector(
    (state) => state?.customerWishlist
  );

  const handleAddToCart = () => {
    dispatch(setQuickView({ open: true, product }));
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

  return (
    <div className="vartical-prod-card-container">
      <div className="vpcc-image">
        <img src={productPlaceholder} alt="" />
        <div className="card-action-btn-container">
          <div className="vpcc-btns btn-1" onClick={handleAddToCart}>
            <BsCart2 />
          </div>
          <div className="vpcc-btns btn-2" onClick={addToWishlist}>
            {isWishlistedProd() ? <IoMdHeart /> : <IoMdHeartEmpty />}
          </div>
          <div className="vpcc-btns btn-3">
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
        <div className="vpcc-price">
          <bdi>${product.price.toFixed(2)}</bdi>
        </div>
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
  );
};

export default VarticalCard;
