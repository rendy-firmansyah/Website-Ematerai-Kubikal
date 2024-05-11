import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Router from "./Router";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import MencobaPage from "./Page/MencobaPage";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Router/>
  </React.StrictMode>
);
