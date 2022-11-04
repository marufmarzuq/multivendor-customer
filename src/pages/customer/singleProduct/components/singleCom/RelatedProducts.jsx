import ProductLayout from "../../../homepage/components/productLayout/ProductLayout";
import { useCart } from "react-use-cart";

const RelatedProducts = ({loading,singleProduct}) => {

	const { addItem, onItemAdd } = useCart();

	const addToCart = (product) => {
	addItem(product);
	};
	
	return (
		<div>
		<div className="related_title text-center my-3">
			<h3>Related Product</h3>
		</div>
		<div className="row products-wrap">
			{!loading &&
			singleProduct?.related_products?.map((product, index) => {
				return (
					<ProductLayout
					key={index}
					product={product}
					addToCart={addToCart}
					/>
				);
			})}
			<div className="text-center">
			<button className="btn btn-primary">View More</button>
			</div>
		</div>
		</div>
	);
};
export default RelatedProducts;
