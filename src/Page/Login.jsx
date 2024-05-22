import React, { useState } from "react";
import logo from "../assets/img/Logo.png";
import bg from "../assets/img/bg-ungu.jpg";
import bglogin from "../assets/img/bg-login.jpg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { LoginUser, useLoginUser } from "../services/LoginUser";

const Login = () => {
  // const { handleLogin } = useAuth()
  const [User, setUser] = useState("");
  const [Password, setPassword] = useState("");

  // const [form, setForm] = useState({
  //   email: '',
  //   password: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({
  //     ...form,
  //     [name]: value
  //   });
  // }

  const {mutate : LoginUser } = useLoginUser()

  const handleChange = (e) => {
    if (e.target.id === "user") {
      setUser(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const Login = () => {
    LoginUser({
      user: User,
      password: Password
    });

    // navigate("/");
  };
  
  const navigate = useNavigate();

  const [show, setshow] = useState(false);

  const ShowPw = () => {
    setshow(!show);
  };
  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex">
      <div className="flex flex-col w-full my-[4rem] justify-center items-center mx-auto">
        <div className="flex items-center mb-3 gap-2 ">
          <span className="text-2xl bg-[#7c7cfc] p-2 font-bold text-white rounded-full">
            {" "}
            Welcome To
          </span>{" "}
          <img src={logo} width={150} alt="" />
        </div>
        <div className="flex xl:w-1/3 xl:h-full bg-white shadow-lg rounded-e-xl items-center justify-center">
          <div className="max-w-md px-8 py-12 rounded-lg w-full">
            <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
            <div>
              <div className="mb-4">  
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="user"
                  name="email"
                  placeholder="test@gmail.com"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border bg-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  placeholder="********"
                  type={show ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  className=" w-full px-3 py-2 border bg-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <span
                  onClick={ShowPw}
                  className="absolute right-3 bottom-2.5 text-gray-500 text-xl cursor-pointer"
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <button
                onClick={Login}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Login
              </button>
            </div>
            <p className="text-gray-600 mt-4">
              Belum punya akun?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">
                Daftar Sekarang
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
