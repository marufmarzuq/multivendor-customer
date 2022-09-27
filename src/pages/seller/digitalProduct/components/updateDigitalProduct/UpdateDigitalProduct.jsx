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

  const formik = useFormik({
    validationSchema: addDigitalProductSchema,
    initialValues: {
      name: digitalProduct.name || "",
      category_id: digitalProduct.category_id || "",
      tags: digitalProduct.tags || [],
      file: digitalProduct.file || [],
      thumbnail_img: digitalProduct.thumbnail_img || "",
      photos: digitalProduct.photos || [],
      unit_price: digitalProduct.unit_price || "",
      purchase_price: digitalProduct.purchase_price || "",
      discount_type: digitalProduct.discount_type || "",
      discount: digitalProduct.discount || "",
      quantity: digitalProduct.quantity || "",
      description: digitalProduct.description || "",
      meta_title: digitalProduct.meta_title || "",
      meta_description: digitalProduct.meta_description || "",
      meta_img: digitalProduct.meta_img || "",
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      console.log(values);
      const finalValues = values;
      finalValues.product_id = id;

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
          }
        })
        .catch((error) => {
          toast.error(error.message);
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

export default UpdateDigitalProduct;
