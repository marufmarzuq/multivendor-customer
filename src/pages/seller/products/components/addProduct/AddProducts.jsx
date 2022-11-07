import React, {  useState } from "react";
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
import { markutosSellerApi } from "../../../../services/Api/api";
import authHeader from "../../../../services/auth-header";
import { FocusError } from "focus-formik-error";
import { toast } from "react-toastify";

const AddProducts = () => {
  const [submitting, setSubmitting] = useState(false);
  const formik = useFormik({
    validationSchema: addProductSchema,

    initialValues: {
      product_type: "simple",
      name: "",
      category_id: "",
      brand_id: "",
      current_stock: "",
      unit: "",
      minimum_quantity: "",
      tags: [],
      barcode: "",
      refundable: 0,
      thumbnail_img: "",
      photos: [],
      video_provider: "",
      video_link: "",
      low_stock_quantity: "",
      stock_visibility_state: "text",
      description: "",
      unit_price: "",
      purchase_price: "",
      tax: "0",
      tax_type: "flat",
      discount: 0,
      discount_type: "",
      colors: ["red"],
      size: ["M"],
      choice_no: ["1"],
      choice_options_1: ["M"],
      variants: ["Red-M"],
      variant_price: ["100"],
      variant_sku: ["sku-100"],
      variant_quantity: ["100"],
      variant_images: ["image-test"],
      product_specification: "",
      shipping_type: "test",
      est_shipping_days: "",
      meta_title: "",
      meta_description: "",
      meta_img: "",
      pdf: "",
      cash_on_delivery: 1,
      featured: 1,
      todays_deal: 1,
    },

    enableReinitialize: true,
    onSubmit: (values, action) => {
      const finalValues = values;

      if (finalValues.discount == "no discount") {
        finalValues.discount = 0;
      }

      setSubmitting(true);
      markutosSellerApi
        .post("/add-new-product", finalValues, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          if (res.data.message == "New product added successfully") {
            action.resetForm();
          }
          console.log(res.data);
          toast.success(res.data.message);
          setSubmitting(false);
        })
        .catch((e) => {
          toast.error(e.message);
          setSubmitting(false);
        });
    },
  });

  const {
    values,
    setErrors,
    handleChange,
    touched,
    errors,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = formik;

  return (
    <div className="add-product mx-3 mb-5">
      <form onSubmit={(e) => e.preventDefault()}>
        <FocusError formik={formik} />
        <div className=" d-flex justify-content-between mt-3 mb-3">
          <h4>Add New product</h4>
          <button
            disabled={submitting}
            onClick={handleSubmit}
            type="submit"
            className="btn btn-outline-success"
          >
            {submitting ? (
              <div>
                <div
                  className="spinner-border spinner-border-sm me-1"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                Save Product
              </div>
            ) : (
              "Save Product"
            )}
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
              setFieldValue={setFieldValue}
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <ProductVariation
              setFieldValue={setFieldValue}
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <ProductPriceStock
              setFieldValue={setFieldValue}
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <ProductDescription
              setFieldValue={setFieldValue}
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <PdfSpecification
              setFieldValue={setFieldValue}
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <ProductSEO
              setFieldValue={setFieldValue}
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
              setFieldValue={setFieldValue}
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <CashOnDelivery
              setFieldValue={setFieldValue}
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <Featured
              setFieldValue={setFieldValue}
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errors={errors}
              touched={touched}
            />
            <TodaysDeal
              setFieldValue={setFieldValue}
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
            disabled={submitting}
            onClick={handleSubmit}
            type="submit"
            className="btn btn-outline-success"
          >
            {submitting ? (
              <div>
                <div
                  className="spinner-border spinner-border-sm me-1"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                Save Product
              </div>
            ) : (
              "Save Product"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
