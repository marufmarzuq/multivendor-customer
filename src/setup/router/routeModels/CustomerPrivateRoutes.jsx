import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { loadFromLocalStorage } from "../../../utils/user/manageLocalStorage";

const CustomerPrivateRoutes = () => {
  let user = loadFromLocalStorage();
  // let user = true;
  return user?.access_token ? <Outlet /> : <Navigate to="/login" />;
};

export default CustomerPrivateRoutes;
