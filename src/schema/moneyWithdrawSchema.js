import * as yup from "yup";

export const moneyWithdrawSchema = yup.object({
  pendingBalance: yup.number(),

  amount: yup
    .number()
    .lessThan(yup.ref("pendingBalance"), `Must be less than withdrawn balance`)
    .required("Please enter amount"),

  payment_method: yup.string().required("Please select payment method"),

  account_number: yup.number().when("payment_method", {
    is: (payment_method) => payment_method == "bank",
    then: yup.number().required("Please enter Account number"),
  }),

  bank_name: yup.string().when("payment_method", {
    is: (payment_method) => payment_method == "bank",
    then: yup.string().required("Please enter bank name"),
  }),

  branch_name: yup.string().when("payment_method", {
    is: (payment_method) => payment_method == "bank",
    then: yup.string().required("Please enter branch name"),
  }),

  routing_number: yup.number().when("payment_method", {
    is: (payment_method) => payment_method == "bank",
    then: yup.number().required("Please enter Routing number"),
  }),

  swift: yup.number().when("payment_method", {
    is: (payment_method) => payment_method == "bank",
    then: yup.number().required("Please enter Swift"),
  }),

  account_holder: yup.string().when("payment_method", {
    is: (payment_method) => payment_method == "bank",
    then: yup.string().required("Please enter Account Holder name"),
  }),

  //   paypalAccountNumber: yup.number().when("payment_method", {
  //     is: (payment_method) => payment_method == "paypal",
  //     then: yup.number().required("Please enter Paypal Account number"),
  //   }),

  email: yup
    .string()
    .email("Must be a valid email")
    .when("payment_method", {
      is: (payment_method) => payment_method == "paypal",
      then: yup
        .string()
        .email("Must be a valid email")
        .required("Please enter Paypal Account number"),
    }),

  card_number: yup.number().when("payment_method", {
    is: (payment_method) => payment_method == "visa",
    then: yup.number().required("Please enter Visa card number"),
  }),

  message: yup.string().required("Message is required"),
});
