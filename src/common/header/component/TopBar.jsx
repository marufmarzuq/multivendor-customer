import { useNavigate } from "react-router-dom";
import AuthService from "../../../pages/customer/services/auth.service";
import { NavLink } from "react-router-dom";
import { loadFromLocalStorage as loadSellerData } from "../../../utils/seller/manageLocalStorage";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../redux/slices/auth";

const TopBar = ({ languageSwitcher, currencySwitcher, language }) => {
  const { user, isLoggedin } = useSelector((state) => state?.authSlice);
  const dispatch = useDispatch();
  const languages = [
    { label: "EN", value: { code: "en-US", currency: "USD" }, code: "en" },
    { label: "FR", value: { code: "de-DE", currency: "EUR" }, code: "fr" },
  ];

  const currency = [
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
  ];

  var getLang = localStorage.getItem("frontendLang");
  getLang = getLang ? JSON.parse(getLang) : { code: language, currency: "USD" };
  var defaultLang = languages.find(function (lang) {
    return lang.code == getLang.code;
  });

  // Logout
  const navigate = useNavigate();
  const logout = () => {
    navigate("/login");
    AuthService.logout();
    dispatch(setAuth({ isLoggedin: false, user: null }));
  };

  const seller = loadSellerData();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    localStorage.setItem("frontendLang", JSON.stringify(lang));
    i18n.changeLanguage(lang.code);
  };

  const changeCurrency = (currency) => {
    var getCurrency = localStorage.getItem("frontendLang");
    getCurrency = getCurrency
      ? JSON.parse(getCurrency)
      : { code: "en", lang: "en-US", currency: "USD" };
    getCurrency.currency = currency;
    localStorage.setItem("frontendLang", JSON.stringify(getCurrency));
  };
  return (
    <div className="topbar ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4 col-lg-6 col-xl-6 col-xxl-6 left-menu">
            <ul className="d-flex">
              {languageSwitcher == true && (
                <div>
                  <Select
                    defaultValue={defaultLang}
                    options={languages}
                    onChange={(e) =>
                      changeLanguage({
                        code: e.code,
                        currency: e.value.currency,
                        lang: e.value.code,
                      })
                    }
                  />
                </div>
              )}
              {currencySwitcher == true && (
                <Select
                  defaultValue={{
                    label: defaultLang.value.currency,
                    value: defaultLang.value.currency,
                  }}
                  options={currency}
                  onChange={(e) => changeCurrency(e.value)}
                />
              )}
            </ul>
          </div>
          <div className="col-8 col-lg-6 col-xl-6 col-xxl-6 right-menu">
            <ul className="d-flex justify-content-end">
              <li>
                <NavLink to={seller ? "/seller" : "/seller-request"}>
                  {seller ? "Seller Dashboard" : "Be a Seller"}
                </NavLink>
              </li>
              <li>
                {isLoggedin ? (
                  <NavLink to="/dashboard">
                    {`${user?.user?.first_name} ${user?.user?.last_name}`}
                  </NavLink>
                ) : (
                  <NavLink to="/register">Register</NavLink>
                )}
              </li>
              <li>
                {isLoggedin ? (
                  <NavLink to="/login" onClick={logout}>
                    Logout
                  </NavLink>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </li>
              <li
                style={{
                  marginRight: "6px",
                }}
              >
                <NavLink to="/support">Help and Support</NavLink>
              </li>
              {/* <li>
			  <a href="#">
				<i className="far fa-bell active-dot"></i>
			  </a>
			</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
