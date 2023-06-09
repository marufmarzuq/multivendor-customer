import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import layoutStyle from "./layout.module.css";
import Select from "react-select";

import {
  AiOutlineHome,
  AiOutlineBars,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { IoArrowRedoOutline } from "react-icons/io5";
import Navigation from "../../../../navigation/seller/Navigation";

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    localStorage.setItem("sellerLang", JSON.stringify(lang));
    i18n.changeLanguage(lang);
  };
  const languages = [
    { label: "EN", value: { code: "en-US", currency: "USD" }, code: "en" },
    { label: "FR", value: { code: "de-DE", currency: "EUR" }, code: "fr" },
  ];

  return (
    <>
      <div className="container-fluid m-0 p-0 mb-0">
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
        <div className={` ${layoutStyle.layoutContainer}`}>
          <div className={` m-0  px-0`}>
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
          <div className="px-0 mx-0">
            {/* Container for showing content */}
            <div className={`sller-lang-div  ${layoutStyle.content}`}>
              <section className={layoutStyle.topMenu}>
                <menu>
                  <div>
                    <Select
                      defaultValue={{label: "EN", value: { code: "en-US", currency: "USD" }, code: "en"}}
                      options={languages}
                      onChange={(e) => changeLanguage(e.code)}
                    />
                  </div>
                  <div>
                    <NavLink className="btn btn-sm" to={"/"}>
										{t("go_frontend")} <IoArrowRedoOutline className="ms-2" />
                    </NavLink>
                  </div>
                </menu>
              </section>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
