import React, { useEffect, useState } from "react";
import "./ProductInformation.css";
import Select from "react-select";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { markutosSellerApi } from "../../../../../../services/Api/api";
import authHeader from "../../../../../../services/auth-header";
const ProductInformation = () => {
  const [tags, setTags] = useState(["example tag"]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);

  useEffect(() => {
    markutosSellerApi
      .get("/get-categories", {
        headers: {
          Authorization: authHeader(),
        },
      })
      .then((res) => {
        const category = [];
        res.data.map((item) => {
          const singleCategory = { value: item.name, label: item.name };
          category.push(singleCategory);
        });
        setCategoryOptions(category);
      })
      .catch((e) => {});

    markutosSellerApi
      .get("/get-brands", {
        headers: {
          Authorization: authHeader(),
        },
      })
      .then((res) => {
        const brands = [];
        res.data.map((item) => {
          const singleBrand = { value: item.name, label: item.name };
          brands.push(singleBrand);
        });
        setBrandOptions(brands);
      })
      .catch((e) => {});
  }, []);

  return (
    <div className="add-product-single-widget">
      <div className="widget-title">Product Information</div>
      <div className="widget-content-container">
        <div className="product-informaiton-form">
          <label htmlFor="product__name">
            <span>Product Name</span>
            <i>*</i>
          </label>
          <input id="product__name" type="text" />
          <label htmlFor="product__category">
            <span>Category</span>
            <i>*</i>
          </label>
          <Select
            id="product_category"
            options={categoryOptions}
            placeholder="Categories"
          />
          <label htmlFor="product__Brand">
            <span>Brand</span>
          </label>
          <Select
            id="product__Brand"
            options={brandOptions}
            placeholder="Brands"
          />
          <label htmlFor="product__unit">
            <span>Unit</span>
            <i>*</i>
          </label>
          <input id="product__unit" type="text" />
          <label htmlFor="minimum_qnty">
            <span>Minimum Qty</span>
            <i>*</i>
          </label>
          <input id="minimum_qnty" type="number" min={1} defaultValue={1} />
          <label>
            <span>Tags</span>
            <i>*</i>
          </label>
          <ReactTagInput
            tags={tags}
            removeOnBackspace={true}
            onChange={(newTags) => setTags(newTags)}
          />
          <label htmlFor="barcode">
            <span>Barcode</span>
          </label>
          <input id="barcode" type="text" />
          <label>
            <span>Refundable</span>
          </label>
          <label className="confi-switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
