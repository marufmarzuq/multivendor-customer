import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { updateProductSchema } from "../../../../../schema/productSchema";
import { markutosSellerApi } from "../../../../services/Api/api";
import authHeader from "../../../../services/auth-header";
import AddProducts from "../addProduct/AddProducts";
import CashOnDelivery from "../addProduct/components/cashOnDelivery/CashOnDelivery";
import Featured from "../addProduct/components/featured/Featured";
import LowStockQuantity from "../addProduct/components/lowStockQuantity/LowStockQuantity";
import PdfSpecification from "../addProduct/components/pdfSpecification/PdfSpecification";
import ProductDescription from "../addProduct/components/productDescription/ProductDescription";
import ProductImages from "../addProduct/components/productImages/ProductImages";
import ProductInformation from "../addProduct/components/productInformation/ProductInformation";
import ProductPriceStock from "../addProduct/components/productPriceStock/ProductPriceStock";
import ProductSEO from "../addProduct/components/productSEO/ProductSEO";
import ProductVariation from "../addProduct/components/productVariation/ProductVariation";
import ProductVideos from "../addProduct/components/productVideos/ProductVideos";
import ShippingConfiguration from "../addProduct/components/shippingConfiguration/ShippingConfiguration";
import ShippingTime from "../addProduct/components/shippingTime/ShippingTime";
import StockVisibility from "../addProduct/components/stockVisibility/StockVisibility";
import TodaysDeal from "../addProduct/components/todaysDeal/TodaysDeal";
import { FocusError } from "focus-formik-error";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const formik = useFormik({
    validationSchema: updateProductSchema,
    initialValues: {
      name: product?.name || "",
      category_id: product?.category_id || "",
      brand_id: product?.brand_id || "",
      current_stock: product?.current_stock || "",
      unit: product?.unit || "",
      minimum_quantity: product?.min_qty || "",
      tags: product?.tags || [],
      barcode: product?.barcode || "",
      refundable: product?.refundable || 0,
      thumbnail_img: product?.thumbnail_img || "",
      photos: product?.photos || [],
      video_provider: product?.video_provider || "",
      video_link: product?.video_link || "",
      low_stock_quantity: product?.low_stock_quantity || "",
      stock_visibility_state: product?.stock_visibility_state || "text",
      description: product?.description || "",
      unit_price: product?.unit_price || "",
      purchase_price: product?.purchase_price || "",
      tax: product?.tax || "0",
      tax_type: product?.tax_type || "flat",
      discount: product?.discount || "",
      discount_type: product?.discount_type || "",
      colors: product?.colors || ["red"],
      size: product?.size || ["M"],
      choice_no: product?.choice_no || ["1"],
      choice_options_1: product?.choice_options || ["M"],
      variants: product?.variants || ["Red-M"],
      variant_price: product?.variant_price || ["100"],
      variant_sku: product?.variant_sku || ["sku-100"],
      variant_quantity: product?.variant_quantity || ["100"],
      variant_images: product?.variant_images || ["image-test"],
      product_specification: product?.product_specification || "",
      shipping_type: product?.shipping_type || "test",
      est_shipping_days: product?.est_shipping_days || "",
      meta_title: product?.meta_title || "",
      meta_description: product?.meta_description || "",
      meta_img: product?.meta_img || "",
      pdf: product?.pdf || "",
      cash_on_delivery: product?.cash_on_delivery || 0,
      featured: product?.featured || 1,
      todays_deal: product?.todays_deal || 1,
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      const finalValues = values;
      finalValues.product_id = id;
      if (finalValues.discount_type == "no discount") {
        values.discount = 0;
      }

      markutosSellerApi
        .post("/update-product", values, {
          headers: {
            Authorization: authHeader(),
          },
        })
        .then((res) => {
          if (res.data.message == "Product updated successfully") {
            toast.success(res.data.message);
            getProduct();
          }
        })
        .catch((e) => {
          toast.error(e.message);
        });
    },
  });

  const getProduct = () => {
    markutosSellerApi
      .get(`edit-product?product_id=${id}`, {
        headers: {
          Authorization: authHeader(),
        },
      })
      .then((res) => {
        setProduct(res.data.product);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

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

  console.log(values.discount_type);
  console.log(values.discount);

  return (
    <div>
      <div className="add-product mx-3 mb-5">
        <form onSubmit={(e) => e.preventDefault()}>
          <FocusError formik={formik} />
          <div className=" d-flex justify-content-between mt-3 mb-3">
            <h4>Update product</h4>
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
              onClick={handleSubmit}
              type="submit"
              className="btn  btn-outline-success"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
