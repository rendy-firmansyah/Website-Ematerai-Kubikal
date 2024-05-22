import React, { useState } from "react";
import Logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import MobileNav from "./MobileNav";
import useAuth from "../hooks/useAuth";


const Header = () => {
  const [OpenNav, setOpenNav] = useState(false);
  
  const ToggleNav = () => {
    setOpenNav(true)
  }
  
  const CloseNav = () => {
    setOpenNav(false)
  }

  // const { isLoggedIn, handleLogout} = useAuth();
  return (
    <div className="flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-[2rem] md:px-[4rem] xl:px-[6rem]">
      <div>
        <img src={Logo} alt="Logo" width={110} height={57} />
      </div>
      <div className="hidden xl:flex md:gap-3 xl:gap-[2rem] text-sm font-medium">
        <NavLink to="/" className="nav-link">
          Beranda
        </NavLink>
        <NavLink to="/fitur" className="nav-link">
          Fitur
        </NavLink>
        <NavLink to="/beli-saldo" className="nav-link">
          Beli Saldo
        </NavLink>
        <NavLink to="/blog" className="nav-link">
          Blog
        </NavLink>
        <NavLink to="/e-materai-instan" className="nav-link">
          e-Materai instan
        </NavLink>
      </div>
      <div className="flex items-center gap-3">
        {/* {isLoggedIn ? (
          <button onClick={handleLogout} className="no-underline hidden md:flex text-sm  items-center gap-2 bg-[#7C7CFC] px-4 py-2 text-white font-bold rounded-lg">
            <FiLogOut /> Logout
          </button>
        ) : (
        )} */}
          <Link
            to="/login"
            className="no-underline hidden xl:flex text-sm  items-center gap-2 bg-[#7C7CFC] px-4 py-2 text-white font-bold rounded-lg">
            <FiLogIn /> Login
          </Link>
        <div className={`block ${OpenNav ? "opacity-0" : "opacity-100"} z-20 xl:hidden text-black`}>
          <FaBars onClick={ToggleNav} />
        </div>
      </div>
      {OpenNav && <MobileNav CloseNav={CloseNav} OpenNav={OpenNav} />}
    </div>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="no-underline text-gray-700 hover:text-blue-600 transition duration-300"
  >
    {children}
  </Link>
);

export default Header;
