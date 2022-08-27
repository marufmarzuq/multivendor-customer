import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import BulkUpload from "../../pages/seller/bulkUpload/BulkUpload";
import CommissionHistory from "../../pages/seller/commissionHistory/CommissionHistory";
import Dashboard from "../../pages/seller/dashboard/Dashboard";
import AddDigitalProducts from "../../pages/seller/digitalProduct/components/addDigitalProducts/AddDigitalProducts";
import UpdateDigitalProduct from "../../pages/seller/digitalProduct/components/updateDigitalProduct/UpdateDigitalProduct";
import DigitalProduct from "../../pages/seller/digitalProduct/DigitalProduct";
import ManageProfile from "../../pages/seller/manageProfile/ManageProfile";
import MyWallet from "../../pages/seller/myWallet/MyWallet";
import Orders from "../../pages/seller/orders/Orders";
import PaymentHistory from "../../pages/seller/paymentHistory/PaymentHistory";
import ProductReviews from "../../pages/seller/productReviews/ProductReviews";
import AddProducts from "../../pages/seller/products/components/addProduct/AddProducts";
import UpdateProduct from "../../pages/seller/products/components/updateProducts/UpdateProduct";
import Products from "../../pages/seller/products/Products";
import ReceivedRefundReq from "../../pages/seller/receivedRefund/ReceivedRefundReq";
import SentRefundReq from "../../pages/seller/sentRefund/SentRefundReq";
import Wishlist from "../../pages/seller/wishlist/Wishlist";
import Layout from "./layouts/seller/Layout";
import PrivateRoute from "./routeModels/PrivateRoute";
import MoneyWithDraw from "../../pages/seller/moneyWithdraw/MoneyWithDraw";
import ShopSetting from "../../pages/seller/shopSetting/ShopSetting";
import Home from "../../pages/customer/homepage/Home";
import CustomerLayout from "./layouts/customer/CustomerLayout";
import Shop from "../../pages/customer/shop/Shop";
import Stores from "../../pages/customer/stores/Stores";
import SingleProduct from "../../pages/customer/singleProduct/SingleProduct";
import Cart from "../../pages/customer/cart/Cart";
import ProductCompare from "../../pages/customer/productCompare/ProductCompare";
import CustomerWishlist from "../../pages/customer/wishlist/CustomerWishlist";
import Checkout from "../../pages/customer/checkout/Checkout";
import Support from "../../pages/customer/support/Support";
import SellerRequest from "../../pages/customer/sellerRequest/SellerRequest";

const Router = () => {
  return (
    <Routes>
      {/* Vendor Dashboard */}
      <Route
        path="/seller"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="sent-refund-request" element={<SentRefundReq />} />
        <Route path="received-refund-request" element={<ReceivedRefundReq />} />
        <Route path="payment-history" element={<PaymentHistory />} />
        <Route path="commission-history" element={<CommissionHistory />} />
        <Route path="my-wallet" element={<MyWallet />} />
        <Route path="withdraw" element={<MoneyWithDraw />} />
        <Route path="manage-profile" element={<ManageProfile />} />
        <Route path="setting" element={<ShopSetting />} />
      </Route>

      <Route
        path="seller/products/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="all" element={<Products />} />
        <Route path="reviews" element={<ProductReviews />} />
        <Route path="add" element={<AddProducts />} />
        <Route path="update" element={<UpdateProduct />} />
        <Route path="bulk-upload" element={<BulkUpload />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="digital/all" element={<DigitalProduct />} />
        <Route path="digital/add" element={<AddDigitalProducts />} />
        <Route path="digital/update" element={<UpdateDigitalProduct />} />
      </Route>
      {/* Customer homepage */}
      <Route path="/" element={<CustomerLayout />}>
        <Route path="" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="stores" element={<Stores />} />
        <Route path="cart" element={<Cart />} />
        <Route path="compare" element={<ProductCompare />} />
        <Route path="wishlist" element={<CustomerWishlist />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="support" element={<Support />} />
        <Route path="seller-request" element={<SellerRequest />} />
      </Route>

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
