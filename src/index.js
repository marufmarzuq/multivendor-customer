import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import "../src/styles/sass/style.scss";
import AppProviders from "./setup/providers";
import { ToastContainer } from "react-toastify";
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <AppProviders>
    <App />
    <ToastContainer />
  </AppProviders>
);
