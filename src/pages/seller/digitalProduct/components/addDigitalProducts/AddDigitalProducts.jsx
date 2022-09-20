import React, { useEffect } from "react";
import digitalProductStyle from "./addDigitalProduct.module.css";
import ProductInfoDigital from "./components/productInfoDigital/ProductInfoDigital";
import ProductImagesDigital from "./components/productImagesDigital/ProductImagesDigital";
import ProductPriceStockDigital from "./components/productPriceStockDigital/ProductPriceStockDigital";
import ProductDescriptionDigital from "./components/productDescriptionDigital/ProductDescriptionDigital";
import DigtalProductSEO from "./components/digitalProductSEO/DigitalProductSEO";
import {
  addDigitalProductSchema,
  addProductSchema,
} from "../../../../../schema/productSchema";
import { useFormik } from "formik";

const AddDigitalProducts = () => {
  const {
    values,
    setErrors,
    handleChange,
    touched,
    errors,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = useFormik({
    validationSchema: addDigitalProductSchema,
    initialValues: {
      name: "",
      category_id: "",
      tags: ["example"],
      files: [],
      thumbnail_img: "",
      photos: [],
      unit_price: "",
      purchase_price: "",
      discount_type: "",
      discount: "",
      quantity: "",
      description: "",
      meta_title: "",
      meta_description: "",
      meta_img: "",
      // brand_id: "",
      // current_stock: "",
      // unit: "",
      // minimum_quantity: "",
      // barcode: "",
      // refundable: false,
      // video_provider: "",
      // video_link: "",
      // low_stock_quantity: "",
      // stock_visibility_state: "",
      // tax: "",
      // tax_type: "",
      // colors: [],
      // size: [],
      // choice_no: "",
      // choice_options: [],
      // variants: [],
      // variant_price: [],
      // variant_sku: [],
      // variant_quantity: [],
      // variant_images: [],
      // product_specification: "",
      // shipping_type: "",
      // est_shipping_days: "",
      // pdf: "",
      // cash_on_delivery: true,
      // featured: true,
      // todays_deal: true,
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <div className="add-product mx-3 mb-5">
      <form onSubmit={(e) => e.preventDefault()} action="">
        <div className=" d-flex justify-content-between me-md-5 pe-md-4 me-0 pe-0 mt-3 mb-3">
          <h4>Add New Digital product</h4>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn me-md-5  me-0 btn-outline-success"
          >
            Save Product
          </button>
        </div>
        <div className={digitalProductStyle.add_product_widget_container}>
          <ProductInfoDigital
            setFieldValue={setFieldValue}
            setErrors={setErrors}
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            touched={touched}
          />
          <ProductImagesDigital
            setFieldValue={setFieldValue}
            setErrors={setErrors}
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            touched={touched}
          />
          <ProductPriceStockDigital
            setFieldValue={setFieldValue}
            setErrors={setErrors}
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            touched={touched}
          />
          <ProductDescriptionDigital
            setFieldValue={setFieldValue}
            setErrors={setErrors}
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            touched={touched}
          />
          <DigtalProductSEO
            setFieldValue={setFieldValue}
            setErrors={setErrors}
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="mt-4">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn  btn-lg btn-outline-success"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDigitalProducts;
