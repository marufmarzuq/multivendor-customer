import GridOne from "../../../../../common/productView/GridOne";

const RelatedProducts = () => {
	return (
	<div>
		<div className="related_title text-center">Related Product</div>
		<div className="row products-wrap">
			<GridOne/>
			<div className="text-center">
				<button>View More</button>
			</div>
		</div>
	</div>
	)
}
export default RelatedProducts;
