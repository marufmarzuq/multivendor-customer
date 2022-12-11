import { useEffect, useRef, useState } from "react";
import { markutosFrontendApi } from "../../services/Api/api";
import Slider from "./components/singleCom/Slider";
import ProductDetails from "./components/singleCom/ProductDetails";
import RelatedProducts from "./components/singleCom/RelatedProducts";
import Reviews from "./components/singleCom/Reviews";
import { useParams } from "react-router-dom";
import ProductDescription from "./components/productDes/ProductDescription";
import ProductInformation from "./components/ProductInfo/ProductInformation";
import "react-loading-skeleton/dist/skeleton.css";

const SingleProduct = () => {
  const { slug } = useParams();

  const [loading, setLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`/product-details?product_slug=${slug}`)
      .then((response) => {
        setLoading(false);
        setSingleProduct(response?.data);
      });
  }, []);

  return (
    <section className="single-product-wrap my-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-5 mb-md-2 overflow-hidden">
            <Slider loading={loading} sliders={singleProduct.photos} />
          </div>
          <div className="col-12 col-md-6 mb-5 mb-md-2 overflow-hidden">
            <ProductDetails loading={loading} singleProduct={singleProduct} />
          </div>
        </div>
        <ProductDescription loading={loading} singleProduct={singleProduct} />
        {/* <ProductInformation /> */}
        <RelatedProducts loading={loading} singleProduct={singleProduct} />
        <Reviews loading={loading} singleProduct={singleProduct} />
      </div>
    </section>
  );
};

export default SingleProduct;
