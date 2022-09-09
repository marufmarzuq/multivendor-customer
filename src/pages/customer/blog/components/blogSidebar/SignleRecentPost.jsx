import React from "react";
import recentPostStyle from "./blogSidebar.module.css";
const SignleRecentPost = () => {
  return (
    <div className={recentPostStyle.recentPostCard}>
      <div>
        <img src="https://farmart.botble.com/storage/news/2.jpg" alt="" />
      </div>
      <div>
        <small
          style={{
            opacity: "0.5",
          }}
        >
          Jan 25, 2022 by
        </small>
        <small className="text-primary"> System Admin </small>
        <p
          style={{
            fontWeight: "600",
            marginTop: "5px",
          }}
        >
          The Top 2020 Handbag Trends to Know
        </p>
      </div>
    </div>
  );
};

export default SignleRecentPost;
