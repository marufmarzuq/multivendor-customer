import React from "react";
import { NavLink } from "react-router-dom";
import blogInfoStyle from "./blogDetails.module.css";
const BlogInfo = (props) => {
  return (
    <div className={blogInfoStyle.BlogInfoContainer}>
      <section>
        <div className={blogInfoStyle.title}>
          <h2>{props.currentItems?.title}</h2>
          <small> By {props.currentItems?.author} in </small>
          <small
            style={{
              fontWeight: "600",
            }}
          >
            {props.currentItems?.category}
          </small>
          <small> on {props.currentItems?.created_date}</small>
        </div>
      </section>

      <section>
        <div className="mt-5">
          <p>{props.currentItems?.content}</p>
          <img src={props.currentItems?.banner} alt={props.currentItems?.title} />
        </div>
      </section>

      {/* <section>
        <div className="mt-5">
          <h3>Choose A Neat Wallet</h3>
          <p>
            The wallet is an essential accessory that you should go simple.
            Simplicity is the best in this case. A simple and neat wallet with
            the plain color and even minimalist style is versatile. It can be
            used for both formal and casual events. In addition, that wallet
            will go well with most of the clothes in your wardrobe.
          </p>
          <p>
            Keep in mind that a wallet will tell other people about your
            personality and your fashion sense as much as other clothes you put
            on. Hence, don’t go cheesy on your wallet or else people will think
            that you have a funny and particular style.
          </p>
          <img src="https://farmart.botble.com/storage/news/2.jpg" alt="" />
        </div>
      </section> */}

      <section>
        <div className="mt-5">
          <span> Tags:</span>
					{
						props.currentItems?.tags?.map((item, key) => {
							return (
								<span key={key}>
									<NavLink to={""}>
										{item}
									</NavLink>
								</span>
								)
							})
          }
        </div>
      </section>
    </div>
  );
};

export default BlogInfo;
