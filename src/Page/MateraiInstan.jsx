import React from "react";
import Header from "../component/NavBar";
import Footer from "../component/Footer";
import peruri from "../assets/img/Peruri.png";
import bg from "../assets/img/bg-emet.png";
import { FiArrowRightCircle } from "react-icons/fi";
import emet1 from "../assets/img/UploadFile.png";
import emet3 from "../assets/img/CheckMark.png";
import emet2 from "../assets/img/TTDEMET.png";
import phone from "../assets/img/phone2.png";
import gplay from "../assets/img/google play.png";
import apple from "../assets/img/apple store.png";
import shield from "../assets/img/Shield-Done.svg";
import activity from "../assets/img/Activity.svg";
import scan from "../assets/img/Scan.svg";
import { Link } from "react-router-dom";
import star from "../assets/img/full star.svg";
import Carousel from "../component/Carousel";

const MateraiInstan = () => {
  return (
    <div className="xl:mt-[5.4rem] mt-[5rem]">
      <Header />
      <div
        className="bg-cover bg-center xl:h-screen xl:p-[7rem] p-2 mb-[3rem] xl:mb-0"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col items-center gap-4 pt-[5rem]">
          <h2 className=" text-center font-bold md:text-4xl text-xl">
            Beli E-Meterai Online Resmi Untuk Dokumen Kamu. Tanpa Daftar, Sat
            Set Langsung Jadi! #TempelEMETaja
          </h2>
          <div className="flex gap-2 xl:gap-4 items-center justify-center px-2">
            <p className="text-sm md:text-lg">
              DIGITAL PRODUCT ARE PROVIDED BY
            </p>
            <img className="mb-3" src={peruri} width={90} alt="" />
          </div>
          <div className="bg-gradient-to-r  from-[#d3e0f4] to-[#7C7CFC] w-[90%] md:w-[60%] xl:w-1/3 mx-auto shadow-2xl rounded-full p-2 z-10 relative xl:my-[3rem]">
            <Link className="no-underline" to="/upload-emetinstan">
              <button className="w-full font-bold text-sm md:text-xl xl:text-base text-white flex items-center justify-between rounded-full p-6 bg-gradient-to-r from-[#7C7CFC] to-[#5D5DFC]">
                Mulai Gunakan E-Meterai Instan{" "}
                <span className="xl:text-3xl text-xl">
                  <FiArrowRightCircle />
                </span>{" "}
              </button>
            </Link>
          </div>
          <p className="text-center text-sm md:text-xl xl:w-4/5 px-2 xl:px-0">
            Kubikal menawarkan kemudahan pembubuhan meterai elektronik
            (e-meterai) untuk semua keperluan dokumen administrasi Kamu. Cukup
            unggah dokumen digitalmu, tempelkan e-meterai sesuai kebutuhan.
            Tidak perlu daftar, dokumenmu sudah bermeterai sah dan siap
            digunakan.
            <a href="c" className="link">
              #SatSetLangsungJadi
            </a>
          </p>
        </div>
      </div>

      <div className=" xl:p-8">
        <h2 className="text-center font-bold md:text-4xl text-xl xl:mb-8 px-3 mb-10">
          3 Langkah Instan Pembubuhan e-Meterai
        </h2>
        <div className="px-[2rem] flex flex-col md:flex-row xl:mx-[6rem] justify-between gap-[1rem] items-center">
          <div className="flex flex-col items-center xl:gap-[2rem] w-full ">
            <img
              className="md:w-full w-1/2 xl:h-[200px] mb-[48px] xl:object-contain "
              src={emet1}
              alt=""
            />
            <div className="flex flex-col md:flex-row gap-[1rem] md:min-h-[300px]">
              <div>
                <span className="bg-[#001D3D] w-[45px] h-[45px] xl:w-[45px] xl:h-[45px] md:w-[30px] md:h-[30px] flex justify-center items-center rounded-md text-white">
                  1
                </span>
              </div>
              <div className="flex flex-col">
                <h5 className="text-[#404040] xl:text-2xl text-xl font-bold">
                  Unggah Dokumen
                </h5>
                <p className="text-sm sm:text-lg text-[#8F9199]">
                  Unggah dokumen digital dalam format .PDF yang akan dibubuhi
                  e-Meterai
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col xl:gap-[2rem] w-full">
            <img
              className="xl:w-full w-1/2 md:w-3/4 text-center md:h-[195px] xl:h-[200px] mb-[48px] xl:object-contain "
              src={emet2}
              alt=""
            />
            <div className="flex flex-col md:flex-row gap-[1rem] md:min-h-[300px]">
              <div>
                <span className="bg-[#001D3D] w-[45px] h-[45px] xl:w-[45px] xl:h-[45px] md:w-[30px] md:h-[30px] flex justify-center items-center rounded-md text-white">
                  2
                </span>
              </div>
              <div className="flex flex-col">
                <h5 className="text-[#404040] xl:text-2xl text-xl font-bold">
                  Tempel e-Meterai & Bayar
                </h5>
                <p className="sm:text-lg text-sm text-[#8F9199]">
                  Geser dan Letakkan e-Meterai pada tempatnya, lalu bayar
                  e-meteraimu sesuai jumlah tagihan
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col xl:gap-[2rem] w-full">
            <img
              className="md:w-[400px] w-4/5 md:h-[200px] mb-[48px] xl:object-contain "
              src={emet3}
              alt=""
            />
            <div className="flex flex-col md:flex-row gap-[1rem] md:min-h-[300px]">
              <div>
                <span className="bg-[#001D3D] w-[45px] h-[45px] xl:w-[45px] xl:h-[45px] md:w-[30px] md:h-[30px] flex justify-center items-center rounded-md text-white">
                  3
                </span>
              </div>
              <div className="flex flex-col">
                <h5 className="text-[#404040] md:text-2xl text-xl font-bold">
                  Selesai!
                </h5>
                <p className=" sm:text-lg text-sm text-[#8F9199]">
                  Setelah pembayaran sukses, e-meterai akan otomatis diproses.
                  Dokumen akan dikirim ke email anda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7C7CFC] w-full xl:w-3/4 mx-auto relative p-2 xl:p-8 flex flex-col xl:flex-row items-center justify-center xl:rounded-xl">
        <div className="xl:w-1/2 w-full">
          <img
            src={phone}
            className="md:w-[437px] w-[370px] md:absolute h-[599px] md:h-[707px] bg-transparent md:-top-[5rem] xl:-top-[8rem] xl:-left-[6rem] md:-left-[1rem] max-w-full"
            alt=""
          />
        </div>
        <div className="flex items-end justify-end">
          <div className="md:w-1/2 xl:w-[90%] flex flex-col gap-4 text-white p-[1rem]">
            <p>KUBIKAL E-MATERAI MOBILE APPS</p>
            <h2>
              Meterai Elektronik & Tanda Tangan Digital Lebih Lengkap, Lebih
              Hemat, Tanpa Biaya Transaksi
            </h2>
            <p>
              Mau pasang meterai elektronik (e-meterai) & tanda tangan sekaligus
              dalam satu dokumen online Anda? Pakai aplikasi kubikal e-materai
              fitur lebih lengkap, biaya lebih hemat, proses lebih mudah & lebih
              cepat dari bikin mie instan. Download Aplikasinya Sekarang!
            </p>
            <div className="flex gap-2">
              <a href="https://play.google.com/store/search?q=emet+e-meterai&c=apps">
                <img src={gplay} width={200} alt="" />
              </a>
              <a href="https://apps.apple.com/id/app/emet-meterai-tanda-tangan/id1604423824">
                <img src={apple} width={180} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-6 md:mt-[8rem] xl:mt-[15rem]">
        <h2 className="text-center text-xl px-2 md:text-4xl font-semibold mb-3">
          Mulai <span className="text-[#0068D6]">#TempelEMateraiaja</span> Untuk
          Semua Dokumen Kamu
        </h2>
        <p className="text-center mb-[4rem] text-sm md:text-lg text-[#8F9199] xl:w-[70%] px-2">
          Dari surat-menyurat hingga dokumen berlembar-lembar yang menghabiskan
          banyak waktu & biaya, Kubikal mengubah cara kamu tanda tangan, bubuh
          meterai & kelola dokumen dalam satu genggaman secara online kapan aja
          & dimana aja.
        </p>
        <div className="flex flex-col md:flex-row items-center xl:w-3/4 px-4">
          <div className="flex flex-col md:flex-row items-start gap-2">
            <img src={activity} alt="" />
            <div className="w-full">
              <h3 className="font-bold text-lg">Mudah & Instan</h3>
              <p className=" text-[#8F9199]">
                Proses pembelian & pembubuhan e-meterai pasti lebih hemat &
                lebih cepat dari bikin mie instan.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-2">
            <img src={shield} alt="" />
            <div className="w-full">
              <h3 className="font-bold text-lg">
                Aman & Terjamin Kerahasiaannya
              </h3>
              <p className=" text-[#8F9199]">
                Penggunaan meterai online di eMET, data kamu dijamin aman &
                terjaga kerahasiaannya
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-2">
            <img src={scan} alt="" />
            <div className="w-full">
              <h3 className="font-bold text-lg">Sah Secara Hukum</h3>
              <p className=" text-[#8F9199]">
                e-Meterai di eMET 100% sah secara hukum tersertifikat PSrE &
                Mitra Resmi PERURI
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full mt-8 bg-gradient-to-br from-indigo-600 flex justify-center gap-4 items-center flex-col via-indigo-500 to-indigo-800 py-[63px]">
        <h2 className="font-semibold text-xl md:text-3xl text-center text-white xl:w-3/4">
          50K+ Orang Sudah{" "}
          <span className="text-[#C4AFF0]">#TempelEMETaja</span> dan Merasakan
          Kemudahan Pembubuhan e-Meterai
        </h2>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-6">
          <div className="flex items-center justify-center">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <span className="font-bold text-2xl ml-2 text-white">4.6</span>
          </div>
          <div className="flex gap-2">
            <a href="https://play.google.com/store/search?q=emet+e-meterai&c=apps">
              <img src={gplay} width={150} alt="" />
            </a>
            <a href="https://apps.apple.com/id/app/emet-meterai-tanda-tangan/id1604423824">
              <img src={apple} width={138} alt="" />
            </a>
          </div>
        </div>
        <Carousel />

        {/* <Footer/>  */}
      </div>

      <Footer />
    </div>
  );
};

export default MateraiInstan;
