import GridOne from "../../../../../common/product/layout/GridOne";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";

const RelatedProducts = ({ loading, singleProduct }) => {
  const { addItem, onItemAdd } = useCart();

  const addToCart = (product) => {
    addItem(product);
  };

  return (
    <div>
      <div className="related_title text-center mt-3">
        <h3>Related Product</h3>
      </div>
      <div className="row products-wrap">
        {!loading &&
          singleProduct?.related_products?.products?.map((product, index) => {
            return (
              <GridOne key={index} product={product} addToCart={addToCart} />
            );
          })}

        <div className="text-center">
          <NavLink
            to={`/shop/${singleProduct?.related_products?.category_slug}`}
            className="btn btn-primary "
          >
            <button className="btn btn-primary">View More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default RelatedProducts;
