import storeStyle from "./stores.module.css";
import { FaStar } from "react-icons/fa";
import { MdOutlineLocationCity } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { AiOutlineMail, AiOutlinePhone, AiTwotoneMail } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import SimpleLoading from "../../../../../common/loading/SimpleLoading";

const StoreList = ({ layout , currentItems , loading }) => {
  return (
    <div className="wrapper">
      <div
        className={
          layout == "grid"
            ? storeStyle.sotresContainer
            : storeStyle.sotresContainerList
        }
      >
      { loading ? <SimpleLoading/> :(
				currentItems?.map((item,key)=>{
				return(
					<div className={storeStyle.card} key={key}>
						<div className={storeStyle.image}>
							<img
								className="card-img-top"
								src={item.logo}
								alt={item.name}
							/>
						</div>
						<div className={storeStyle.cardBody}>
							<div>
								<h5 className="card-title">{item.name}</h5>
								<p className={`d-flex ${storeStyle.rattings}`}>
									<span className="me-2">
										<FaStar /> <FaStar /> <FaStar />
										<FaStar /> <FaStar />
									</span>
									<span>( {item.total_review} customers review)</span>
								</p>
								<p className={` d-flex ${storeStyle.location}`}>
									<span>
										<MdOutlineLocationCity />
									</span>
									{item.address}
								</p>
								<p className={` d-flex ${storeStyle.phone}`}>
									<span>
										<AiOutlinePhone />
									</span>
									+ 0144444444
								</p>
								<p className={` d-flex ${storeStyle.email}`}>
									<span>
										<AiOutlineMail />
									</span>
									test@gmail.com
								</p>
							</div>
							<div className={storeStyle.visitBtn}>
								<NavLink to={`/seller-shop/${item.seller_id}`} className="btn btn-primary mb-4">
									<IoStorefrontOutline /> Visit Store
								</NavLink>
							</div>
						</div>
					</div>
					)
				})
      )}
      </div>
    </div>
  );
};

export default StoreList;
