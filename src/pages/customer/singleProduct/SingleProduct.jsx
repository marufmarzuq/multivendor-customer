import React from "react";
import Slider from "./components/singleCom/Slider";
import ProductDetails from "./components/singleCom/ProductDetails";
import RelatedProducts from "./components/singleCom/RelatedProducts";
import Reviews from "./components/singleCom/Reviews";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getApi } from "../../../api/apiCall";
import { setSingleProduct } from "../../../redux/slices/seller/products";
import { useSelector } from "react-redux";
import ProductDescription from "./components/productDes/ProductDescription";
import ProductInformation from "./components/ProductInfo/ProductInformation";

const SingleProduct = () => {
  const { id } = useParams();

  useEffect(() => {
    // this is for actual api call
    // getApi(`products/${id}`, setSingleProduct);

    // this one is for json file from local
    getApi(`singleProduct.json/${id}`, setSingleProduct);
  }, []);

  const { product } = useSelector((state) => state.singleProductReducer);

  return (
    <section className="single-product-wrap my-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-5 mb-md-2 overflow-hidden">
            <Slider />
          </div>
          <div className="col-12 col-md-6 mb-5 mb-md-2 overflow-hidden">
            <ProductDetails />
          </div>
        </div>
        <ProductDescription />
        <ProductInformation />
        <RelatedProducts />
        <Reviews />
      </div>
    </section>
  );
};

export default SingleProduct;
