import React from 'react';
import logo from "../assets/img/Logo.png"

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Bagian kiri dengan tempat logo dan background */}
      <div className="flex items-center justify-center w-1/3 bg-gradient-to-r from-purple-500 to-pink-500">
        {/* Ganti `src` dengan sumber gambar logo */}
        <img src={logo} alt="Logo" width={200} />
      </div>

      {/* Bagian kanan dengan form login */}
      <div className="flex items-center justify-center w-[60%]">
        <div className="max-w-md px-8 py-12 bg-white shadow-lg rounded-lg w-full">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">Login</button>
          </form>
          <p className="text-gray-600 mt-4">Belum punya akun? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
