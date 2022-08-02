import React, { Fragment } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import CustomerHome from "../../pages/customer/customerHome/CustomerHome";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import Dashboard from "../../pages/seller/dashboard/Dashboard";
import PurchaseHistory from "../../pages/seller/purchaseHistory/PurchaseHistory";
import SentRefundReq from "../../pages/seller/sentRefund/SentRefundReq";
import Wishlist from "../../pages/seller/wishlist/Wishlist";
import Layout from "./layouts/seller/Layout";
import PrivateRoute from "./routeModels/PrivateRoute";

const Router = () => {
  return (
    <Fragment>
      <Routes>
        {/* route for customer starts here */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<CustomerHome />} />
        {/* route for customer ends here */}

        {/* routes for seller start from here */}
        <Route
          path="/seller"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          {/*all route for seller will place here */}
          <Route path="" element={<Dashboard />} />
          <Route path="purchase-history" element={<PurchaseHistory />} />
          <Route path="sent-refund-request" element={<SentRefundReq />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
        {/* route for seller ends here */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default Router;
