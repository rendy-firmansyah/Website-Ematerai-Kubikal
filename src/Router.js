import React from "react";
import Home from "./Page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import BeliSaldo from "./Page/BeliSaldo";
import Login from "./Page/Login";
import Blog from "./Page/Blog";
import Produktivitas from "./Page/Produktivitas";
import Bisnis from "./Page/Bisnis";
import Event from "./Page/Event";
import Keuangan from "./Page/Keuangan";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beli-saldo" element={<BeliSaldo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/produktivitas" element={<Produktivitas />} />
          <Route path="/bisnis" element={<Bisnis />} />
          <Route path="/event" element={<Event />} />
          <Route path="/keuangan" element={<Keuangan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
