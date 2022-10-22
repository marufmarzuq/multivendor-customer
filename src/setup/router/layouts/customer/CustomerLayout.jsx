import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../../common/footer/Footer";
import Header from "../../../../common/header/Header";
import { markutosFrontendApi } from "../../../../pages/services/Api/api";

const CustomerLayout = () => {
  const [loading, setLoading] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`/settings`)
      .then((response) => {
        setLoading(false);
				setCurrentItems(response?.data);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header
      languageSwitcher={currentItems.language_switcher ? currentItems.language_switcher : 1 }
      currencySwitcher={currentItems.currency_switcher ? currentItems.currency_switcher : 1 }
      headerLogo={ currentItems.header_logo ? currentItems.header_logo : "" }
      />
      <Outlet />
      <Footer footerData={currentItems}/>
    </div>
  );
};

export default CustomerLayout;
