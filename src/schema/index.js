import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRegExp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const shopSettingSchema = yup.object({
  name: yup
    .string()
    .min(2, "At least 2 character")
    .required("Shop name is required"),
  address: yup
    .string()
    .min(4, "At least 4 character")
    .required("Shop address is required"),
  logo: yup.string(),
  sliders: yup.string(),
  facebook: yup.string(),
  twitter: yup.string(),
  google: yup.string(),
  youtube: yup.string(),
  instagram: yup.string(),
});

export const manageProfileSchema = yup.object({
  first_name: yup.string().required("Name is required"),
  last_name: yup.string().required("Last Name is required"),

  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),

  email: yup.string().email("Not a valid email").required("Email is required"),
  country: yup.string(),
  city: yup.string(),
  area: yup.string(),
  pin_code: yup.string(),
  account_number: yup
    .number("Not Valid")
    .required("Account number is required"),
  bank_name: yup.string().required("Bank is required"),
  branch_name: yup.string().required("Branch is required"),
  routing_number: yup.number().required("Routing number is required"),
  swift: yup.string().required("Swift is required"),
  account_holder: yup.string().required("Account holder name is required"),
  password: yup.string().required("Password is required"),
  // .matches(
  //   passwordRegExp,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  // )
});
