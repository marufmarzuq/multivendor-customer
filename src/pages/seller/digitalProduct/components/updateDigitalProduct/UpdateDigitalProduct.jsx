import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { addDigitalProductSchema } from "../../../../../schema/productSchema";
import authHeader from "../../../../services/auth-header";
import DigtalProductSEO from "../addDigitalProducts/components/digitalProductSEO/DigitalProductSEO";
import ProductDescriptionDigital from "../addDigitalProducts/components/productDescriptionDigital/ProductDescriptionDigital";
import ProductImagesDigital from "../addDigitalProducts/components/productImagesDigital/ProductImagesDigital";
import ProductInfoDigital from "../addDigitalProducts/components/productInfoDigital/ProductInfoDigital";
import ProductPriceStockDigital from "../addDigitalProducts/components/productPriceStockDigital/ProductPriceStockDigital";
import digitalProductStyle from "./updateDigital.module.css";

const UpdateDigitalProduct = () => {
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
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      console.log(values);
      const finalValues = values;
      finalValues.product_id = "10";

      axios
        .post(
          "https://api.markutos.com/api/v1/seller/update-digital-product",
          finalValues,
          {
            headers: {
              Authorization: authHeader(),
            },
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e.message);
        });

      console.log(finalValues);
    },
  });

  return (
    <div className="add-product mx-3 mb-5">
      <form onSubmit={(e) => e.preventDefault()} action="">
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
