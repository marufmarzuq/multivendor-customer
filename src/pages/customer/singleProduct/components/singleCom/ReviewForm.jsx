import {useState} from "react";
import ReactStars from "react-rating-stars-component";
import { useFormik } from "formik";
import { markutosFrontendApi } from "../../../../services/Api/api";
import { FocusError } from "focus-formik-error";
import { toast } from "react-toastify";
import * as yup from "yup";
import { BsArrowRightCircle } from "react-icons/bs";

const ReviewForm = ({reviewStyle,productId}) => {
	const [loading, setLoading] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		enableReinitialize: true,
		onSubmit: (values, action) => {
			const finalValues = values;
			finalValues.product_id = productId;
			setLoading(true);
			console.log(finalValues);
			markutosFrontendApi
			.post("/product-details/add-review", finalValues)
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
	<section>
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
				/>
			</div>

			<div className={reviewStyle.nameEmail}>
				<div>
					<input type="text" name="name" placeholder="Name *" 
						value={values.name}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
				<div>
				<input type="email" name="email" placeholder="Email *" 
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
					/>
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
			</div>

			<div className={'d-flex'}>
				<input type="checkbox" id="anonymous" name="anonymous"/>
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
	</section>
  );
};
export default ReviewForm;
