import React from "react";
import { FaTrash } from "react-icons/fa6";

const ProfileHapusAkun = () => {
  return (
    <div className="flex flex-col md:w-3/4 space-y-4 mt-[3rem]">
      <div className="flex items-center gap-2 text-lg font-medium mb-4">
        <FaTrash />
        <span>Hapus Akun</span>
      </div>
      <p>
        Apakah kamu yakin ingin menghapus akun ini jika yakin maka akun ini akan
        di hapus permanen dari situs ini. untuk menghapus akun anda masukkan
        password anda di bawah
      </p>
      <div className="flex flex-col">
        <label htmlFor="username" className="text-gray-700  font-semibold">
          Password
        </label>
        <input
          type="password"
          id="username"
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>

      <button className="gap-2 bg-[#7C7CFC] w-1/4 px-6 py-2 text-white font-bold rounded-[4px] mt-4">
        Perbarui Password
      </button>
    </div>
  );
};

export default ProfileHapusAkun;
