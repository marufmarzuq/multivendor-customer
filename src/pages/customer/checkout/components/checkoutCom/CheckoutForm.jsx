import { useState } from "react";
import { NavLink } from "react-router-dom";
import checkoutStyle from "./checkout.module.css";
import { AiOutlineArrowLeft, AiOutlineCheckCircle } from "react-icons/ai";
import { useFormik } from "formik";
import { FocusError } from "focus-formik-error";
import { toast } from "react-toastify";
import { markutosFrontendApi } from "../../../../services/Api/api";
import { addOrderSchema } from "../../../../../schema/addOrderSchema";
import { loadFromLocalStorage } from "../../../../../utils/user/manageLocalStorage";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({storesCart,cartTotal,metadata}) => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const user = loadFromLocalStorage();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
		validationSchema: addOrderSchema,
		initialValues: {
		name: "",
		email: "",
		phone: "",
		address: "",
		},

		enableReinitialize: true,
		onSubmit: (values, action) => {
		const finalValues = values;

		let shipping_info = {
		"name": values.name,
		"email": values.email,
		"phone": values.phone,
		"address": values.address
		};

		finalValues.user_id = user ? user?.user?.id : 0;
		finalValues.orders = storesCart;
		finalValues.payment_method  = "cod";
		finalValues.order_notes     =  values.order_notes ? values.order_notes : '';
		finalValues.subtotal        =  cartTotal;
		finalValues.shipping_info   =  shipping_info;
		if (metadata?.coupon) {
			finalValues.coupon_discount =  metadata.coupon;
			cartTotal -= parseFloat(metadata.coupon);
		}
		finalValues.total           =  cartTotal;

		setLoading(true);
		markutosFrontendApi
			.post("/checkout/post", finalValues )
			.then((res) => {
			setLoading(false);

			toast.success(res.data.message);
			action.resetForm();
			navigate('/thank-you',{state: {...res.data}})
			})
			.catch((e) => {
			setLoading(false)
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
    <div className="">
      <h4 className="mb-4">Shipping Information</h4>
            <form onSubmit={(e) => e.preventDefault()}>
        <FocusError formik={formik} />
                {/* Billing details */}
                <div className={checkoutStyle.name}>
                    <label htmlFor="customer_name"> Name : <i>*</i> </label>

                    <input
                        type="text"
                        placeholder="Enter your Name"
						name="name"
						id="customer_name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    {errors.name && touched.name && (
                        <small className="text-danger"> {errors.name} </small>
                    )}

                </div>
                <div className={checkoutStyle.emailPhone}>
                    <div className={checkoutStyle.email}>
                        <label htmlFor="email"><span>Email</span><i>*</i></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email && (
                            <small className="text-danger"> {errors.email} </small>
                        )}
                    </div>

                    <div className={checkoutStyle.phone}>
                    <label htmlFor="phone"><span>Phone</span><i>*</i></label>
                    <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone no."
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.phone && touched.phone && (
                            <small className="text-danger"> {errors.phone} </small>
                        )}
                    </div>
                </div>
                <div className={checkoutStyle.address}>
                    <label htmlFor="address"> Address : </label>
                    <textarea name="address" id="address" rows={'5'} cols={'5'}
						value={values.address}
						onChange={handleChange}
						onBlur={handleBlur}
					></textarea>
					{errors.address && touched.address && (
                        <small className="text-danger"> {errors.address} </small>
                    )}
                </div>
                {/* Payment method */}

                <div className="my-3">
                    <h4 className="mt-4">Payment Method</h4>
                    <div className="form-check">
                        <input
                            className="form-check-input my-2"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label className="form-check-label ms-2 my-2" htmlFor="flexRadioDefault1">
                            Stripe
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input my-2"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            onChange={(e)=>setPaymentMethod(e.target.value)}
                            checked={ paymentMethod == "cod" ? 'checked' : ''}
                        />
                        <label className="form-check-label ms-2 my-2" htmlFor="flexRadioDefault2">
                            Cache on delivery (COD)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input my-2"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                        />
                        <label className="form-check-label ms-2 my-2" htmlFor="flexRadioDefault3">
                            Paypal
                        </label>
                    </div>
                </div>

                {/* Order Notes */}
                <div className="">
                    <label htmlFor="order_notes"> Order Notes : </label>
                    <textarea
                        rows="5"
                        cols="5"
                        placeholder="Notes about your order"
                        id="order_notes"
                    ></textarea>
                </div>

                <div className={checkoutStyle.submitBtn}>
                    <NavLink to="/cart">
                        <AiOutlineArrowLeft /> Back to cart
                    </NavLink>
                    <div className="d-flex justify-content-end">
                        <button
                            onClick={handleSubmit}
                            className="btn btn-primary"
                            type="submit"
                            name="button"
							disabled={loading}
                        >
						{loading && (
							<span className="spinner-grow spinner-grow-sm"></span>
						)}
                            <AiOutlineCheckCircle /> Checkout
                        </button>
                    </div>
                </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
