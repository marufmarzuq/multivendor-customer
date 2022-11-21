import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../../../../common/footer/Footer";
import Header from "../../../../common/header/Header";
import { markutosFrontendApi } from "../../../../pages/services/Api/api";
import { setAuth } from "../../../../redux/slices/auth";
import { loadFromLocalStorage } from "../../../../utils/user/manageLocalStorage";

const CustomerLayout = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const user = loadFromLocalStorage();
  const dispatch = useDispatch();

  useEffect(() => {
    markutosFrontendApi.get(`/settings`).then((response) => {
      setCurrentItems(response?.data);
    });
    dispatch(
      setAuth({
        isLoggedin: user ? true : false,
        user,
      })
    );
  }, []);

  return (
    <div className="wrapper">
      <Header
        user={user}
        categories={currentItems.categories ? currentItems.categories : []}
        languageSwitcher={
          currentItems.language_switcher ? currentItems.language_switcher : 1
        }
        currencySwitcher={
          currentItems.currency_switcher ? currentItems.currency_switcher : 1
        }
        headerLogo={currentItems.header_logo ? currentItems.header_logo : ""}
        language={currentItems?.language || "en"}
        filterCategories={currentItems?.filter_categories || []}
      />
      <Outlet />
      <Footer user={user} footerData={currentItems} />
    </div>
  );
};

export default CustomerLayout;
