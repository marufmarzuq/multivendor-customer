import { useState, useEffect } from "react";
import GridOne from "../../../../../common/product/layout/GridOne";
import { useCart } from "react-use-cart";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { markutosFrontendApi } from "../../../../services/Api/api";
import GridView from "../../../../../common/product/prodsLayout/GridView";

const OrderBump = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { addItem, onItemAdd } = useCart();

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi.get(`/cart/you-can-also-buy`).then((response) => {
      setLoading(false);
      setProducts(response?.data);
    });
  }, []);

  const addToCart = (product) => {
    addItem(product);
  };

  return (
    <div className="order-bump">
      <h2 className="my-4">You can also buy :</h2>
      <div className="row products-wrap">
        {loading === false ? (
          <GridView products={products} addToCart={addToCart} />
        ) : (
          <SkeletonTheme height={50}>
            <p>
              <Skeleton count={5} />
            </p>
          </SkeletonTheme>
        )}
      </div>
    </div>
  );
};

export default OrderBump;
