import React from "react";
import { BsCart2, BsStar, BsStarFill } from "react-icons/bs";
import { GiUnbalanced } from "react-icons/gi";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productPlaceholder } from "../../../assets";
import { setCompare } from "../../../redux/slices/compare";
import { setQuickView } from "../../../redux/slices/quickView";
import { setCustomerWishlist } from "../../../redux/slices/wishlist";

const HorizontalCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products: wishlistedProds } = useSelector(
    (state) => state?.customerWishlist
  );
  const { products: comparedProds } = useSelector((state) => state?.compare);

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
        <div className="hpcc-price">${product.price.toFixed(2)}</div>
        <div className="hpcc-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quam
          consectetur dolor delectus? Inventore deserunt unde eos rem, sapiente.
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
  );
};

export default HorizontalCard;
