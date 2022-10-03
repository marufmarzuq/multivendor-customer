import React, { useEffect, useState } from "react";
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
import { markutosSellerApi } from "../../../../services/Api/api";
import authHeader from "../../../../services/auth-header";
import axios from "axios";
import { toast } from "react-toastify";
import { FocusError } from "focus-formik-error";
const AddDigitalProducts = () => {
  const [submiting, setSubmitting] = useState(false);

  const formik = useFormik({
    validationSchema: addDigitalProductSchema,
    initialValues: {
      name: "",
      category_id: "",
      tags: [],
      file: "",
      thumbnail_img: "",
      photos: [],
      unit_price: "",
      purchase_price: "",
      discount_type: "",
      discount: 0,
      tax: "",
      tax_type: "",
      quantity: 0,
      current_stock: 0,
      description: "",
      meta_title: "",
      meta_description: "",
      meta_img: "",
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      if (values.discount_type == "no discount") {
        values.discount = 0;
      }

      setSubmitting(true);
      markutosSellerApi
        .post("/add-new-digital-product", values, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          if (res.data.message == "New digital product added successfully") {
            toast.success(res.data.message);
            action.resetForm();
            setSubmitting(false);
          }
        })
        .catch((e) => {
          toast.error(e.message);
          setSubmitting(false);
        });

      // axios
      //   .post(
      //     "https://api.markutos.com/api/v1/seller/add-new-digital-product",
      //     values,
      //     {
      //       headers: {
      //         Authorization: authHeader(),
      //       },
      //     }
      //   )
      //   .then((res) => {
      //     if (res.data.message == "New digital product added successfully") {
      //       toast.success(res.data.message);
      //     }
      //   })
      //   .catch((e) => {
      //     toast.error(e.message);
      //   });
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
      <form onSubmit={(e) => e.preventDefault()} action="">
        <FocusError formik={formik} />
        <div className=" d-flex justify-content-between me-md-5 pe-md-4 me-0 pe-0 mt-3 mb-3">
          <h4>Add New Digital product</h4>
          <button
            disabled={submiting}
            onClick={handleSubmit}
            type="submit"
            className="btn me-md-5  me-0 btn-outline-success"
          >
            {submiting ? (
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
            disabled={submiting}
            onClick={handleSubmit}
            type="submit"
            className="btn me-md-5  me-0 btn-outline-success"
          >
            {submiting ? (
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

export default AddDigitalProducts;
