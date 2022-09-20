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

  low_stock_quantity: yup.number().required("Please enter low stock quantity"),
  stock_visibility_state: yup.string(),
  desription: yup.string(),

  unit_price: yup.number().required("Please enter unit price"),
  purchase_price: yup.number().required("Please enter purchase price"),
  tax: yup.number(),
  tax_type: yup.string(),
  discount: yup.number().required("Please enter discount"),
  discount_type: yup.string().required("Please select discount type"),
  quantity: yup.number().required("Please enter quantity"),
  colors: yup.array(),
  size: yup.array(),
  choice_no: yup.string(),
  choice_options: yup.array(),
  variants: yup.array(),
  variant_price: yup.array(),
  variant_sku: yup.array(),
  variant_quantity: yup.array(),
  variant_images: yup.array(),

  product_specification: yup.string(),

  meta_title: yup.string().required("Please enter meta title"),
  meta_description: yup.string().required("Please enter meta description"),
  meta_img: yup.string().required("Please provide meta image"),

  est_shipping_days: yup.number().required("Please enter shipping time"),
  pdf: yup.string(),
  shipping_type: yup.string(),
  cash_on_delivery: yup.boolean(),
  featured: yup.boolean(),
  todays_deal: yup.boolean(),
});

export const updateProductSchema = yup.object({
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

  low_stock_quantity: yup.number().required("Please enter low stock quantity"),
  stock_visibility_state: yup.string(),
  desription: yup.string(),

  unit_price: yup.number().required("Please enter unit price"),
  purchase_price: yup.number().required("Please enter purchase price"),
  tax: yup.number(),
  tax_type: yup.string(),
  discount: yup.number().required("Please enter discount"),
  discount_type: yup.string().required("Please select discount type"),
  quantity: yup.number().required("Please enter quantity"),
  colors: yup.array(),
  size: yup.array(),
  choice_no: yup.string(),
  choice_options: yup.array(),
  variants: yup.array(),
  variant_price: yup.array(),
  variant_sku: yup.array(),
  variant_quantity: yup.array(),
  variant_images: yup.array(),

  product_specification: yup.string(),

  meta_title: yup.string().required("Please enter meta title"),
  meta_description: yup.string().required("Please enter meta description"),
  meta_img: yup.string().required("Please provide meta image"),

  est_shipping_days: yup.number().required("Please enter shipping time"),
  pdf: yup.string(),
  shipping_type: yup.string(),
  cash_on_delivery: yup.boolean(),
  featured: yup.boolean(),
  todays_deal: yup.boolean(),
});

export const addDigitalProductSchema = yup.object({
  name: yup.string().required("Plese enter product name"),

  category_id: yup.string().required("Please select category"),
  tags: yup.array().required("Tags are required"),
  files: yup.array().required("Files are required"),
  thumbnail_img: yup.string(),
  photos: yup.array(),

  unit_price: yup.number().required("Please enter unit price"),
  purchase_price: yup.number().required("Please enter purchase price"),
  discount_type: yup.string().required("Please select discount type"),
  discount: yup.number().required("Please enter discount"),
  quantity: yup.number().required("Please enter quantity"),
  desription: yup.string(),
  meta_title: yup.string().required("Please enter meta title"),
  meta_description: yup.string().required("Please enter meta description"),
  meta_img: yup.string().required("Please provide meta image"),

  // brand_id: yup.string(),
  // unit: yup.number().required("Please enter unit"),

  // minimum_quantity: yup.number().required("Please enter minimum quantity"),

  // barcode: yup.string(),
  // refundable: yup.boolean(),

  // video_provider: yup.string(),
  // video_link: yup.string(),

  // low_stock_quantity: yup.number().required("Please enter low stock quantity"),
  // stock_visibility_state: yup.string(),

  // tax: yup.number(),
  // tax_type: yup.string(),
  // colors: yup.array(),
  // size: yup.array(),
  // choice_no: yup.string(),
  // choice_options: yup.array(),
  // variants: yup.array(),
  // variant_price: yup.array(),
  // variant_sku: yup.array(),
  // variant_quantity: yup.array(),
  // variant_images: yup.array(),

  // product_specification: yup.string(),

  // est_shipping_days: yup.number().required("Please enter shipping time"),
  // pdf: yup.string(),
  // shipping_type: yup.string(),
  // cash_on_delivery: yup.boolean(),
  // featured: yup.boolean(),
  // todays_deal: yup.boolean(),
});
