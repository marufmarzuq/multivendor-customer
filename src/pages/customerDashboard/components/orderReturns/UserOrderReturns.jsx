import { markutosFrontendApi } from "../../../services/Api/api";
import customerAuthHeader from "../../../services/customer-auth-header";
import orderStyle from "./orderReturns.module.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { FocusError } from "focus-formik-error";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { addOrderReturn } from "../../../../schema/addOrderReturn";

const UserOrderReturns = () => {

	const formik = useFormik({
    validationSchema: addOrderReturn,
    initialValues: {
      order_code: '',
      reason: '',
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      const finalValues = values;
      markutosFrontendApi
        .post("/dashboard/return-order", finalValues, {
          headers: {
            Authorization: customerAuthHeader(),
          },
        })
        .then((res) => {
          toast.success(res.data.message);
          action.resetForm();
        })
        .catch((e) => {
          toast.error(e.message);
        });
    },
  });

  const {
    values,
    setErrors,
    handleChange,
    touched,
    errors,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = formik;

  return (
    <div>
      <h4>Order Return Requests</h4>
      <form onSubmit={(e) => e.preventDefault()}>
				<FocusError formik={formik} />
				<div className={orderStyle.container}>
					<div>
						<label> Order Code</label>
						<input name="order_code" type="text" placeholder="Type Order ID"
						value={values.order_code}
						onChange={handleChange}
						onBlur={handleBlur}
						/>
						{errors.order_code && touched.order_code && (
							<small className="text-danger"> {errors.order_code} </small>
						)}
					</div>
					<div>
						<label> Refund Reason </label>
						<textarea
						cols={"5"} rows={"5"}
						name="reason"
						placeholder="Please type refund reason"
						value={values.reason}
						onChange={handleChange}
						onBlur={handleBlur}></textarea>

						{errors.reason && touched.reason && (
							<small className="text-danger"> {errors.reason} </small>
						)}
					</div>
				</div>
				<button type="submit" onClick={handleSubmit} className="btn btn-primary mt-2 "> {" "} Submit <BsArrowRightCircle /></button>
      </form>
    </div>
  );
};

export default UserOrderReturns;
