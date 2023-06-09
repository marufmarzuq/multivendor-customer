import { NavLink } from "react-router-dom";
import Variation from "../variation/Variation";
import { priceFormat } from "../../../hooks/helper";
import { FaBalanceScaleLeft, FaCartPlus } from "react-icons/fa";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";

const GridOne = ({ product, addToCart }) => {
  return (
    <div className="col-sm-6 col-lg-4 col-xxl-3 mb-3">
      <div className="single-product style-1">
        <div className="image-wrap">
          <NavLink to={`/products/${product.slug}`}>
            <img src={product.thumbnail_img} alt={product.name} />
          </NavLink>
          <div className="buttons-wrap">
            <button>
              <FaBalanceScaleLeft />
            </button>
            <button onClick={() => addToCart(product)}>
              <FaCartPlus />
            </button>
          </div>
          <div className="badges">
            {product.discount_type == "percent" && (
              <div className="badge sale-badge">
                <span> {product.discount + "%"} </span>
              </div>
            )}
            {product.tags?.map((item, key) => {
              return (
                <div className="badge tag-badge" key={key}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="content-wrap">
          {product.product_type == "variation" && (
            <Variation
              choseOptions={product.choice_options}
              product={product}
              colors={product.colors}
            />
          )}
          <h3 className="product-title">
            <NavLink to={`/products/${product.slug}`}>{product.name}</NavLink>
          </h3>
          {product.product_type !== "variation" ? (
            <div className="price">
              <span className="sale">
                {priceFormat(product?.discount_price)}
              </span>
              <span className={product?.discount_price ? " del ms-1" : "ms-1"}>
                {priceFormat(product.unit_price)}
              </span>
            </div>
          ) : (
            priceFormat(product.discount_price_range, "variable")
          )}
          <div className="d-flex justify-content-center">
			<Rating
                style={{ color: "#ffd700", fontSize: "12px" }}
                initialRating={3}
                readonly
                emptySymbol={<BsStar className="icon" />}
                fullSymbol={<BsStarFill className="icon" />}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridOne;
