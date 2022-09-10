import * as yup from "yup";

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
