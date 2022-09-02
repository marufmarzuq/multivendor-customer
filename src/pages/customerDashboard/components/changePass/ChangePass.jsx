import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import passstyle from "./changePass.module.css";
const ChangePass = () => {
  return (
    <>
      <h4>Change Password</h4>
      <div className={passstyle.profileContainer}>
        <label htmlFor=""> Current Password </label>
        <input type="text" placeholder="Current Password" />

        <label htmlFor=""> New Password </label>
        <input type="text" placeholder="New Password" />

        <label htmlFor=""> Password Confirmation </label>
        <input type="text" placeholder="Password Confirmation" />
      </div>
      <button className="btn btn-primary mt-2 ">
        {" "}
        Update <BsArrowRightCircle />
      </button>
    </>
  );
};

export default ChangePass;
