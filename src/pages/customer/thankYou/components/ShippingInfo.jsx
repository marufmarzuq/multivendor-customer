import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
const ShippingInfo = ({thankStyle}) => {
	return (
		<div className="mt-5">
			<h1>Billing Address</h1>
			<div className={thankStyle.billingBox}>
			<h6>100/G</h6>
			<h6> Central Road </h6>
			<h6> Dhanmondi </h6>
			<h6> Dhaka </h6>
			<h6> 1204 </h6>
			<h6>
				<AiOutlinePhone /> 0100000000{" "}
			</h6>
			<h6>
				<AiOutlineMail /> user@email.com
			</h6>
			</div>
		</div>
	);
}
  export default ShippingInfo;