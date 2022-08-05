import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import layoutStyle from "./layout.module.css";

import {
  AiOutlineHome,
  AiOutlineBars,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import Navigation from "../../../../navigation/seller/Navigation";

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="container ">
        {/* navbar for small devices */}
        <section>
          <div className={`row m-0 ${layoutStyle.navbar_mobile}`}>
            <div className="col-3">
              <Link to="/">
                <AiOutlineHome />
              </Link>
            </div>
            <div className="col-3">
              <Link to="/">
                <AiOutlineBars />
              </Link>
            </div>

            <div className="col-3">
              <Link to="/">
                <AiOutlineShoppingCart />
              </Link>
            </div>

            <div onClick={() => setToggle(!toggle)} className="col-3">
              <AiOutlineUser />
            </div>
          </div>
        </section>

        <div className="row ">
          <div className={` col-xl-3 col-12 px-0`}>
            {/* Navigaions will be here */}
            <div
              className={
                toggle
                  ? `${layoutStyle.nav_links} ${layoutStyle.show}`
                  : `${layoutStyle.nav_links} ${layoutStyle.hide}`
              }
            >
              <Navigation toggle={toggle} toggleF={setToggle} />
            </div>
          </div>
          <div className=" col-xl-9 col-12  px-0 mx-0">
            {/* Container for showing content */}

            <div className={layoutStyle.content}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
