import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Router from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const query = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <QueryClientProvider client={query}>
      <ToastContainer />
      <Router />
    </QueryClientProvider>
    {/* </AuthProvider> */}
  </React.StrictMode>
);
