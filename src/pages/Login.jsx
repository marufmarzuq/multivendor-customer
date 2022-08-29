import { NavLink } from "react-router-dom";
import BreadCumb from "../common/breadcumb/BreadCumb";

const Login = () => {
	return (
		<div>
			<BreadCumb data={"Login"} />
			<div className="text-center">
				<h2>Login</h2>
				<div>
					<div>
						<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path></g></svg>
					</div>
					<NavLink to="register">Have an account</NavLink>
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
