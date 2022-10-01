import * as yup from "yup";

export const addSupportSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup.string().required("Please enter your email"),
  subject: yup.string().required("Please enter subject of your query"),
  // message: yup.string().required("Please enter your query"),
});
