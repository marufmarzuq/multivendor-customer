import { NavLink } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import BreadCumb from "../common/breadcumb/BreadCumb";

const Login = () => {
	return (
		<div>
			<BreadCumb data={"Login"} />
			<div className="text-center">
				<h2>Login</h2>
				<div>
					<div>
						<RiUserLine />
					</div>
					<NavLink to="register">Have an account</NavLink>
				</div>
				<div className="d-flex">
					<div>Login as</div>
					<div><input type="radio" name="login_as"/>Vendor</div>
					<div><input type="radio" name="login_as"/>Customer</div>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" placeholder="Enter your email"/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" placeholder="Enter your password"/>
				</div>
				<div>
					<div className="">
						<input type="radio" name="remember_me"/><span>Remember me?</span>
					</div>
					<div className=""><NavLink to="/reset-password">Forgot Password?</NavLink></div>
				</div>
				<div>
					<button type="button" name="button">Submit</button>
				</div>
			</div>
		</div>
  );
};

export default Login;
