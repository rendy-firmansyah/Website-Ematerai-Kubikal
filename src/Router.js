import React from "react";
import Home from "./Page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import BeliSaldo from "./Page/BeliSaldo";
import Login from "./Page/Login";
import Blog from "./Page/Blog";
import MobileNav from "./component/MobileNav";
import BlogDetail from "./Page/BlogDetail";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beli-saldo" element={<BeliSaldo/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog-detail" element={<BlogDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
