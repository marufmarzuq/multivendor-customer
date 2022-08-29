import React from "react";
import SellerRequestForm from "./components/sellerRequestCom/SellerRequestForm";
import BreadCumb from "../../../common/breadcumb/BreadCumb";

const SellerRequest = () => {
  return (
		<div>
				<BreadCumb data={"Be a Seller"} />
				<SellerRequestForm/>
		</div>
  );
};

export default SellerRequest;
