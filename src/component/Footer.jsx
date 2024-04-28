import React from "react";
import logo from "../assets/img/Logo.png";
import pse from "../assets/img/pse.png";
import kominfo from "../assets/img/kominfo.png";
import peruri from "../assets/img/Peruri.png";

const Footer = () => {
  return (
    <footer className="bg-[#EFEAEA] px-[8rem] text-sm">
      <div className="container mx-auto py-8">
        <img
          src={logo}
          alt="EMET Logo"
          width={110}
          height={57}
          className="mb-[3rem]"
        />
        <div className="flex items-start pt-[2rem]">
          <div className="w-1/3 md:w-1/2 lg:w-1/3 mb-8 lg:mb-0">
            <p className="text-sm text-[#8F9199]">
              EMET adalah aplikasi yang menyediakan layanan manajemen dokumen
              kontrak digital dengan menggunakan produk sertifikat elektronik,
              tanda tangan elektronik, dan meterai elektronik resmi dan sah yang
              disediakan oleh Perur.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mt-8 md:mt-0">
            <p className="text-sm font-semibold mb-2 text-[#8F9199]">
              Penyelenggara Sistem Elektronik
            </p>
            <div className="flex gap-4">
              <img src={pse} alt="PSE Logo" width={90} height={50} />
              <img src={kominfo} alt="Kominfo Logo" width={123} height={50} />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mt-8 md:mt-0">
            <p className="text-sm text-[#8F9199] font-semibold mb-2">Mitra Strategis</p>
            <img src={peruri} alt="Peruri Logo" className="w-32 h-auto" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mt-8 md:mt-0">
            <p className="text-sm font-semibold mb-2 text-[#8F9199]">
              Pusat Bantuan eMET by Momofin:
            </p>
            <li>WA: +628113885222</li>
            <li>
              Email: <span className="text-blue-600">support@momofin.com</span>
            </li>
          </div>
        </div>
        <div className="flex gap-6 mt-8 text-sm">
          <p className="text-[#8F9199]">Kebijakan Privasi</p>
          <p className="text-[#8F9199]">Syarat & Ketentuan</p>
        </div>
        <hr className="my-5" />
        <p className="text-sm text-[#8F9199] font-light">
          Copyright © E-Materai by Kubikal marks are registered trademarks of
          PT. Datanode Narologi Siberkarya.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
