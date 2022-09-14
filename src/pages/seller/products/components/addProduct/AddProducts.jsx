import React, { useEffect } from "react";
import ProductInformation from "./components/productInformation/ProductInformation";

import ProductImages from "./components/productImages/ProductImages";
import ProductVideos from "./components/productVideos/ProductVideos";
import ProductVariation from "./components/productVariation/ProductVariation";
import ProductPriceStock from "./components/productPriceStock/ProductPriceStock";
import ProductDescription from "./components/productDescription/ProductDescription";
import ProductSEO from "./components/productSEO/ProductSEO";
import StockVisibility from "./components/stockVisibility/StockVisibility";
import CashOnDelivery from "./components/cashOnDelivery/CashOnDelivery";
import Featured from "./components/featured/Featured";
import TodaysDeal from "./components/todaysDeal/TodaysDeal";
import ShippingTime from "./components/shippingTime/ShippingTime";
import PdfSpecification from "./components/pdfSpecification/PdfSpecification";
import "./addProducts.css";
import LowStockQuantity from "./components/lowStockQuantity/LowStockQuantity";
import ShippingConfiguration from "./components/shippingConfiguration/ShippingConfiguration";
import { addProductSchema } from "../../../../../schema/productSchema";
import { useFormik } from "formik";

const AddProducts = () => {
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
    validationSchema: addProductSchema,
    initialValues: {
      name: "",
      category_id: "",
      brand_id: "",
      current_stock: "",
      unit: "",
      minimum_quantity: "",
      tags: ["example tag"],
      barcode: "",
      refundable: false,
      thumbnail_img: "",
      photos: [],
      video_provider: "",
      video_link: "",
      low_stock_quantity: "",
      stock_visibility_state: "",
      description: "",
      unit_price: "",
      purchase_price: "",
      tax: "",
      tax_type: "",
      discount: "",
      discount_type: "",
      colors: [],
      choice_no: "",
      choice_options: [],
      variants: [],
      variant_price: [],
      variant_sku: [],
      variant_quantity: [],
      variant_images: [],
      shipping_type: "",
      est_shipping_days: "",
      meta_title: "",
      meta_description: "",
      meta_img: "",
      pdf: "",
      cash_on_delivery: true,
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <div className="add-product mx-3 mb-5">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className=" d-flex justify-content-between mt-3 mb-3">
          <h4>Add New product</h4>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-outline-success"
          >
            Save Product
          </button>
        </div>

        <div className="add-product-widget-container">
          <div className="">
            <ProductInformation
              setFieldValue={setFieldValue}
              setErrors={setErrors}
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <ProductImages
              setFieldValue={setFieldValue}
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <ProductVideos
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <ProductVariation
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <ProductPriceStock
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <ProductDescription
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <PdfSpecification
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <ProductSEO
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
          </div>
          <div className="">
            <ShippingConfiguration
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <LowStockQuantity
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <StockVisibility
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <CashOnDelivery
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <Featured
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <TodaysDeal
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <ShippingTime
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn  btn-outline-success"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
