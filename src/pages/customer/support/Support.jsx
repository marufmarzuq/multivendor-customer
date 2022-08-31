import React from "react";
import BreadCumb from "../../../common/breadcumb/BreadCumb";
import SupportForm from "./components/supportCom/SupportForm";

const Support = () => {
  return (
		<section>
			<BreadCumb data={"Help and Support"}/>
			<SupportForm/>
		</section>
  );
};

export default Support;
