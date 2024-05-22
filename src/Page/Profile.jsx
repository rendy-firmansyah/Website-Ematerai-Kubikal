import React, { useState } from "react";
import avatar from "../assets/img/default_avatar.jpg";
import { FaUser } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { FaStarOfLife } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import AkunSaya from "../component/AkunSaya";
import ProfileUbahPassword from "../component/ProfileUbahPassword";
import ProfileHapusAkun from "../component/ProfileHapusAkun";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("akunSaya");


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container mx-auto py-10">
      <Link to="/" className="py-2 px-4 flex gap-1 no-underline text-black items-center w-32 rounded-full bg-gray-300">
        <span><FaArrowLeftLong /></span>
        Kembali
      </Link>
      <header className="mb-8">
        <h1 className="text-center text-2xl font-bold">Akun Saya</h1>
      </header>
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-8">
        <div className="flex flex-col items-center md:w-1/3 mt-4">
          <img
            src={avatar}
            className="rounded-full w-20 mb-2"
            alt="Avatar"
          />
          <h3 className="text-lg font-semibold">Hannan Amar</h3>
          <div className="bg-gray-200 p-3 w-full flex items-center justify-between mt-4 mb-1">
            <div className="flex gap-2 items-center cursor-pointer" onClick={() => handleTabClick("akunSaya")}>
              <FaUser className="text-gray-600 text-lg" />
              <div className={activeTab === "akunSaya" ? "bg-gray-500 border-l-2" : ""}></div> <span>Akun Saya</span>
            </div>
            <MdArrowForwardIos className="text-gray-600" />
          </div>

          <div className="bg-gray-200 p-3 w-full flex items-center justify-between mb-1">
            <div className="flex gap-2 items-center cursor-pointer" onClick={() => handleTabClick("ubahPassword")}>
              <FaStarOfLife className="text-gray-600 text-lg" />
              <div className={activeTab === "ubahPassword" ? "bg-gray-500 border-l-2" : ""}></div> <span>Ubah Password</span>
            </div>
            <MdArrowForwardIos className="text-gray-600" />
          </div>

          <div className="bg-gray-200 p-3 w-full flex items-center justify-between">
            <div className="flex gap-2 items-center cursor-pointer" onClick={() => handleTabClick("hapusAkun")}>
              <FaTrash className="text-gray-600 " />
              <div className={activeTab === "hapusAkun" ? "bg-gray-500 border-l-2" : ""}></div> <span>Hapus Akun</span>
            </div>
            <MdArrowForwardIos className="text-gray-600" />
          </div>
        </div>

        {activeTab === "akunSaya" && <AkunSaya />}
        {activeTab === "ubahPassword" && <ProfileUbahPassword />}
        {activeTab === "hapusAkun" && <ProfileHapusAkun />}
      </div>
    </div>
  );
};

export default Profile;
