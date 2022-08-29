import { NavLink } from "react-bootstrap";

const Login = () => {
	return (
		<div className="text-center">
			<h2>Login</h2>
			<div>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" placeholder="Enter your email"/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="password" name="password" placeholder="Enter your password"/>
			</div>
			<div><input type="radio" name="remember_me"/><span>Remember me?</span></div>
			<div>
				<button type="button" name="button">Submit</button>
			</div>
			<div>
				<NavLink to="#">Create a new account</NavLink>
			</div>
		</div>
  );
};

export default Login;
