import React, { useEffect, useState } from "react";
import "./ProductInformation.css";
import Select from "react-select";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { markutosSellerApi } from "../../../../../../services/Api/api";
import authHeader from "../../../../../../services/auth-header";
const ProductInformation = ({
  values,
  handleBlur,
  handleChange,
  errors,
  touched,
  setFieldValue,
}) => {
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  const productTypeOptions = [
    { label: "Simple", value: "simple" },
    { label: "Variable", value: "variable" },
  ];

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
          const singleCategory = {
            id: item.id,
            value: item.name,
            label: item.name,
          };
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
          const singleBrand = {
            id: item.id,
            value: item.label,
            label: item.label,
          };
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
            <span>Product Type</span>
            <i>*</i>
          </label>
          <div>
            <Select
              onBlur={handleBlur}
              name="product_type"
              onChange={(option) => setFieldValue("product_type", option.value)}
              id="product_type"
              options={productTypeOptions}
              value={productTypeOptions.find((option) => {
                return option.value == values.product_type;
              })}
            />
            {errors.product_type && touched.product_type && (
              <small className="text-danger"> {errors.product_type} </small>
            )}
          </div>

          <label htmlFor="product__name">
            <span>Product Name</span>
            <i>*</i>
          </label>
          <div>
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="product__name"
              type="text"
            />
            {errors.name && touched.name && (
              <small className="text-danger"> {errors.name} </small>
            )}
          </div>
          <label htmlFor="category_id">
            <span>Category</span>
            <i>*</i>
          </label>
          <div>
            <Select
              onBlur={handleBlur}
              name="category_id"
              onChange={(option) => setFieldValue("category_id", option.id)}
              id="category_id"
              options={categoryOptions}
              placeholder="Categories"
              value={categoryOptions.find((option) => {
                return option.id == values.category_id;
              })}
            />
            {errors.category_id && touched.category_id && (
              <small className="text-danger"> {errors.category_id} </small>
            )}
          </div>
          <label htmlFor="product__Brand">
            <span>Brand</span>
          </label>
          <div>
            <Select
              onBlur={handleBlur}
              id="brand_id"
              name="brand_id"
              onChange={(option) => setFieldValue("brand_id", option.id)}
              options={brandOptions}
              placeholder="Brands"
              value={brandOptions.find((option) => {
                return option.id == values.brand_id;
              })}
            />
          </div>
          <label htmlFor="product__unit">
            <span>Unit</span>
            <i>*</i>
          </label>
          <div>
            <input
              onBlur={handleBlur}
              name="unit"
              value={values.unit}
              onChange={handleChange}
              id="product__unit"
              type="text"
            />

            {errors.unit && touched.unit && (
              <small className="text-danger"> {errors.unit} </small>
            )}
          </div>
          <label htmlFor="minimum_qnty">
            <span>Minimum Qty</span>
            <i>*</i>
          </label>
          <div>
            <input
              onBlur={handleBlur}
              name="minimum_quantity"
              value={values.minimum_quantity}
              onChange={handleChange}
              id="minimum_qnty"
              type="number"
              min={1}
            />
            {errors.minimum_quantity && touched.minimum_quantity && (
              <small className="text-danger"> {errors.minimum_quantity} </small>
            )}
          </div>
          <label>
            <span>Tags</span>
            <i>*</i>
          </label>
          <div>
            <ReactTagInput
              name="tags"
              tags={values.tags}
              onChange={(newTags) => setFieldValue("tags", newTags)}
              removeOnBackspace={true}
            />

            {errors.tags && touched.tags && (
              <small className="text-danger"> {errors.tags} </small>
            )}
          </div>
          <label htmlFor="barcode">
            <span>Barcode</span>
          </label>
          <div>
            <input
              name="barcode"
              onChange={handleChange}
              value={values.barcode}
              id="barcode"
              type="text"
            />
          </div>
          <label>
            <span>Refundable</span>
          </label>
          <div>
            <label className="confi-switch">
              <input
                name="refundable"
                value={values.refundable}
                onChange={(e) =>
                  setFieldValue("refundable", e.target.checked ? 1 : 0)
                }
                checked={values.refundable == 1 ? true : false}
                type="checkbox"
              />

              <span className="slider round"></span>
            </label>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
