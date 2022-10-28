import * as yup from "yup";

export const addOrderReturn = yup.object({
  order_code: yup.string().required("Please enter order code"),
  reason: yup.string().required("Please enter Refund reason"),
});
