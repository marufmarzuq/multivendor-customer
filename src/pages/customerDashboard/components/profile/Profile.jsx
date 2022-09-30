import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import profileStyle from "./profile.module.css";
const Profile = () => {
  return (
    <>
      <h4>Profile</h4>
      <div className={profileStyle.profileContainer}>
        <label htmlFor=""> Full Name: </label>
        <input type="text" name="name" />

        <label htmlFor=""> Date of Birth</label>
        <input type="date" name="dob" id="" />

        <label htmlFor=""> Email </label>
        <input type="email" name="email" />

        <label htmlFor=""> Phone </label>
        <input type="tel" name="phone" />

				<label htmlFor=""> Address </label>
        <textarea cols={"5"} rows={"5"} name="address"></textarea>

      </div>
      <button className="btn btn-primary mt-2 ">
        {" "}
        Submit <BsArrowRightCircle />
      </button>
    </>
  );
};

export default Profile;
