import GridOne from "../../../../../common/productView/GridOne";

const RelatedProducts = () => {
  return (
    <div>
      <div className="related_title text-center my-3">
        <h3>Related Product</h3>
      </div>
      <div className="row products-wrap">
        <GridOne />
        <div className="text-center">
          <button className="btn btn-primary">View More</button>
        </div>
      </div>
    </div>
  );
};
export default RelatedProducts;
