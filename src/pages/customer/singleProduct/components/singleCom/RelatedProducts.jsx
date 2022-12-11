import GridOne from "../../../../../common/product/layout/GridOne";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import GridView from "../../../../../common/product/prodsLayout/GridView";
import { MdOutlineViewInAr } from "react-icons/md";

const RelatedProducts = ({ loading, singleProduct }) => {
  const { addItem, onItemAdd } = useCart();

  const addToCart = (product) => {
    addItem(product);
  };

  return (
    <div>
      <div className="related_title text-center my-3">
        <h3>Related Product</h3>
      </div>
      <div className="row mb-4">
        {!loading && (
          <GridView
            products={singleProduct?.related_products?.products}
            addToCart={addToCart}
          />
        )}
      </div>
      <div className="d-flex justify-content-center my-2">
        <NavLink
          to={`/shop/${singleProduct?.related_products?.category_slug}`}
          className="btn btn-primary"
        >
          <MdOutlineViewInAr /> View More
        </NavLink>
      </div>
    </div>
  );
};
export default RelatedProducts;
