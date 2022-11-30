import React from "react";
import { BsCart2, BsStar, BsStarFill } from "react-icons/bs";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { GiUnbalanced } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";
import Rating from "react-rating";
import { productPlaceholder } from "../../../assets";
import { useDispatch } from "react-redux";
import { setQuickView } from "../../../redux/slices/quickView";

const VarticalCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(setQuickView({ open: true, product }));
  };

  const handleQuickView = () => {
    dispatch(setQuickView({ open: true, product }));
  };

  return (
    <div className="vartical-prod-card-container">
      <div className="vpcc-image">
        <img src={productPlaceholder} alt="" />
        <div className="card-action-btn-container">
          <div className="vpcc-btns btn-1" onClick={handleAddToCart}>
            <BsCart2 />
          </div>
          <div className="vpcc-btns btn-2">
            <IoMdHeartEmpty />
          </div>
          <div className="vpcc-btns btn-3">
            <GiUnbalanced />
          </div>
          <div className="vpcc-btns btn-4" onClick={handleQuickView}>
            <IoEyeOutline />
          </div>
        </div>
      </div>
      <div className="vpcc-name">{product.name}</div>
      <div className="vpcc-footer">
        <div className="vpcc-price">${product.price}</div>
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
