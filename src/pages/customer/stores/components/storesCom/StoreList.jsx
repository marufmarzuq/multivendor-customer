import storeStyle from "./stores.module.css";
import { FaStar } from "react-icons/fa";
import { MdLocationOn, MdOutlineLocationCity } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { AiOutlineMail, AiOutlinePhone, AiTwotoneMail } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const StoreList = ({ layout }) => {
  return (
    <div className="wrapper">
      <div
        className={
          layout == "grid"
            ? storeStyle.sotresContainer
            : storeStyle.sotresContainerList
        }
      >
        <div className={storeStyle.card}>
          <div className={storeStyle.image}>
            <img
              className="card-img-top"
              src="https://farmart.botble.com/storage/stores/1-150x150.png"
              alt="Card image cap"
            />
          </div>
          <div className={storeStyle.cardBody}>
            <div>
              <h5 className="card-title">Store Name</h5>
              <p className={`d-flex ${storeStyle.rattings}`}>
                <span className="me-2">
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
            </div>
            <div className={storeStyle.visitBtn}>
              <NavLink to="/seller-shop" className="btn btn-primary mb-4">
                <IoStorefrontOutline /> Visit Store
              </NavLink>
            </div>
          </div>
        </div>

        <div className={storeStyle.card}>
          <div className={storeStyle.image}>
            <img
              className="card-img-top"
              src="https://farmart.botble.com/storage/stores/1-150x150.png"
              alt="Card image cap"
            />
          </div>
          <div className={storeStyle.cardBody}>
            <div>
              <h5 className="card-title">Store Name</h5>
              <p className={`d-flex ${storeStyle.rattings}`}>
                <span className="me-2">
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
            </div>
            <div className={storeStyle.visitBtn}>
              <NavLink to="/seller-shop" className="btn btn-primary mb-4">
                <IoStorefrontOutline /> Visit Store
              </NavLink>
            </div>
          </div>
        </div>
        <div className={storeStyle.card}>
          <div className={storeStyle.image}>
            <img
              className="card-img-top"
              src="https://farmart.botble.com/storage/stores/1-150x150.png"
              alt="Card image cap"
            />
          </div>
          <div className={storeStyle.cardBody}>
            <div>
              <h5 className="card-title">Store Name</h5>
              <p className={`d-flex ${storeStyle.rattings}`}>
                <span className="me-2">
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
            </div>
            <div className={storeStyle.visitBtn}>
              <NavLink to="/seller-shop" className="btn btn-primary mb-4">
                <IoStorefrontOutline /> Visit Store
              </NavLink>
            </div>
          </div>
        </div>
        <div className={storeStyle.card}>
          <div className={storeStyle.image}>
            <img
              className="card-img-top"
              src="https://farmart.botble.com/storage/stores/1-150x150.png"
              alt="Card image cap"
            />
          </div>
          <div className={storeStyle.cardBody}>
            <div>
              <h5 className="card-title">Store Name</h5>
              <p className={`d-flex ${storeStyle.rattings}`}>
                <span className="me-2">
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
            </div>
            <div className={storeStyle.visitBtn}>
              <NavLink to="/seller-shop" className="btn btn-primary mb-4">
                <IoStorefrontOutline /> Visit Store
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreList;
