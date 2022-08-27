import storeStyle from "./stores.module.css";
import { FaStar } from "react-icons/fa";
import { MdLocationOn, MdOutlineLocationCity } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlinePhone, AiTwotoneMail } from "react-icons/ai";
const StoreList = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className={storeStyle.sotresContainer}>
          <div className={storeStyle.card}>
            <img
              className="card-img-top"
              src="https://farmart.botble.com/storage/stores/1-150x150.png"
              alt="Card image cap"
            />
            <div className={storeStyle.cardBody}>
              <h5 className="card-title">Store Name</h5>
              <p className={`d-flex ${storeStyle.rattings}`}>
                <span>
                  <FaStar /> <FaStar /> <FaStar />
                  <FaStar /> <FaStar />
                </span>
                <span>( 200 customers review)</span>
              </p>
              <p className={` d-flex ${storeStyle.location}`}>
                <span>
                  <MdOutlineLocationCity />
                </span>
                36969 Treutel Circle Apt. 143, East Annetteberg, Connecticut,
                Costa Rica
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
              <a href="#" className="btn btn-primary mb-4">
                Visit Store
              </a>
            </div>
          </div>
          <div className={storeStyle.card}>
            <img
              className="card-img-top"
              src="https://farmart.botble.com/storage/stores/1-150x150.png"
              alt="Card image cap"
            />
            <div className={storeStyle.cardBody}>
              <h5 className="card-title">Store Name</h5>
              <p className={`d-flex ${storeStyle.rattings}`}>
                <span>
                  <FaStar /> <FaStar /> <FaStar />
                  <FaStar /> <FaStar />
                </span>
                <span>( 200 customers review)</span>
              </p>
              <p className={` d-flex ${storeStyle.location}`}>
                <span>
                  <MdOutlineLocationCity />
                </span>
                36969 Treutel Circle Apt. 143, East Annetteberg, Connecticut,
                Costa Rica
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
              <a href="#" className="btn btn-primary mb-4">
                Visit Store
              </a>
            </div>
          </div>
          <div className={storeStyle.card}>
            <img
              className="card-img-top"
              src="https://farmart.botble.com/storage/stores/1-150x150.png"
              alt="Card image cap"
            />
            <div className={storeStyle.cardBody}>
              <h5 className="card-title">Store Name</h5>
              <p className={`d-flex ${storeStyle.rattings}`}>
                <span>
                  <FaStar /> <FaStar /> <FaStar />
                  <FaStar /> <FaStar />
                </span>
                <span>( 200 customers review)</span>
              </p>
              <p className={` d-flex ${storeStyle.location}`}>
                <span>
                  <MdOutlineLocationCity />
                </span>
                36969 Treutel Circle Apt. 143, East Annetteberg, Connecticut,
                Costa Rica
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
              <a href="#" className="btn btn-primary mb-4">
                Visit Store
              </a>
            </div>
          </div>

          <div className={storeStyle.card}>
            <img
              className="card-img-top"
              src="https://farmart.botble.com/storage/stores/1-150x150.png"
              alt="Card image cap"
            />
            <div className={storeStyle.cardBody}>
              <h5 className="card-title">Store Name</h5>
              <p className={`d-flex ${storeStyle.rattings}`}>
                <span>
                  <FaStar /> <FaStar /> <FaStar />
                  <FaStar /> <FaStar />
                </span>
                <span>( 200 customers review)</span>
              </p>
              <p className={` d-flex ${storeStyle.location}`}>
                <span>
                  <MdOutlineLocationCity />
                </span>
                36969 Treutel Circle Apt. 143, East Annetteberg, Connecticut,
                Costa Rica
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
              <a href="#" className="btn btn-primary mb-4">
                Visit Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreList;
