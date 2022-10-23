import React, { Fragment } from "react";
import desStyle from "./productDes.module.css";
import { singleProduct1, singleProduct2 } from "../../../../../assets/index";
import SimpleLoading from "../../../../../common/loading/SimpleLoading";

const ProductDescription = ({loading,singleProduct}) => {
  return (
    <div className={desStyle.desContainer}>
    {
    loading ? <SimpleLoading/> :
			(
				<Fragment>
					<h4>Description:</h4>
					<div className={desStyle.image}>
						<img src={singleProduct.thumbnail_img} alt={singleProduct.name} />
					</div>
					<div>
						<p>{singleProduct.description}</p>
					</div>
				</Fragment>
			)
    }
    </div>
  );
};

export default ProductDescription;
