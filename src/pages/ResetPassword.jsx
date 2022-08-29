import BreadCumb from "../common/breadcumb/BreadCumb";
import authStyle from "./auth.module.css";
const ResetPassword = () => {
  return (
    <div>
      <BreadCumb data={"Reset Password"} />
      <section>
        <div>
          <div className={authStyle.authContainer}>
            <div className={authStyle.auth}>
              <h4 className="text-center mb-4">Reset Password</h4>
              <hr />
              <div className="mt-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <div>You will get a password reset link in email</div>
              </div>
              <div>
                <button className="btn btn-primary" type="button" name="button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;
