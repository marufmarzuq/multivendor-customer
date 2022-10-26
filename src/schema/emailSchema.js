import * as yup from "yup";

export const emailSchema = yup.object({
  email: yup
    .string()
    .email("Enter valid email")
    .required("Please enter your email"),
});
