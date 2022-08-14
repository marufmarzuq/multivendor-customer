import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import CustomerHome from "../../pages/customer/customerHome/CustomerHome";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import BulkUpload from "../../pages/seller/bulkUpload/BulkUpload";

import Dashboard from "../../pages/seller/dashboard/Dashboard";
import AddDigitalProducts from "../../pages/seller/digitalProduct/components/addDigitalProducts/AddDigitalProducts";
import UpdateDigitalProduct from "../../pages/seller/digitalProduct/components/updateDigitalProduct/UpdateDigitalProduct";
import DigitalProduct from "../../pages/seller/digitalProduct/DigitalProduct";
import Orders from "../../pages/seller/orders/Orders";
import AddProducts from "../../pages/seller/products/components/addProduct/AddProducts";
import UpdateProduct from "../../pages/seller/products/components/updateProducts/UpdateProduct";
import Products from "../../pages/seller/products/Products";

import SentRefundReq from "../../pages/seller/sentRefund/SentRefundReq";
import Wishlist from "../../pages/seller/wishlist/Wishlist";
import Layout from "./layouts/seller/Layout";
import PrivateRoute from "./routeModels/PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="sent-refund-request" element={<SentRefundReq />} />
      </Route>

      <Route
        path="products/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="all" element={<Products />} />
        <Route path="add" element={<AddProducts />} />
        <Route path="update" element={<UpdateProduct />} />
        <Route path="bulk-upload" element={<BulkUpload />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="digital/all" element={<DigitalProduct />} />
        <Route path="digital/add" element={<AddDigitalProducts />} />
        <Route path="digital/update" element={<UpdateDigitalProduct />} />
      </Route>

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
