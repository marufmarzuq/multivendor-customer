
import BreadCumb from "../common/breadcumb/BreadCumb";

const ResetPassword = () => {
	return (
	<div>
		<BreadCumb data={"Reset Password"} />
		<div className="text-center">
			<h2>Reset Password</h2>
			<div>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" placeholder="Enter your email"/>
				<div>You will get a password reset link in email</div>
			</div>
			<div>
				<button type="button" name="button">Submit</button>
			</div>
		</div>
	</div>
  );
};

export default ResetPassword;
