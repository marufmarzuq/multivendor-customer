import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import CustomerHome from "../../pages/customer/customerHome/CustomerHome";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";

import Dashboard from "../../pages/seller/dashboard/Dashboard";
import AddProducts from "../../pages/seller/products/components/addProduct/AddProducts";
import UpdateProduct from "../../pages/seller/products/components/updateProducts/UpdateProduct";
import Products from "../../pages/seller/products/Products";
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
        <Route path="/customer" element={<CustomerHome />} />
        {/* route for customer ends here */}

        {/* routes for seller start from here */}
        <Route
          path="/"
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
          <Route path="products" element={<Products />} />
          <Route path="products/add-products" element={<AddProducts />} />

          <Route path="products/update-product" element={<UpdateProduct />} />
        </Route>
        {/* route for seller ends here */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default Router;
