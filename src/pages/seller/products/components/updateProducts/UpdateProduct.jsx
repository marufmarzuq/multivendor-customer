import { useFormik } from "formik";
import React from "react";
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

const UpdateProduct = () => {
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
    validationSchema: updateProductSchema,
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
      quantity: "",
      colors: [],
      size: [],
      choice_no: "",
      choice_options: [],
      variants: [],
      variant_price: [],
      variant_sku: [],
      variant_quantity: [],
      variant_images: [],
      product_specification: "",
      shipping_type: "",
      est_shipping_days: "",
      meta_title: "",
      meta_description: "",
      meta_img: "",
      pdf: "",
      cash_on_delivery: true,
      featured: true,
      todays_deal: true,
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      const finalValues = values;
      finalValues.product_id = 10;

      markutosSellerApi
        .post("/update-product", finalValues, {
          headers: {
            Authorization: authHeader(),
          },
        })
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
    <div>
      <div className="add-product mx-3 mb-5">
        {/* <div className=" d-flex justify-content-between mt-3 mb-3">
          <h4>Update product</h4>
          <button className="btn btn-outline-success"> Save Product </button>
        </div>
        <div className="add-product-widget-container">
          <div className="">
            <ProductInformation />
            <ProductImages />
            <ProductVideos />
            <ProductVariation />
            <ProductPriceStock />
            <ProductDescription />
            <PdfSpecification />
            <ProductSEO />
          </div>
          <div className="">
            <ShippingConfiguration />
            <LowStockQuantity />
            <StockVisibility />
            <CashOnDelivery />
            <Featured />
            <TodaysDeal />
            <ShippingTime />
          </div>
        </div>
        <div className="mt-4">
          <button className="btn btn-lg btn-outline-success">
            Save Product
          </button>
        </div> */}

        <form onSubmit={(e) => e.preventDefault()}>
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
