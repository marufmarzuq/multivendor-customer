import * as yup from "yup";

export const addProductSchema = yup.object({
  name: yup.string().required("Plese enter product name"),

  category_id: yup.string().required("Please select category"),

  brand_id: yup.string(),
  unit: yup.number().required("Please enter unit"),

  minimum_quantity: yup.number().required("Please enter minimum quantity"),

  tags: yup.array().required("Tags are required"),

  barcode: yup.string(),
  refundable: yup.boolean(),
  thumbnail_img: yup.string(),
  photos: yup.array(),
  video_provider: yup.string(),

  video_link: yup.string(),
  low_stock_quantity: yup.number(),
  stock_visibility_state: yup.boolean(),
  desription: yup.string(),

  unit_price: yup.number(),
  purchase_price: yup.number(),
  tax: yup.number(),
  tax_type: yup.string(),
  discount: yup.number(),
  discount_type: yup.string(),
  colors: yup.array(),
  choice_no: yup.string(),
  choice_options: yup.array(),
  variants_price: yup.array(),
  variant_sku: yup.array(),
  variant_quantity: yup.array(),
  variant_images: yup.array(),

  shipping_type: yup.string(),

  est_shipping_days: yup.number(),
  meta_title: yup.string(),
  meta_description: yup.string(),
  meta_img: yup.string(),
  pdf: yup.string(),
  cash_on_delivery: yup.boolean(),
});
