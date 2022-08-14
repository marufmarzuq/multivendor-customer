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
import PurchaseHistory from "../../pages/seller/purchaseHistory/PurchaseHistory";
import SentRefundReq from "../../pages/seller/sentRefund/SentRefundReq";
import Wishlist from "../../pages/seller/wishlist/Wishlist";
import Layout from "./layouts/seller/Layout";
import PrivateRoute from "./routeModels/PrivateRoute";

const Router = () => {
  return (
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

        {/* <Route path="purchase-history" element={<PurchaseHistory />} /> */}
        <Route path="sent-refund-request" element={<SentRefundReq />} />
        <Route path="products/wishlist" element={<Wishlist />} />
        <Route path="products/all" element={<Products />} />
        <Route path="products/add" element={<AddProducts />} />

        <Route path="products/update" element={<UpdateProduct />} />
        <Route path="products/bulk-upload" element={<BulkUpload />} />
        <Route path="products/digital/all" element={<DigitalProduct />} />
        <Route path="products/digital/add" element={<AddDigitalProducts />} />
        <Route
          path="digital-products/update"
          element={<UpdateDigitalProduct />}
        />

        <Route path="orders" element={<Orders />} />
      </Route>

      {/* <Route path="products" element={<Layout />}>
        <Route path="all" element={<Products />} />
        <Route path="add" element={<AddProducts />} />
        <Route path="update" element={<UpdateProduct />} />
        <Route path="bulk-upload" element={<BulkUpload />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Route>

      <Route path="digital-products" element={<Layout />}>
        <Route path="all" element={<DigitalProduct />} />
        <Route path="add" element={<AddDigitalProducts />} />
        <Route path="update" element={<UpdateDigitalProduct />} />
      </Route> */}

      {/* route for seller ends here */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
