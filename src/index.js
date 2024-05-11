import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Router from "./Router";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './provider/AuthProvider'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);
