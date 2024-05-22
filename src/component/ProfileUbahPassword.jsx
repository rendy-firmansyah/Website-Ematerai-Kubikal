import React from "react";
import { FaStarOfLife } from "react-icons/fa6";

const ProfileUbahPassword = () => {
  return (
    <div className="flex flex-col md:w-3/4 space-y-4 mt-[3rem]">
      <div className="flex items-center gap-2 text-lg font-medium mb-4">
        <FaStarOfLife />
        <span>Ubah Password</span>
      </div>
      <div className="flex flex-col">
        <label htmlFor="username" className="text-gray-700  font-semibold">
          Password Sekarang
        </label>
        <input
          type="password"
          id="username"
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="username" className="text-gray-700  font-semibold">
          Password Baru
        </label>
        <input
          type="password"
          id="username"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter your first name"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="username" className="text-gray-700  font-semibold">
          Konfirmasi Password
        </label>
        <input
          type="password"
          id="username"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Samakan dengan password yang telah anda buat"
        />
      </div>

      <button className="gap-2 bg-[#7C7CFC] w-1/4 px-6 py-2 text-white font-bold rounded-lg mt-4">
        Perbarui Password
      </button>
    </div>
  );
};

export default ProfileUbahPassword;
