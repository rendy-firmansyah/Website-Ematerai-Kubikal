import React from "react";
import Cartoon from "../assets/img/dashboard/cartoon.svg";
import { HiMiniDocumentText } from "react-icons/hi2";
import { HiMiniDocumentCheck } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DashboardUser = () => {
  return (
    <div>
      <section className="grid md:grid-cols-2 gap-4">
        <div className="relative h-fit lg:h-full bg-gradient-to-tr from-[#004DA3] to-[#1CC8EE] rounded text-white p-4 flex sm:flex-col lg:flex-row justify-between">
          <div className="flex flex-col justify-evenly">
            <h1 className="font-bold text-2xl lg:text-3xl">
              Selamat Malam Miles Morales
            </h1>
            <p>Ini yang terjadi di akun anda hari ini</p>
            <button className="w-fit px-4 py-2 rounded-sm font-medium border hover:text-black hover:bg-white duration-300">
              Ada apa hari ini?
            </button>
          </div>
          <img
            src={Cartoon}
            alt=""
            className="w-28 lg:w-40 absolute bottom-0 right-4 animate-up"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 rounded p-4 shadow-md hover:-translate-y-1 duration-300 bg-white">
            <div className="max-h-16 h-full max-w-16 w-full p-2 flex items-center justify-center border-2 border-orange-500 rounded-full">
              <HiMiniDocumentText className="h-full w-full text-orange-500" />
            </div>
            <div className="mx-auto">
              <h3 className="text-xl text-center">5</h3>
              <h4 className="text-base">E-Materai</h4>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded p-4 shadow-md hover:-translate-y-1 duration-300 bg-white">
            <div className="max-h-16 h-full max-w-16 w-full p-2 flex items-center justify-center border-2 border-green-500 rounded-full">
              <HiMiniDocumentCheck className="h-full w-full text-green-500" />
            </div>
            <div className="mx-auto">
              <h3 className="text-xl text-center">10</h3>
              <h4 className="text-base">ESGN</h4>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded p-4 shadow-md hover:-translate-y-1 duration-300 bg-white lg:col-span-2">
            <div className="max-h-16 h-full max-w-16 w-full p-2.5 flex items-center justify-center border-2 border-cyan-500 rounded-full">
              <FaUser className="h-full w-full text-cyan-500" />
            </div>
            <NavLink
              to="/beli-saldo"
              className="text-black no-underline block mx-auto text-center"
            >
              <div className="mx-auto">
                <h3 className="text-xl text-center">Rp. 100.000</h3>
                <h4 className="text-base">Isi Saldo</h4>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardUser;
