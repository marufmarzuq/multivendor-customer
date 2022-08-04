import React from "react";
import ReactDOMClient from "react-dom/client";

import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
// test
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
