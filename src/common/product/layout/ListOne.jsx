import { NavLink, useNavigate } from "react-router-dom";
import Variation from "../variation/Variation";
import { priceFormat } from "../../../hooks/helper";
import { AiFillStar } from "react-icons/ai";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import "./layout.css";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";

const ListOne = ({ product, addToCart }) => {
  const navigate = useNavigate();
  return (
    <div className="col-sm-12 col-lg-6 col-xxl-6 mb-6 g-3">
      <div className="prod-card-horizontal">
        <div className="pch-img">
          <img src={product.thumbnail_img} alt={product.name} />
        </div>
        <div className="pch-content">
          <div className="psch-content-top">
            <p
              className="pch-title"
              onClick={() => navigate(`/products/${product.slug}`)}
            >
              {product.name}
            </p>
            <div>
              <Rating
                style={{ color: "#ffd700", fontSize: "12px" }}
                initialRating={3}
                readonly
                emptySymbol={<BsStar className="icon" />}
                fullSymbol={<BsStarFill className="icon" />}
              />
            </div>
            <p className="pch-price">
              {product.product_type !== "variation" ? (
                <div className="price">
                  <span className="sale">
                    {priceFormat(product?.discount_price)}
                  </span>
                  <span
                    className={product?.discount_price ? " del ms-1" : "ms-1"}
                  >
                    {priceFormat(product.unit_price)}
                  </span>
                </div>
              ) : (
                priceFormat(product.discount_price_range, "variable")
              )}
            </p>
          </div>
          <div className="pch-btns">
            <button
              className="add-to-cart-icon-btn"
              onClick={() => addToCart(product)}
            >
              <FiShoppingCart />
            </button>
            <button
              className="add-to-cart-icon-btn"
              onClick={() => addToCart(product)}
            >
              <FiHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOne;
