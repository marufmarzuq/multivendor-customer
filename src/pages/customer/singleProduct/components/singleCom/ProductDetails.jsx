import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaStar, FaTwitter } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { IoIosGitCompare } from "react-icons/io";
import "./singleCom.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Fragment } from "react";
import { priceFormat } from "../../../../../hooks/helper";
import { useCart } from "react-use-cart";
import Variation from "./Variation";

const ProductDetails = ({loading,singleProduct}) => {

	const {
    items,
    addItem,
    updateItemQuantity,
    getItem,
  } = useCart();

	const myItem = loading == false && getItem(singleProduct.id);

  const addToCart = (product) => {
		product.total = parseFloat(product.price) - parseFloat(product.discount);
    addItem(product);
  };

  return (
			loading ? (
				<SkeletonTheme height={50}>
					<p><Skeleton count={5} /></p>
				</SkeletonTheme>
			) :
			(
			<Fragment>
				<div className="col-12 mb-md-2">
				<div className="product-details-container">
					<h2 className="product-title">{singleProduct.name}</h2>
					<div className="ratings">
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<span className="ms-2">(2 reviews)</span>
					</div>
					{ singleProduct.product_type !== "variation" ?
						(<div
							style={{
								marginTop: "-10px",
							}}
							className="price"
						>
							<span className="sale">{priceFormat(singleProduct.discount_price)}</span>
							<span className={ singleProduct?.discount_price ? ' del ms-2' : '' }>{priceFormat(singleProduct.unit_price)}</span>
						</div>) :
						( singleProduct.discount_price_range )

					}
					<p className="excerpt">
						{singleProduct.short_description}
					</p>
					<div className="product-meta d-block">
						<span className="label me-1">Availability :</span>
						<span className="content">{singleProduct.avability}</span>
					</div>
					<div className="product-meta d-flex align-items-center">
						<div className="d-block">
							<span className="label me-1">Sold By : </span>
							<span>{singleProduct.shop_name}</span>
						</div>
						<button className="btn ms-0 ms-md-5 btn-primary search-button">
							<AiOutlineMessage className="me-1" /> Message Seller
						</button>
					</div>

					{ singleProduct.product_type == "variation" &&
						<Variation
						choseOptions={singleProduct.choice_options}
						colors={singleProduct.colors}
						singleProduct={singleProduct}
						/>
					}

					<div className="quantity">
						<button onClick={() => updateItemQuantity(singleProduct.id, myItem?.quantity &&  myItem?.quantity - 1 )}>
							<AiOutlineMinus />
						</button>
						<span> {myItem?.quantity ? myItem?.quantity : singleProduct.min_qty } </span>
						<button onClick={() => updateItemQuantity(singleProduct.id, myItem?.quantity ? myItem?.quantity + 1 : singleProduct.min_qty + 1 )}>
							{" "}
							<AiOutlinePlus />{" "}
						</button>
          </div>
					<div className="cart-buttons-wrap">
						<button className="btn btn-primary " onClick={(e)=>addToCart(singleProduct)}>
							<AiOutlineShoppingCart className="me-1" />{" "}
							<small>Add to Cart</small>
						</button>
						<button className="btn btn-primary">
							<BiShoppingBag className="me-1" /> <small>Buy Now</small>
						</button>
					</div>
					<div className="wishlist-compare-wrap">
						<button className="btn me-3 ">
							<IoIosGitCompare />
							Compare
						</button>
						<button className="btn ps-2">
							<AiOutlineHeart /> Wishlist
						</button>
					</div>
					<div className="social-share-wrap">
						<p>Share: </p>
						<a href="#" target="_blank">
							<FaTwitter />
						</a>
						<a href="#" target="_blank">
							<FaLinkedin />
						</a>
						<a href="#" target="_blank">
							<FaInstagram />
						</a>
					</div>
				</div>
			</div>
			</Fragment>
			)
  );
};

export default ProductDetails;
