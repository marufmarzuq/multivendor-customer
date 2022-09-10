import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import authService from "../../../pages/services/auth.service";
import { loadFromLocalStorage } from "../../../utils/manageLocalStorage";

const PrivateRoutes = () => {
  let user = loadFromLocalStorage();
  // let user = true;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
