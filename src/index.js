import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Toaster } from "react-hot-toast";

import { BrowserRouter } from "react-router-dom";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoppingCartContextProvider>
        {/* <Toaster position="bottom-right" /> */}
        <App />
      </ShoppingCartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
