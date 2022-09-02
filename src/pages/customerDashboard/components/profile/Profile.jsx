import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import profileStyle from "./profile.module.css";
const Profile = () => {
  return (
    <>
      <h4>Profile</h4>
      <div className={profileStyle.profileContainer}>
        <label htmlFor=""> Full Name: </label>
        <input type="text" />

        <label htmlFor=""> Date of Birth</label>
        <input type="date" name="" id="" />

        <label htmlFor=""> Email </label>
        <input type="email" />
        <label htmlFor=""> Phone </label>
        <input type="number" />
      </div>
      <button className="btn btn-primary mt-2 ">
        {" "}
        Submit <BsArrowRightCircle />
      </button>
    </>
  );
};

export default Profile;
