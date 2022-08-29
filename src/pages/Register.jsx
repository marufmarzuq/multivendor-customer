import BreadCumb from "../common/breadcumb/BreadCumb";

const Register = () => {
  return (
    <div>
			<BreadCumb data={"Register"} />
			<div className="text-center">
				<h2>Create an Account</h2>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name"  placeholder="Enter your name"/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" placeholder="Enter your email"/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" placeholder="Enter your password"/>
				</div>
				<div>
					<label htmlFor="confirm-password">Confirm Password</label>
					<input type="password" name="confirm-password" id="confirm-password" placeholder="Password Confirmation"/>
				</div>
				<div>
					<button type="button" name="button">Register</button>
				</div>
			</div>
    </div>
  );
};

export default Register;