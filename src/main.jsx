import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
