import {Fragment, useState} from "react";
import cartStyle from "./cart.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FocusError } from "focus-formik-error";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { markutosFrontendApi } from "../../../../services/Api/api";
import * as yup from "yup";
import { useCart } from "react-use-cart";
import { loadFromLocalStorage } from "../../../../../utils/user/manageLocalStorage";
import { NavLink } from "react-router-dom";
import customerAuthHeader from "../../../../services/customer-auth-header";

const schema = yup.object().shape({
	code: yup.string().required("Coupon  is required"),
});
const Coupon = () => {
	const [loading, setLoading] = useState(false);
	const {
		items,
		cartTotal,
		setCartMetadata,
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
			finalValues.subtotal = cartTotal;

			setLoading(true);
			markutosFrontendApi
			.post("/cart/apply-coupon", finalValues , {
				headers: {
					Authorization: customerAuthHeader(),
				},
			} )
			.then((res) => {
				setLoading(false);
				console.log(res.data.result);

				// Set coupon price
				if ( res.data.result == true || res.data.result == "true" ) {
					if(metadata?.coupon){
						updateCartMetadata({coupon:res.data.discount_amount})
					}else{
						// addCartMetadata({coupon:res.data.discount_amount})
						setCartMetadata({coupon:res.data.discount_amount});
					}
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

	const user = loadFromLocalStorage();


	return (
	<div className={cartStyle.coupon}>
		{
			user ? 
			(
				<Fragment>
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
				</Fragment>
			) 
			:
			(
				<NavLink to={`/login`}>Logged In to apply coupon !</NavLink>
			)
		}

	</div>
	);
};

export default Coupon;
