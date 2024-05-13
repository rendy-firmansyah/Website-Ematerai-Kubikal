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
            <div className="flex flex-col  col-lg-6">
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
                <div className="bg-[#7C7CFC] active:scale-90 transition duration-400 transform hover:shadow-xl rounded-[6px] shadow-md px-4 py-4 text-[16px] font-[400] text-white uppercase leading-normal">
                  Jadilah Yang Pertama
                </div>
              </div>
            </div>
            <div className=" max-w-full mt-0 sm:text-left sm:ml-8 ">
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
          <div className="py-5 px-10 sm:px-4 md:px-10 lg:px-6 mt-8 mb-8 mx-auto sm:mx-16">
            <div className="container mx-auto py-[10vh]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col space-y-6 col-lg-6">
                  <img
                    src="https://emet.id/wp-content/uploads/2022/05/img-banner5.png"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-4xl md:text-3xl lg:text-4xl font-bold text-[#493352] mb-12">
                    <div className="font-bold">
                      E-Meterai & E-Signature Request
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="text-lg sm:text-base lg:text-lg mb-10 font-light">
                      Meminta pihak lain untuk ikut menandatangani sebuah
                      dokumen elektronik tidak pernah semudah ini. Cukup
                      tambahkan pihak-pihak yang terlibat, dan mereka akan
                      terhubung ke satu dokumen yang sama. Anda bisa menentukan
                      di bagian mana yang perlu mereka tandatangani.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 px-10 sm:px-4 md:px-10 lg:px-6 mt-8 mb-8 mx-auto sm:mx-16">
            <div className="container mx-auto flex flex-col sm:flex-row items-center">
              <div className="flex flex-col  sm:w-1/2 pr-8">
                <div className="text-4xl md:text-3xl lg:text-4xl font-bold text-[#493352] mb-12">
                  Balance Top Up
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-8">
                  Pilih Paket sesuai Kebutuhan
                </div>
                <div className="text-[16px] sm:text-base lg:text-lg font-light mb-8">
                  Semudah membeli yang fisik, anda bisa mendapatkan meterai
                  elektronik melalui aplikasi EMET. Beragam paket tandatangan
                  dan meterai elektronik tersedia. Simpan sekarang, dan gunakan
                  kapan pun dibutuhkan.
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-8">
                  Pembayaran yang Mudah
                </div>
                <div className="text-[16px] sm:text-base lg:text-lg font-light">
                  Tersedia berbagai cara pembayaran yang mudah dan praktis,
                  mulai dari transfer ke rekening bank, atau menggunakan
                  aplikasi dompet digital favorit anda. Semuanya dilakukan hanya
                  dengan sentuhan jari.
                </div>
              </div>
              <div className="flex justify-center sm:w-1/2">
                <img
                  src="https://emet.id/wp-content/uploads/2022/05/img-banner4.png"
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className="bg-[#001D3D] text-white py-20">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-[30px] font-normal text-center leading-10">
                Rasakan kemudahan pembubuhan tanda tangan dan meterai elektronik
                terintegrasi dalam satu aplikasi.
              </h1>
              <div className="flex justify-center mt-8">
                <button className="bg-[#7C7CFC] hover:bg-[#5656ed] text-white font-medium py-2 px-4 rounded">
                  JADI YANG PERTAMA
                </button>
              </div>
            </div>
          </div>

      <Footer />
    </div>
  );
};

export default Features;
