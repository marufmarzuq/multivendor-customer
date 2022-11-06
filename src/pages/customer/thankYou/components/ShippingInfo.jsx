import { AiOutlineMail, AiOutlinePhone,AiOutlineHome,AiOutlineUser } from "react-icons/ai";
const ShippingInfo = ({thankStyle,shippingAddress}) => {
	return (
		<div className="mt-5">
			<h1>Billing Address</h1>
			<div className={thankStyle.billingBox}>
			<div><AiOutlineUser/> <span>{shippingAddress.name}</span></div>
			<div> <AiOutlineHome/> <span>{shippingAddress.address}</span></div>
			<h6>
				<AiOutlinePhone /> {shippingAddress.phone}{" "}
			</h6>
			<h6>
				<AiOutlineMail /> {shippingAddress.email}
			</h6>
			</div>
		</div>
	);
}
  export default ShippingInfo;