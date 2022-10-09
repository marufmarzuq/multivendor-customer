import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../../common/footer/Footer";
import Header from "../../../../common/header/Header";
import { markutosFrontendApi } from "../../../../pages/services/Api/api";
import authHeader from "../../../../pages/services/auth-header";

const CustomerLayout = () => {
  const [loading, setLoading] = useState(false);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    markutosFrontendApi
      .get(`/settings`,
        {
          headers: {
            Authorization: authHeader(),
          },
        }
      )
      .then((response) => {
        setLoading(false);
				setCurrentItems(response?.data?.data);
      });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default CustomerLayout;
