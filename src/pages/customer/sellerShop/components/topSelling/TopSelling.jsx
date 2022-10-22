import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaBalanceScaleLeft, FaCartPlus } from "react-icons/fa";
import { MdOutlineViewInAr } from "react-icons/md";
import arrivalStyle from "./topSelling.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { priceFormat } from "../../../../../hooks/helper";
import Variation from "../../../homepage/components/variation/Variation";

const TopSelling = ({loading,topSelling}) => {
	const [selectVariant, setSelcetVariant] = useState("");
  const { addItem, onItemAdd } = useCart();
	const addToCart = (product) => {
    product.price = product.unit_price;
    addItem(product);
  };
	const [products, setProducts] = useState([
    {
      id: 1,
      name: "Canon Camera",
      price: 99,
      M: {
        price: 99,
      },
      L: {
        price: 100,
      },
      XL: {
        price: 110,
      },
    },
    {
      id: 2,
      name: "Table Fan",
      price: 56,
      M: {
        price: 56,
      },
      L: {
        price: 62,
      },
      XL: {
        price: 65,
      },
    },
    {
      id: 3,
      name: "Water Heater",
      price: 45,
      M: {
        price: 45,
      },
      L: {
        price: 50,
      },
      XL: {
        price: 48,
      },
    },
  ]);
  const variations = ["M", "L", "XL"];
  return (
    <div className="container">
      <div className={arrivalStyle.titles}>
        <h1 className="text-center mb-5 pt-5">Top Selling Products</h1>
      </div>
      <section>
        <div className={arrivalStyle.productsContainer}>
        { loading ?

						<SkeletonTheme height={50}>
						<p>
							<Skeleton count={5} />
						</p>
						</SkeletonTheme>
					:
					(
						topSelling?.map((product,index)=>{
							return(
							<div className="products-wrap"  key={index}>
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
										<div className="variations d-flex flex-column">
											<div className="variation d-flex justify-content-center">
												{ product.product_type == "variation" &&
													<Variation
														products={products}
														product={product}
														selectVariant={selectVariant}
														setSelcetVariant={setSelcetVariant}
														variations={variations}
														setProducts={setProducts}
													/>
												}
											</div>
										</div>
										<h3 className="product-title">
											<NavLink to={`products/${product. slug}`}>
												{product.name}
											</NavLink>
										</h3>
										<div className="price">
											<span className="sale">
												{priceFormat(product?.discount_price)}
											</span>
											<span className={ product?.discount_price ? ' del ms-1' : 'ms-1' } >
												{priceFormat(product.unit_price)}
											</span>
										</div>
										<div className="ratings">
											<AiFillStar />
											<AiFillStar />
											<AiFillStar />
											<AiFillStar />
											<AiFillStar />
										</div>
									</div>
								</div>
							</div>
							)
							})
					)
				}
        </div>
      </section>

      <div className="d-flex justify-content-center my-2">
        <a href="#" className="btn btn-primary">
          <MdOutlineViewInAr /> View More
        </a>
      </div>
    </div>
  );
};

export default TopSelling;
