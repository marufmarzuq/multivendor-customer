import React from "react";
import blogStyle from "./blogs.module.css";
const BlogCard = () => {
  return (
    <div className={blogStyle.BlogCardContainer}>
      <div>
        <img src="https://farmart.botble.com/storage/news/1.jpg" alt="" />
      </div>
      <div>
        <h3>4 Expert Tips On How To Choose The Right Men’s Wallet</h3>
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
          on Jan 20, 2021
        </span>
        <p
          style={{
            fontSize: "1rem",
            marginTop: "1.5rem",
            textAlign: "justify",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          voluptates vel adipisci qui, placeat odit at praesentium impedit
          aspernatur natus enim ex nemo maiores voluptatibus dignissimos
          possimus soluta, laborum itaque!
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
