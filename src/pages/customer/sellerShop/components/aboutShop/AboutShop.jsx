import React from "react";
import aboutStyle from "./aboutShop.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const AboutShop = ({about,shopName}) => {
  return (
    <div className="container pb-5">
      <div className={aboutStyle.titles}>
        <h1 className="pt-5 mt-5 mb-5 text-center">About {shopName}</h1>
      </div>
			{ about == "" ? (
				<SkeletonTheme height={50}>
					<p><Skeleton count={5} /></p>
				</SkeletonTheme>
				) : (	<h6 className={aboutStyle.content}>{about}</h6>	)
      }
    </div>
  );
};

export default AboutShop;
