import React from "react";
import Home from "./Page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import BeliSaldo from "./Page/BeliSaldo";
import Login from "./Page/Login";
import Blog from "./Page/Blog";
import Features from "./Page/Features";
import Produktivitas from "./Page/Produktivitas";
import Bisnis from "./Page/Bisnis";
import Event from "./Page/Event";
import Keuangan from "./Page/Keuangan";
import MateraiInstan from "./Page/MateraiInstan";
import UploadMateraiInstan from "./Page/UploadMateraiInstan";
import ProsesMaterai from "./Page/ProsesMaterai";
import Profile from "./Page/Profile";
import AkunSaya from "./component/AkunSaya";
import ProfileUbahPassword from "./component/ProfileUbahPassword";
import ProfileHapusAkun from "./component/ProfileHapusAkun";
import Dashboard from "./Page/Dashboard";
import Signed from "./Page/Documents/Signed";
import Unsigned from "./Page/Documents/Unsigned";
import DashboardLayout from "./component/DashboardLayout";
import DashboardLayoutUser from "./component/DashboardLayoutUser";
import DashboardUser from "./Page/DashboardUser";
import RiwayatPembubutan from "./Page/Riwayat/RiwayatPembubutan";
import RiwayatPembelian from "./Page/Riwayat/RiwayatPembelian";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fitur" element={<Features />} />
          <Route path="/beli-saldo" element={<BeliSaldo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/produktivitas" element={<Produktivitas />} />
          <Route path="/bisnis" element={<Bisnis />} />
          <Route path="/event" element={<Event />} />
          <Route path="/keuangan" element={<Keuangan />} />
          <Route path="/e-materai-instan" element={<MateraiInstan />} />
          <Route path="/upload-emetinstan" element={<UploadMateraiInstan />} />
          <Route path="/proses" element={<ProsesMaterai />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/general" element={<AkunSaya />} />
          <Route
            path="/profile/ubah-password"
            element={<ProfileUbahPassword />}
          />
          <Route path="/profile/hapus-akun" element={<ProfileHapusAkun />} />
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/documents/signed" element={<Signed />} />
            <Route path="/documents/unsigned" element={<Unsigned />} />
          </Route>
          <Route element={<DashboardLayoutUser />}>
            <Route path="/dashboard-user" element={<DashboardUser />} />
            <Route
              path="/riwayat/riwayat-pembubutan"
              element={<RiwayatPembubutan />}
            />
            <Route
              path="/riwayat/riwayat-pembelian"
              element={<RiwayatPembelian />}
            />
            <Route path="/documents/unsigned" element={<Unsigned />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
