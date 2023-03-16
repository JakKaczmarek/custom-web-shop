import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
