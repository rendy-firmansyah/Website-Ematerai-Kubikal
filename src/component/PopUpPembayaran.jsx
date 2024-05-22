import React from "react";
import mandiri from "../assets/img/MANDIRI.png";
import bca from "../assets/img/BCA.png";
import bri from "../assets/img/BRI.png";
import bni from "../assets/img/BNI.png";
import linkaja from "../assets/img/linkaja.png";
import dana from "../assets/img/dana.png";
import { IoCloseSharp } from "react-icons/io5";
import { FaFileSignature } from "react-icons/fa6";
import { BsPostageFill } from "react-icons/bs";
import { FaUserGear } from "react-icons/fa6";

const PopUpPembayaran = ({ setPembayaran, TandaTangan, showMaterai }) => {
  return (
    <section className="fixed w-screen h-screen top-0 left-0 flex bg-black/50 z-50 overflow-auto py-6 ">
      <div className="mx-auto mt-0 h-fit rounded max-w-full bg-white px-6 py-8 mb-20 w-[600px]">
        <div className="flex justify-end">
          <IoCloseSharp
            className="text-2xl cursor-pointer"
            onClick={() => setPembayaran(false)}
          />
        </div>
        <div className="flex flex-col space-y-4 ">
          <div>
            {" "}
            Untuk dapat memproses dokumen, masukan alamat email anda. Dokumen
            yang telah berhasil diproses akan dikirimkan ke alamat email anda{" "}
          </div>
          <div className="rounded p-4 bg-[#F1F5F9]">
            <h4 className="text-[#0068D6] mb-3 text-lg font-medium">
              Alamat Email Anda
            </h4>
            <input
              placeholder="Masukkan Email Anda"
              type="email"
              className="block rounded w-full px-4 py-2 border-[2px] border-gray-300"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="font-medium text-lg">Total Tagihan</h4>
          </div>
          <div className="border rounded flex flex-col text-gray-700">
            {showMaterai && (
              <div className="p-3 border-b flex justify-between space-x-2 text-sm">
                <div>
                  <BsPostageFill className="text-[#0068D6] inline-block max-w-full max-h-full align-middle -mt-1 h-6 w-6  mr-2" />
                  <span>Harga Materai</span>
                </div>
                <div>Rp 10.000</div>
              </div>
            )}

            {TandaTangan && (
              <div className="p-3 border-b flex justify-between space-x-2 text-sm">
                <div>
                  <FaFileSignature className="text-[#0068D6] inline-block max-w-full max-h-full align-middle -mt-1 h-6 w-6  mr-2" />
                  <span>Tanda Tangan</span>
                </div>
                <div>Rp 10.000</div>
              </div>
            )}
            <div className="p-3 border-b flex justify-between space-x-2 text-sm">
              <div>
                <FaUserGear className="text-[#0068D6] inline-block max-w-full max-h-full align-middle -mt-1 h-6 w-6  mr-2" />
                <span>Biaya Layanan</span>
              </div>
              <div>Rp 3.500</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-medium mt-4">Metode Pembayaran</h4>
          <div className="border rounded flex flex-col text-gray-700 mb-4">
            <div className="bg-[#F9FAFB] p-3 border-b">
              <h4 className="text-base font-medium">
                Metode Pembayaran Yang Tersedia
              </h4>
              <div className="mb-4">
                <h4 className="text-sm">Bank Transfer</h4>
                <div className="flex flex-wrap">
                  <img src={bca} className="h-12 m-1" alt="" />
                  <img src={bni} className="h-12 m-1" alt="" />
                  <img src={mandiri} className="h-12 m-1" alt="" />
                  <img src={bri} className="h-12 m-1" alt="" />
                </div>
              </div>

              <div>
                <h4 className="text-lg">E-Wallet</h4>
                <div className="flex flex-wrap">
                  <img src={linkaja} className="h-12 m-1" alt="" />
                  <img src={dana} className="h-12 m-1" alt="" />
                </div>
              </div>
            </div>
            <div className="p-3 border-b text-sm font-medium">
              <div className="flex justify-between">
                <div>Biaya Transaksi</div>
                <div>Rp 10.000</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded flex flex-col text-gray-700 mb-4">
          <div className="bg-[#F1F4FB] p-3">
            <div className="flex justify-between font-semibold space-x-2">
              <div>Total</div>
              <div>Rp 16.000</div>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#0068D6] text-white font-bold p-3 rounded-[4px]">
          Bayar Tagihan & Proses Dokumen
        </button>
      </div>
    </section>
  );
};

export default PopUpPembayaran;
