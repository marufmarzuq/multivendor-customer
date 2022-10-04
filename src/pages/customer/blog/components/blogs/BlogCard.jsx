import React from "react";
import blogStyle from "./blogs.module.css";

const BlogCard = (props) => {

  return (
    <div className={blogStyle.BlogCardContainer}>
      <div>
        <img src={props.item?.banner} alt={props.item?.title} />
      </div>
      <div>
        <h3>{props.item?.title}</h3>
        <span
          style={{
            opacity: "0.6",
          }}
        >
          By
        </span>
        <span className="text-primary"> System Admin </span>
        <span
          style={{
            fontWeight: "600",
          }}
        >
          in Ecommerce, Commercial
        </span>
        <span
          style={{
            opacity: "0.6",
            marginLeft: "5px",
          }}
        >
          on { props.item?.created_at }
        </span>
        <p
          style={{
            fontSize: "1rem",
            marginTop: "1.5rem",
            textAlign: "justify",
          }}
        >
          {props.item?.short_description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
