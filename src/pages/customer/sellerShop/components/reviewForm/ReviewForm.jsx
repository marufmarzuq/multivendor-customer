import {useState} from "react";
import ReactStars from "react-rating-stars-component";
import { useFormik } from "formik";
import { markutosFrontendApi } from "../../../../services/Api/api";
import { FocusError } from "focus-formik-error";
import { toast } from "react-toastify";
import * as yup from "yup";
import { BsArrowRightCircle } from "react-icons/bs";
import customerAuthHeader from "../../../../services/customer-auth-header";
import { loadFromLocalStorage } from "../../../../../utils/user/manageLocalStorage";
import reviewStyle from "../../../../customer/singleProduct/components/singleCom/relatedProduct.module.css";

const schema = yup.object().shape({
	name: yup.string().required("Name is required"),
	email: yup.string().email().required("Email is required."),
  });

const ReviewForm = ({sellerId}) => {
	const [loading, setLoading] = useState(false);
	const [rating, setRating]  = useState(0);
	const user = loadFromLocalStorage();

	const formik = useFormik({
		validationSchema: schema,
		initialValues: {
			name: "",
			email: "",
			comment: "",
		},
		enableReinitialize: true,
		onSubmit: (values, action) => {
			const finalValues = values;
			finalValues.rating = rating;
			finalValues.seller_id = sellerId;
			finalValues.anonymous = values.anonymous == ["on"] ? 1 : 0 ;
			setLoading(true);
			markutosFrontendApi
			.post("/seller-shop/add-review", finalValues,{
				headers: {
					Authorization: customerAuthHeader(),
				  },
			  })
			.then((res) => {
				setLoading(false);
				toast.success(res.data.message);
				action.resetForm();
			})
			.catch((e) => {
				setLoading(false);
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
	<section className="container pb-5" id="seller-review">
		<div className={""}>
			<h1 className="pt-5 mt-5 mb-5 text-center">Review Seller</h1>
		</div>
		{
			user ?
			(
				<div className={reviewStyle.addReview}>
					<form onSubmit={(e) => e.preventDefault()}>
						<FocusError formik={formik} />
	
						<div>
							<h4>Add Your Review</h4>
							<p>
							Your email address will not be published. Required fields are
							marked *
							</p>
						</div>
		
						<div className={'d-flex'}>
							<p className="pe-2">Your Rating</p>
							<ReactStars
								count={5}
								size={14}
								value={5}
								activeColor="#0b5ed7"
								onChange={(newRating)=>setRating(newRating)}
							/>
						</div>
		
						<div className={reviewStyle.nameEmail}>
							<div>
								<input type="text" name="name" placeholder="Name *" 
									value={values.name}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.name && touched.name && (
									<small className="text-danger"> {errors.name} </small>
								)}
							</div>
							<div>
							<input type="email" name="email" placeholder="Email *" 
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								/>
								{errors.email && touched.email && (
									<small className="text-danger"> {errors.email} </small>
								)}
							</div>
						</div>
		
						<div>
							<textarea
								name="comment"
								placeholder="Comment *"
								cols="30"
								rows="5"
								value={values.comment}
								onChange={handleChange}
								onBlur={handleBlur}></textarea>
								{errors.comment && touched.comment && (
									<small className="text-danger"> {errors.comment} </small>
								)}
						</div>
		
						<div className={'d-flex'}>
							<input type="checkbox" id="anonymous" name="anonymous" 
							onChange={handleChange}
							onBlur={handleBlur}
							/>
							<label htmlFor="anonymous">Anonymous</label>
						</div>
		
						<button 
							type={'submit'}
							disabled={loading}
							onClick={handleSubmit}
							className="btn btn-primary"> 
							{loading ? (
								<div>
									<div
									className="spinner-border spinner-border-sm me-1"
									role="status"
									>
									<span className="visually-hidden">Loading...</span>
									</div>
									Submit
								</div>
								) : (
								<div>{" "}Submit <BsArrowRightCircle /></div> 
							)}
						</button>
					</form>
				</div>
			)
			:
			(
				<div className={reviewStyle.addReview}>
					Please Logged in to give review in the product
				</div>
			)
		}
	</section>
  );
};
export default ReviewForm;
