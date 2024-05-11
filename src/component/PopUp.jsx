import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import security from "../assets/img/security.png";
import { FaCheck } from "react-icons/fa";
import Gplay from "../assets/img/google play.png"
import Apple from "../assets/img/apple store.png"

const PopUp = ({handleClose}) => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex bg-black/50 z-50 overflow-auto py-6">
      <div
        className="mx-auto mt-0 h-fit rounded max-w-full bg-white px-6 py-8 mb-20"
        style={{ width: "500px" }}
      >
        <div className="flex justify-end">
          <IoCloseSharp onClick={handleClose} className="text-2xl" />
        </div>
        <div className="text-center mb-8">
          <img src={security} alt="" className="h-32 inline" />
        </div>
        <div className="flex flex-col my-4 space-y-4">
          <div className="text-center px-16 font-semibold">
            {" "}
            Download eMET Mobile App sekarang untuk menikmati seluruh fitur kami{" "}
          </div>
          <div className="flex space-x-4 px-8">
            <FaCheck className="inline-block max-w-full max-h-full align-middle text-[#0068D6] text-emet-primary h-6 w-6 mt-0" />
            <div className="w-full">
              Membubuhkan e-Meterai & Tanda Tangan Digital sekaligus
            </div>
          </div>
          <div className="flex space-x-4 px-8">
            <FaCheck className="inline-block max-w-full max-h-full align-middle text-[#0068D6] text-emet-primary h-6 w-6 mt-0" />
            <div className="w-full">
              Menambahkan pihak lain untuk ikut menandatangani dokumen anda
            </div>
          </div>
          <div className="flex space-x-4 px-8">
            <FaCheck className="inline-block max-w-full max-h-full align-middle text-[#0068D6] text-emet-primary h-6 w-6 mt-0" />
            <div className="w-full">Mengirimkan Dokumen kepada Pihak Lain</div>
          </div>
          <div className="flex space-x-4 px-8">
            <FaCheck className="inline-block max-w-full max-h-full align-middle text-[#0068D6] text-emet-primary h-6 w-6 mt-0" />
            <div className="w-full">Penyimpanan dan pengeloaan dokumen</div>
          </div>
          <div className="flex space-x-4 px-8">
            <FaCheck className="inline-block max-w-full max-h-full align-middle text-[#0068D6] text-emet-primary h-6 w-6 mt-0" />
            <div className="w-full">
              Harga lebih murah dan berbagai promo menarik
            </div>
          </div>
          <div className="font-normal text-[#475467] text-center">
            Install dan daftarkan akun Anda secara gratis! Dapatkan segala
            kemudahan dalam menandatangani, membubuhkan meterai, dan mengelola
            dokumen.
          </div>
          <div className="flex items-center justify-center space-x-4 mt-8">
          <a href="https://apps.apple.com/id/app/emet-meterai-tanda-tangan/id1604423824">
            <img src={Apple} width={141} alt="" />
          </a>
          <a href="https://play.google.com/store/search?q=emet+e-meterai&c=apps">

            <img src={Gplay} width={158} alt="" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
