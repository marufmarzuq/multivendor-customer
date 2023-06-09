import { NavLink } from "react-router-dom";
import Variation from "../../../../../common/product/variation/Variation";
import { priceFormat } from "../../../../../hooks/helper";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import { FaBalanceScaleLeft, FaCartPlus } from "react-icons/fa";

const ProductLayout = ({product,addToCart}) => {
  return (
	<div className="products-wrap">
		<div className="single-product style-1">
			<div className="image-wrap">
				<a href="#">
					<img
						src={product.thumbnail_img}
						alt={product.name}
					/>
				</a>
				<div className="buttons-wrap">
					<button>
						<FaBalanceScaleLeft />
					</button>
					<button onClick={() => addToCart(product)}>
						<FaCartPlus />
					</button>
				</div>
				<div className="badges">
					{ product.discount_type =="percent" &&
							<div className="badge sale-badge">
								<span> {product.discount +'%'} </span>
							</div>
					}
					{ product.tags?.map((item,key) => {
							return (
								<div className="badge tag-badge" key={key}>{item}</div>
							);
						})
					}
				</div>
			</div>
			<div className="content-wrap">

				{ product.product_type == "variation" &&
					<Variation
					choseOptions={product.choice_options}
					product={product}
					colors={product.colors}
					/>
				}
				<h3 className="product-title">
					<NavLink to={`/products/${product.slug}`}>
						{product.name}
					</NavLink>
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
					priceFormat(product.discount_price_range,"variable")
				)}
				<div className="d-flex justify-content-center">
					<Rating
						style={{ color: "#0b5ed7", fontSize: "12px" }}
						initialRating={product.avg_rating}
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

export default ProductLayout;
