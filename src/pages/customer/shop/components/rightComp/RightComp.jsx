
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { useCart } from "react-use-cart";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ProductLayout from "../../../homepage/components/productLayout/ProductLayout";
import FrontendPagination from "../../../../../common/pagination/frontend/FrontendPagination";

const RightComp = ({loading,shopProduct,pageCount,currentPage,setCurrentPage,setSortBy}) => {
  const { addItem, onItemAdd } = useCart();

  const addToCart = (product) => {
    addItem(product);
  };

  return (
		<div>
			<div className="sort-bar">
				<div className="sort-bar-left">
					<div>
						<button className="">
							<BsGrid3X3Gap />
						</button>
					</div>

					<div>
						<button>
							<AiOutlineBars />
						</button>
					</div>
				</div>
				<div className="sort-bar-right">
					<div className="form-group">
						<label htmlFor="">Sort By:</label>
						<select className="form-control" name="sort" id="sort">
							<option>Default</option>
							<option>Sale</option>
							<option>Price</option>
						</select>
					</div>
				</div>
			</div>
			<div className="row products-wrap">
				{loading && (
					<SkeletonTheme height={50}>
						<p>
							<Skeleton count={5} />
						</p>
					</SkeletonTheme>
				)}
				{
					shopProduct.map((product, index) => {
						return (
						<ProductLayout key={index}
							product={product}
							addToCart={addToCart}
						/>
					);
					})
				}
				{shopProduct.length > 0 && (
					<FrontendPagination
						currentItem={shopProduct}
						perPage={12}
						pageCount={pageCount}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
      	)}
			</div>
		</div>
  );
};

export default RightComp;
