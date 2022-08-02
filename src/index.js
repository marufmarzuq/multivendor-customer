import React from "react";
import ReactDOMClient from "react-dom/client";

import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";

// ReactDOM.render(<App />, document.getElementById("root"));
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
// test commit
// test commit1
// test commit3
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
