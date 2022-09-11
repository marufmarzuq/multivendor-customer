import { NavLink } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import { yupResolver } from "@hookform/resolvers/yup";
import BreadCumb from "../common/breadcumb/BreadCumb";
import authStyle from "./auth.module.css";
import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { API_URL } from "../pages/seller/services/Api/api";
import { API_URL as USER_API} from "../pages/customer/services/Api/api";
import * as yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../utils/seller/manageLocalStorage";
import { saveToLocalStorage as saveToLocalStorageUser } from "../utils/user/manageLocalStorage";


const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(15).required(),
});

const Login = () => {
  	const [formLayout, setFormLayout] 		= useState("customer");
	const [loading, setLoading]             = useState(false);
  	const notify                            = (text) => toast(text);
	const navigate 							= useNavigate();
	const [checked, setChecked] 			= useState(true);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    
    const submitForm = (data) => {
		setLoading(true);
		let formData = new FormData();
		formData.append('email', data.email);
        formData.append('password',data.password);
        formData.append('remember_me', checked ? 1 : 0);

		axios.post(`${formLayout === 'customer' ? USER_API : API_URL }/login`, formData, {
			headers: {
				"Content-Type":  "multipart/form-data",
				'Access-Control-Allow-Origin': '*',
			}
		}).then((response) => {
				if(formLayout === "customer") {
					saveToLocalStorageUser(response?.data?.access_token);
					setLoading(false);
					navigate("/");
					notify("Welcome to Markutos Customer");
				} else {
					saveToLocalStorage(response?.data?.access_token);
					setLoading(false);
					navigate("/seller");
					notify("Welcome to Markutos Seller");
				}
			},
			error => {
				notify(error.response.data.error[0]);
				setLoading(false);
			}
		);
    }

	return (
		<div>
			<BreadCumb data={"Login"} />
			<section>
				<form onSubmit={handleSubmit(submitForm)}>
					<div className={authStyle.authContainer}>
						<div className={authStyle.auth}>
							<h4 className="text-center mb-3">Login</h4>
							<hr />

							<div className={authStyle.loginLogo}>
							<div>
								<RiUserLine />
							</div>
							</div>

							<div className={authStyle.radioBtn}>
							<h6 className="pt-2">Login as:</h6>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault1"
									checked={formLayout === "customer"}
									value={"customer"}
									onChange={(e) => setFormLayout(e.target.value)}
								/>
								<label className="form-check-label" htmlFor="flexRadioDefault1">
									Customer
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="flexRadioDefault"
									id="flexRadioDefault2"
									checked={formLayout === "seller"}
									onChange={(e) => setFormLayout(e.target.value)}
									value={"seller"}
								/>
								<label className="form-check-label" htmlFor="flexRadioDefault2">
									Seller
								</label>
							</div>
							</div>

							<div>
								<label htmlFor="email">Email</label>
								<input 
									type="email" 
									{...register('email', { required: true })} 
									placeholder="Enter your email" 
								/>
								{errors.email && <p className="error"> {errors.email?.message} </p>}
							</div>
							<div>
								<label htmlFor="password">Password</label>
								<input
									type="password"
									{...register('password', { required: true })}
									placeholder="Enter your password"
								/>
								{errors.password && <p className="error"> {errors.password?.message} </p>}
							</div>
							<div>
								<div className={authStyle.forgotPass}>
									<NavLink to="/reset-password">Forgot Password?</NavLink>
								</div>
							</div>

							<div className={authStyle.agree}>
								<input
									type="checkbox"
									className="form-check-input"
									id="exampleCheck1"
									defaultChecked={checked}
									onChange={() => setChecked(!checked)}
								/>
								<label className=" ps-2 mt-1" for="exampleCheck1">
									Remember Me
								</label>
							</div>
							<div>
								<button className="btn btn-primary" type="submit">
									{loading && <span className="spinner-grow spinner-grow-sm"></span>}
									<AiOutlineLogin /> Login
								</button>
							</div>

							<div className={authStyle.alreadyAccount}>
								<p>
									Dont have an account?
									<NavLink to={formLayout === "customer" ? "/register" : "/seller-request"}> Register Now</NavLink>
								</p>
							</div>
						</div>
					</div>
				</form>
				
			</section>
		</div>
	);
};

export default Login;