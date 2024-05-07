import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Features = () => {
  return (
    <div>
      <Header />
      <div className="py-5 px-10 sm:px-4 md:px-10 lg:px-6 mt-8 mb-8 mx-auto sm:mx-16">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse sm:flex-row mb-6 mt-[78px] mx-auto justify-center">
            <div className="flex flex-col space-y-6 col-lg-6 mt">
              <div className="text-4xl md:text-5xl lg:text-[46px] font-bold text-[#493352] mb-[25px] lg:leading-[68px]">
                Fitur Tanda tangan elektronik yang Anda inginkan
              </div>
              <div className="text-[18px] md:text-lg lg:text-base font-light mb-[34px] leading-[30px] block unicode-bidi-isolate">
                Rangkaian fitur Tanda tangan elektronik andal yang digunakan
                oleh jutaan pelanggan di seluruh dunia. Selesaikan
                penandatanganan perjanjian dengan cepat dan aman, dengan
                fitur-fitur yang Anda inginkan.
              </div>
              <div className="flex gap-4 items-center mt-8">
                <div className="bg-[#3e5bea] active:scale-90 transition duration-400 transform hover:shadow-xl rounded-[6px] shadow-md px-4 py-4 text-[16px] font-[400] text-white uppercase leading-normal">
                  Jadilah Yang Pertama
                </div>
              </div>
            </div>
            <div className="h-auto max-w-full mt-0 sm:text-left sm:ml-8 items-center">
              <img
                src="https://emet.id/wp-content/uploads/2022/05/img-banner1.png"
                alt="banner"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://emet.id/wp-content/uploads/2022/05/img-banner2.png"
                alt="banner"
              />
            </div>
            <div>
              <div className="text-4xl md:text-3xl lg:text-4xl font-bold text-[#493352] mb-12">
                <div className="fs-3 fw-bold">Signing Order</div>
              </div>
              <div className="mb-5">
                <div className="fs-4 md:text-xl lg:text-2xl font-bold mb-8">
                  Pararel
                </div>
                <div className=" mb-10 font-light">
                  Memungkinkan penandatanganan dokumen digital oleh lebih dari
                  satu pihak secara bersamaan tanpa syarat urutan.
                </div>
              </div>
              <div>
                <div className="fs-4 md:text-xl lg:text-2xl font-bold mb-8">
                  Serial
                </div>
                <div className="font-light">
                  Memudahkan penandatanganan dokumen digital oleh para pihak
                  sesuai urutan yang telah ditentukan.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center mb-6 mt-[78px] mx-auto">
            <div className="flex flex-col sm:w-1/2 sm:pr-8">
              <div className="text-4xl md:text-3xl lg:text-4xl font-bold text-[#493352] mb-12">
                Audit Trail
              </div>
              <div className="text-[16px] sm:text-base lg:text-lg font-light">
                Audit Trail merupakan rekam jejak sebuah dokumen digital, sejak
                dibuat hingga dokumen itu selesai diproses. Audit Trail
                memungkinkan seluruh pihak untuk melihat perkembangan proses
                pembubuhan tanda tangan dan meterai elektronik pada sebuah
                dokumen.
              </div>
              <div className="text-[16px] sm:text-base lg:text-lg mb-6 font font-light">
                Setiap aksi dan aktor akan tercatat dengan jelas dalam Audit
                Trail. Tidak akan ada lagi isu transparansi dan kepercayaan
                terhadapnya.
              </div>
            </div>
            <div className="flex justify-center sm:w-1/2">
              <img
                src="https://emet.id/wp-content/uploads/2022/05/img-banner3.png"
                alt="Audit Trail"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Features;
