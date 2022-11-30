import React from "react";
import { BsCart2, BsStar, BsStarFill } from "react-icons/bs";
import { GiUnbalanced } from "react-icons/gi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import Rating from "react-rating";
import { useDispatch } from "react-redux";
import { productPlaceholder } from "../../../assets";
import { setQuickView } from "../../../redux/slices/quickView";

const HorizontalCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(setQuickView({ open: true, product }));
  };

  const handleQuickView = () => {
    dispatch(setQuickView({ open: true, product }));
  };
  return (
    <div className="horizontal-prod-card-container">
      <div className="hpcc-image">
        <img src={productPlaceholder} alt="" />
      </div>
      <div className="hpcc-content">
        <div className="hpcc-name">{product.name}</div>
        <div className="hpcc-rating">
          <Rating
            fullSymbol={<BsStarFill className="icon" color="#2e73e8" />}
            emptySymbol={<BsStar className="icon" />}
            initialRating={product?.total_rating}
            readonly
          />
        </div>
        <div className="hpcc-price">${product.price}</div>
        <div className="hpcc-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quam
          consectetur dolor delectus? Inventore deserunt unde eos rem, sapiente.
        </div>
      </div>
      <div className="hpcc-actions">
        <div className="hpcc-btns" onClick={handleAddToCart}>
          <BsCart2 /> <span>Add to Cart</span>
        </div>
        <div className="hpcc-btns">
          <IoMdHeartEmpty /> <span>Wishlist</span>
        </div>
        <div className="hpcc-btns">
          <GiUnbalanced /> <span>Compare</span>
        </div>
        <div className="hpcc-btns" onClick={handleQuickView}>
          <IoEyeOutline /> <span>Quick View</span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
