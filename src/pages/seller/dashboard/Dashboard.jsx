import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import DashboardCom from "./components/DashboardCom";
import { API_URL } from "../../services/Api/api";
import authHeader from "../../services/auth-header";

const Dashboard = () => {
  return <DashboardCom />;
};

export default Dashboard;
