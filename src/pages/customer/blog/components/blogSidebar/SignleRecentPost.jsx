import React from "react";
import recentPostStyle from "./blogSidebar.module.css";
const SignleRecentPost = (props) => {
  return (
    <div className={recentPostStyle.recentPostCard}>
      <div>
        <img src={props.item?.banner} alt={props.item?.title} />
      </div>
      <div>
        <small
          style={{
            opacity: "0.5",
          }}
        >
          {props.item?.created_date} by
        </small>
        <small className="text-primary"> {props.item?.author} </small>
        <p
          style={{
            fontWeight: "600",
            marginTop: "5px",
          }}
        >
          {props.item?.title}
        </p>
      </div>
    </div>
  );
};

export default SignleRecentPost;
