import {useState} from "react";
import cartStyle from "./cart.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FocusError } from "focus-formik-error";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { markutosFrontendApi } from "../../../../services/Api/api";
import * as yup from "yup";
import { useCart } from "react-use-cart";

const schema = yup.object().shape({
	code: yup.string().required("Coupon  is required"),
});
const Coupon = () => {
	const [loading, setLoading] = useState(false);
	const {
		items,
		addCartMetadata,
		updateCartMetadata,
		metadata
	  } = useCart();

	const formik = useFormik({
	validationSchema: schema,
	initialValues: {
		code: "",
		discount: 0,
		products: [],
	},
	enableReinitialize: true,
	onSubmit: (values, action) => {
		const product_id = items.map((item) => {
			return item.id;
		});
		const finalValues = values;
		finalValues.products = product_id;
		setLoading(true);
		markutosFrontendApi
		.post("/cart/apply-coupon", finalValues )
		.then((res) => {
			setLoading(false);
			// Set coupon price
			if(metadata?.coupon){
				updateCartMetadata({coupon:30})
			}else{
				addCartMetadata({coupon:20})
			}
			toast.success(res.data.message);
			action.resetForm();
		})
		.catch((e) => {
			toast.error(e.message);
			setLoading(false);
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
    <div className={cartStyle.coupon}>
      <h5 className="mb-3">Have Coupon code?</h5>
	  <form onSubmit={(e) => e.preventDefault()}>
	  	<FocusError formik={formik} />
		<input type="text" name="code" placeholder="Enter coupon code" 
			value={values.code}
			onChange={handleChange}
			onBlur={handleBlur}
		/>
		{errors.code && touched.code && (
		<small className="text-danger"> {errors.code} </small>
		)}
		<button className={`btn  ${cartStyle.couponBtn}`}
		    onClick={handleSubmit}
			type="submit"
			disabled={loading}
		>
			{" "}
			{loading && (
				<span className="spinner-grow spinner-grow-sm"></span>
			)}
			<AiOutlineCheckCircle /> Apply
		</button>
	  </form>
    </div>
  );
};

export default Coupon;
