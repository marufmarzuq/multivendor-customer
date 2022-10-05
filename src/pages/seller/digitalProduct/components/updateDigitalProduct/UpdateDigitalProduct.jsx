import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addDigitalProductSchema } from "../../../../../schema/productSchema";
import { markutosSellerApi } from "../../../../services/Api/api";
import authHeader from "../../../../services/auth-header";
import DigtalProductSEO from "../addDigitalProducts/components/digitalProductSEO/DigitalProductSEO";
import ProductDescriptionDigital from "../addDigitalProducts/components/productDescriptionDigital/ProductDescriptionDigital";
import ProductImagesDigital from "../addDigitalProducts/components/productImagesDigital/ProductImagesDigital";
import ProductInfoDigital from "../addDigitalProducts/components/productInfoDigital/ProductInfoDigital";
import ProductPriceStockDigital from "../addDigitalProducts/components/productPriceStockDigital/ProductPriceStockDigital";
import digitalProductStyle from "./updateDigital.module.css";
import { FocusError } from "focus-formik-error";

const UpdateDigitalProduct = () => {
  const { id } = useParams();
  const [digitalProduct, setDigitalProduct] = useState({});
  const [submiting, setSubmitting] = useState(false);

  const formik = useFormik({
    validationSchema: addDigitalProductSchema,
    initialValues: {
      product_type: digitalProduct?.product_type || "",
      name: digitalProduct.name || "",
      category_id: digitalProduct.category_id || "",
      tags: digitalProduct.tags || [],
      file: digitalProduct.file || [],
      thumbnail_img: digitalProduct.thumbnail_img || "",
      photos: digitalProduct.photos || [],
      unit_price: digitalProduct.unit_price || "",
      purchase_price: digitalProduct.purchase_price || "",
      discount_type: digitalProduct.discount_type || "",
      discount: digitalProduct.discount || 0,
      quantity: digitalProduct.quantity || 0,
      current_stock: digitalProduct.current_stock || 0,
      description: digitalProduct.description || "",
      meta_title: digitalProduct.meta_title || "",
      meta_description: digitalProduct.meta_description || "",
      meta_img: digitalProduct.meta_img || "",
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      const finalValues = values;
      finalValues.product_id = id;

      if (finalValues.discount_type == "no discount") {
        finalValues.discount = 0;
      }

      setSubmitting(true);
      markutosSellerApi
        .post(`/update-digital-product`, finalValues, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          if (res.data.message == "Product updated successfully") {
            toast.success(res.data.message);
            getDigitalProduct();
            setSubmitting(false);
          }
        })
        .catch((error) => {
          toast.error(error.message);
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

  const getDigitalProduct = () => {
    markutosSellerApi
      .get(`/edit-digital-product?product_id=${id}`, {
        headers: {
          Authorization: authHeader(),
        },
      })
      .then((res) => {
        setDigitalProduct(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getDigitalProduct();
  }, []);

  return (
    <div className="add-product mx-3 mb-5">
      <form onSubmit={(e) => e.preventDefault()} action="">
        <FocusError formik={formik} />
        <div className=" d-flex justify-content-between me-md-5 pe-md-4 me-0 pe-0 mt-3 mb-3">
          <h4>Update Digital product</h4>
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

export default UpdateDigitalProduct;
