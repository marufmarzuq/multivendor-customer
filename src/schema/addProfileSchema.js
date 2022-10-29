import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const addProfileSchema = yup.object({
  first_name: yup.string().required("Please enter first name"),
  last_name: yup.string().required("Please enter last name"),
  email: yup
    .string()
    .email("Enter valid email")
    .required("Please enter your email"),
	phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
	address: yup
    .string()
    .min(4, "At least 4 character")
    .required("Shop address is required"),
});
