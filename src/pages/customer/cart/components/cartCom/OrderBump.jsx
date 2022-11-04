import React from "react";
import GridOne from "../../../../../common/product/layout/GridOne";
import { useCart } from "react-use-cart";

const OrderBump = ({products}) => {
	const { addItem, onItemAdd } = useCart();

	const addToCart = (product) => {
	addItem(product);
	};

	return (
		<div className="order-bump">
		<h2 className="my-4">You can also buy :</h2>
		<div className="row products-wrap">
			{
			products.length > 0 &&
				products?.map((product, index) => {
					return (
						<GridOne
							product={product}
							key={index}
							addToCart={addToCart}
						/>
					);
			})}
		</div>
		</div>
	);
};

export default OrderBump;
