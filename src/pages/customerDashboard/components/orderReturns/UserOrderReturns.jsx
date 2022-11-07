import {useState} from "react";
import { markutosFrontendApi } from "../../../services/Api/api";
import customerAuthHeader from "../../../services/customer-auth-header";
import orderStyle from "./orderReturns.module.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { FocusError } from "focus-formik-error";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { addOrderReturn } from "../../../../schema/addOrderReturn";

const UserOrderReturns = () => {
	const [submitting, setSubmitting] = useState(false);
	const formik = useFormik({
    validationSchema: addOrderReturn,
    initialValues: {
      order_code: '',
      reason: '',
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      const finalValues = values;
	  setSubmitting(true);
      markutosFrontendApi
        .post("/dashboard/return-order", finalValues, {
          headers: {
            Authorization: customerAuthHeader(),
          },
        })
        .then((res) => {
			setSubmitting(true);
			toast.success(res.data.message);
			action.resetForm();
        })
        .catch((e) => {
			toast.error(e.message);
			setSubmitting(false);
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
				<button disabled={submitting}
				type="submit" onClick={handleSubmit} className="btn btn-primary mt-2 ">
				{submitting ? (
					<div>
						<div
						className="spinner-border spinner-border-sm me-1"
						role="status"
						>
						<span className="visually-hidden">Loading...</span>
						</div>
						Save Product
					</div>
					) : (
					<div>{" "}Submit <BsArrowRightCircle /></div> 
				)}
				</button>
      </form>
    </div>
  );
};

export default UserOrderReturns;
