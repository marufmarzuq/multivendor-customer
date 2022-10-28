import {useEffect,useState} from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { markutosFrontendApi } from "../../../services/Api/api";
import customerAuthHeader from "../../../services/customer-auth-header";
import profileStyle from "./profile.module.css";
import { FocusError } from "focus-formik-error";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { addProfileSchema } from "../../../../schema/addProfileSchema";
import DatePicker from 'react-date-picker';
import 'react-datepicker/dist/react-datepicker.css'

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [startDate, setStartDate] = useState(profile?.birth_date? new Date(profile.birth_date) : new Date());

	const getProfile=()=>{
		markutosFrontendApi
		.get(`dashboard/profile`, {
			headers: {
				Authorization: customerAuthHeader(),
			},
		})
		.then((res) => {
			setProfile(res.data);
		})
		.catch((err) => {
			console.log(err.message);
		});
	}

  useEffect(() => {
		getProfile()
  }, []);

	const formik = useFormik({
    validationSchema: addProfileSchema,
    initialValues: {
      first_name: profile?.first_name || '',
      last_name: profile?.last_name || '',
      email: profile?.email || '',
      phone: profile?.phone || '',
      address: profile?.address || '',
      birth_date: profile?.birth_date || '',
      password: profile?.password || '',
      confirm_password: profile?.confirm_password || '',
    },
    enableReinitialize: true,
    onSubmit: (values, action) => {
      const finalValues = values;
      markutosFrontendApi
        .post("/dashboard/profile/update", finalValues, {
          headers: {
            Authorization: customerAuthHeader(),
          },
        })
        .then((res) => {
          toast.success(res.data.message);
          action.resetForm();
          getProfile();
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
    <>
      <h4>Profile</h4>
      <form onSubmit={(e) => e.preventDefault()} >
				<FocusError formik={formik} />
				<div className={profileStyle.profileContainer}>
					<div className="row">
						<div className="col-6">
							<label htmlFor=""> First Name: </label>
							<input
								type="text"
								name="first_name"
								value={values.first_name}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.first_name && touched.first_name && (
                <small className="text-danger"> {errors.first_name} </small>
              )}
						</div>
						<div className="col-6">
							<label htmlFor=""> Last Name: </label>
							<input
								type="text"
								name="last_name"
								value={values.last_name}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.last_name && touched.last_name && (
                <small className="text-danger"> {errors.last_name} </small>
              )}
						</div>
					</div>
					<div>
						<label htmlFor="email"> Email </label>
						<input
							type="email"
							name="email"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.email && touched.email && (
							<small className="text-danger"> {errors.email} </small>
						)}
					</div>
					<div>
						<label htmlFor="birth_date"> Date of Birth</label>
						{/* <input type="date" name="birth_date" id="birth_date"
							value={ values.birth_date }
							onChange={date => setFieldValue('birth_date', date) }
							onBlur={handleBlur}
							data-date-format="DD MMMM YYYY"
						/> */}
						<DatePicker name={'birth_date'}
						dateFormat="MMMM d, yyyy"
						value={values.birth_date}
						onChange={date => setFieldValue('birth_date', date)}
						/>
					</div>
					<div>
						<label htmlFor=""> Phone </label>
						<input
						type="tel"
						name="phone"
						value={values.phone}
						onChange={handleChange}
						onBlur={handleBlur}
						/>
						{errors.phone && touched.phone && (
							<small className="text-danger"> {errors.phone} </small>
						)}
					</div>

					<div>
						<label htmlFor=""> Address </label>
						<textarea
							cols={"5"} rows={"5"}
							name="address"
							value={ values.address }
							onChange={handleChange}
							onBlur={handleBlur}>
						</textarea>

						{errors.address && touched.address && (
							<small className="text-danger"> {errors.address} </small>
						)}
					</div>

					<div>
						<label htmlFor=""> New Password </label>
						<input type="text" name="password" placeholder="New Password"
							value={ values.password }
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>

					<label htmlFor=""> Password Confirmation </label>
					<input type="text" name="confirm_password"  placeholder="Password Confirmation"
					value={ values.confirm_password }
					onChange={handleChange}
					onBlur={handleBlur}
					/>

				</div>
				<button type="submit" className="btn btn-primary mt-2 "
					onClick={handleSubmit}>
					{" "}
					Submit <BsArrowRightCircle />
				</button>
      </form>
    </>
  );
};

export default Profile;
