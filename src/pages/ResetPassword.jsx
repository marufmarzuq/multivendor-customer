import BreadCumb from "../common/breadcumb/BreadCumb";
import authStyle from "./auth.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { API_URL as USER_API} from "../pages/customer/services/Api/api";
import * as yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';

const schema = yup.object().shape({
    email: yup.string().email().required(),
});

const ResetPassword = () => {
	const [loading, setLoading]             = useState(false);
  const notify                            = (text) => toast(text);
  const [errorMessage, setErrorMessage]   = useState("");

	const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

	const submitForm = (data) => {

		setLoading(true);
		let formData = new FormData();
		formData.append('email', data.email);

		axios.post(`${USER_API}/reset-password`, formData, {
			headers: {
				"Content-Type":  "multipart/form-data",
				'Access-Control-Allow-Origin': '*',
			}
		}).then((response) => {
				notify("Password Send you email");
				setLoading(false);
			},
			error => {
				setLoading(false);
        setErrorMessage(error.response.data.error);
				notify(error.response.data.error);
			}
		);
    }

    return (
        <div>
          <BreadCumb data={"Reset Password"} />
            <form onSubmit={handleSubmit(submitForm)}>
              <div className={authStyle.authContainer}>
                <div className={authStyle.auth}>
                  <h4 className="text-center mb-4">Reset Password</h4>
                  <hr />
                  <div className="mt-4">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
					  {...register('email', { required: true })}
                      placeholder="Enter your email"
                    />
					{errors.email && <p className="error"> {errors.email?.message} </p>}
                    <div>You will get a password reset link in email</div>
                  </div>
                  <div>
                    <button className="btn btn-primary" type="submit" disabled={loading}>
						{loading && <span className="spinner-grow spinner-grow-sm"></span>}
                      	Submit
                    </button>
                    <p className="error pt-2">{errorMessage}</p>
                  </div>
                </div>
              </div>
            </form>
        </div>
    );
};

export default ResetPassword;