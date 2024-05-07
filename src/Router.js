import React from "react";
import Home from "./Page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import BeliSaldo from "./Page/BeliSaldo";
import Login from "./Page/Login";
import Blog from "./Page/Blog";
import Kategori from "./Page/Kategori";
import Features from "./Page/Features";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />          
          <Route path="/beli-saldo" element={<BeliSaldo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/kategori" element={<Kategori />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
