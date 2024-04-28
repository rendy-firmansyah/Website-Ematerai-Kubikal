import React from "react";
import Logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-[9rem]">
      <div>
        <img src={Logo} alt="Logo" width={110} height={57} />
      </div>
      <div className="flex gap-4 text-sm font-medium">
        <NavLink to="/" className="nav-link">Beranda</NavLink>
        <NavLink to="/fitur" className="nav-link">Fitur</NavLink>
        <NavLink to="/beli-saldo" className="nav-link">Beli Saldo</NavLink>
        <NavLink to="/blog" className="nav-link">Blog</NavLink>
        <NavLink to="/e-materai-instan" className="nav-link">e-Materai instan</NavLink>
      </div>
      <div>
        <Link to="/login" className="no-underline text-sm flex items-center gap-2 bg-[#7C7CFC] px-4 py-2 text-white font-bold rounded-lg">
          <FiLogIn /> Sign-In
        </Link>
      </div>
    </div>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} className="no-underline text-gray-700 hover:text-blue-600 transition duration-300">{children}</Link>
);

export default Header;
