import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Fade } from "react-reveal";

const MobileNav = ({ CloseNav }) => {
  return (
    <div className="relative  ">
      <Fade right>
        <div className="fixed top-0 right-0 transition-all duration-300 bg-white shadow-lg h-full w-2/3 sm:w-1/2 z-50 py-4">
          <div className="flex items-center justify-end  h-screen">
            <div className="flex justify-between flex-col h-full w-full">
              <div className="absolute top-0 right-0 p-3 text-2xl">
                <IoCloseSharp onClick={CloseNav} />
              </div>
              <div className="flex items-end flex-col justify-center gap-3 p-[4rem]">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="text-blue-500"
                >
                  Beranda
                </NavLink>
                <NavLink
                  to="/fitur"
                  className="nav-link"
                  activeClassName="text-blue-500"
                >
                  Fitur
                </NavLink>
                <NavLink
                  to="/beli-saldo"
                  className="nav-link"
                  activeClassName="text-blue-500"
                >
                  Beli Saldo
                </NavLink>
                <NavLink
                  to="/blog"
                  className="nav-link"
                  activeClassName="text-blue-500"
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/e-materai-instan"
                  className="nav-link"
                  activeClassName="text-blue-500"
                >
                  e-Materai instan
                </NavLink>
              </div>
              <div className="flex gap-2 justify-center w-full py-[4rem] px-3">
                <Link
                  to="/logout"
                  className="no-underline text-sm flex items-center gap-2 bg-red-500 px-4 py-2 md:px-6 md:py-4 text-white font-bold rounded-lg"
                >
                  <FiLogOut /> Logout
                </Link>
                <Link
                  to="/login"
                  className="no-underline text-sm flex items-center gap-2 bg-[#7C7CFC] px-4 py-2 md:px-6 md:py-4 text-white font-bold rounded-lg"
                >
                  <FiLogIn /> Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default MobileNav;
