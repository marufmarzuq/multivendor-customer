import React, { Fragment } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Dashboard from "../../pages/vendor/Dashboard";
import AddProduct from "../../pages/vendor/AddProduct";
import CustomerHome from "../../components/customer/CustomerHome";
import NotFound from "../../pages/NotFound";
import Login from "../../pages/vendor/Login";
import Layout from "../../Layout/vendor/Layout";
import PurchaseHistory from "../../pages/vendor/PurchaseHistory";
import SentRefundReq from "../../pages/vendor/SentRefundReq";
import Wishlist from "../../pages/vendor/Wishlist";

const NavRoutes = () => {
  // let navigate = useNavigate();
  return (
    <Fragment>
      <Routes>
        {/* route for customer starts here */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<CustomerHome />} />
        {/* route for customer ends here */}

        {/* routes for vendor start from here */}
        <Route
          path="/vendor"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          {/*all route for vendor will place here */}
          <Route path="" element={<Dashboard />} />
          <Route path="purchase-history" element={<PurchaseHistory />} />
          <Route path="sent-refund-request" element={<SentRefundReq />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
        {/* route for vendor ends here */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default NavRoutes;
