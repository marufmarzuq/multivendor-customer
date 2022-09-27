import * as yup from "yup";

export const addProductSchema = yup.object({
  name: yup.string().required("Plese enter product name"),

  category_id: yup.string().required("Please select category"),
  current_stock: yup.number().required("Please enter current stock"),
  brand_id: yup.string(),
  unit: yup.number().required("Please enter unit"),

  minimum_quantity: yup.number().required("Please enter minimum quantity"),

  tags: yup.array().min(1, "Tags are required").required("Tags are required"),

  barcode: yup.string(),
  refundable: yup.number(),
  thumbnail_img: yup.string().required("Thumbnail image is required"),
  photos: yup.array(),

  video_provider: yup.string(),
  video_link: yup.string(),

  low_stock_quantity: yup.number().required("Please enter low stock quantity"),
  stock_visibility_state: yup.string(),
  description: yup.string().required("Description is required"),

  unit_price: yup.number().required("Please enter unit price"),
  purchase_price: yup.number().required("Please enter purchase price"),
  tax: yup.number(),
  tax_type: yup.string(),
  discount: yup.number().required("Please enter discount"),
  discount_type: yup.string().required("Please select discount type"),
  colors: yup.array(),
  size: yup.array(),
  choice_no: yup.array(),
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
  cash_on_delivery: yup.number(),
  featured: yup.number(),
  todays_deal: yup.number(),
});

export const updateProductSchema = yup.object({
  name: yup.string().required("Plese enter product name"),

  category_id: yup.string().required("Please select category"),
  current_stock: yup.number().required("Please enter current stock"),
  brand_id: yup.string(),
  unit: yup.number().required("Please enter unit"),

  minimum_quantity: yup.number().required("Please enter minimum quantity"),

  tags: yup.array().min(1, "Tags are required").required("Tags are required"),

  barcode: yup.string(),
  refundable: yup.number(),
  thumbnail_img: yup.string().required("Thumbnail image is required"),
  photos: yup.array(),

  video_provider: yup.string(),
  video_link: yup.string(),

  low_stock_quantity: yup.number().required("Please enter low stock quantity"),
  stock_visibility_state: yup.string(),
  description: yup.string().required("Description is required"),

  unit_price: yup.number().required("Please enter unit price"),
  purchase_price: yup.number().required("Please enter purchase price"),
  tax: yup.number(),
  tax_type: yup.string(),
  discount: yup.number().required("Please enter discount"),
  discount_type: yup.string().required("Please select discount type"),
  colors: yup.array(),
  size: yup.array(),
  choice_no: yup.array(),
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
  cash_on_delivery: yup.number(),
  featured: yup.number(),
  todays_deal: yup.number(),
});

export const addDigitalProductSchema = yup.object({
  name: yup.string().required("Plese enter product name"),

  category_id: yup.string().required("Please select category"),
  tags: yup.array().min(1, "Tags are required").required("Tags are required"),
  file: yup.string().required("Files are required"),
  thumbnail_img: yup.string().required("Please select thumbnail image"),
  photos: yup.array(),

  unit_price: yup.number().required("Please enter unit price"),
  purchase_price: yup.number().required("Please enter purchase price"),
  discount_type: yup.string().required("Please select discount type"),
  tax: yup.string(),
  tax_type: yup.string(),
  discount: yup.number().required("Please enter discount"),
  quantity: yup.number().required("Please enter quantity"),
  desription: yup.string(),
  meta_title: yup.string().required("Please enter meta title"),
  meta_description: yup.string().required("Please enter meta description"),
  meta_img: yup.string().required("Please provide meta image"),
});