import React from "react";
import Header from "../component/Header";
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
import { Avatar } from "flowbite-react";
import Slider from "react-slick";
import Carousel from "../component/Carousel";

const MateraiInstan = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const items = [
    {
      name: "Hannan Amar",
      date: "Mei 6, 2024",
      description:
        "e-meterai memudah segala urusan, program PPPK 2022 tenaga kesehatan & tenaga guru, juga menggunakan e-meterai sebagai syarat seleksi PPPK 2022 tersebut."
    },
    {
      name: "Hannan Amar",
      date: "Mei 6, 2024",
      description:
        "e-meterai memudah segala urusan, program PPPK 2022 tenaga kesehatan & tenaga guru, juga menggunakan e-meterai sebagai syarat seleksi PPPK 2022 tersebut."
    },
    {
      name: "Hannan Amar",
      date: "Mei 6, 2024",
      description:
        "e-meterai memudah segala urusan, program PPPK 2022 tenaga kesehatan & tenaga guru, juga menggunakan e-meterai sebagai syarat seleksi PPPK 2022 tersebut."
    },
    // Add more data objects for each item as needed
  ];
  
  return (
    <div className="mt-[5.4rem]">
      <Header />
      <div
        className="bg-cover bg-center h-screen p-[7rem]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" flex flex-col items-center gap-4">
          <h2 className=" text-center font-bold text-4xl">
            Beli E-Meterai Online Resmi Untuk Dokumen Kamu. Tanpa Daftar, Sat
            Set Langsung Jadi! #TempelEMETaja
          </h2>
          <div className="flex gap-4 items-center justify-center">
            <p>DIGITAL PRODUCT ARE PROVIDED BY</p>
            <img className="mb-3" src={peruri} width={90} alt="" />
          </div>
          <div className="bg-gradient-to-r  from-[#d3e0f4] to-[#7C7CFC] w-1/3 mx-auto shadow-2xl rounded-full p-2 z-10 relative my-[3rem]">
            <Link className="no-underline" to="/upload-emetinstan">
              <button className="w-full font-bold text-white flex items-center justify-between rounded-full p-6 bg-gradient-to-r from-[#7C7CFC] to-[#5D5DFC]">
                Mulai Gunakan E-Meterai Instan{" "}
                <span className="text-3xl">
                  <FiArrowRightCircle />
                </span>{" "}
              </button>
            </Link>
          </div>
          <p className="text-center text-xl w-4/5">
            Kubikal menawarkan kemudahan pembubuhan meterai elektronik (e-meterai)
            untuk semua keperluan dokumen administrasi Kamu. Cukup unggah
            dokumen digitalmu, tempelkan e-meterai sesuai kebutuhan. Tidak perlu
            daftar, dokumenmu sudah bermeterai sah dan siap digunakan.
            <a href="c" className="link">
              #SatSetLangsungJadi
            </a>
          </p>
        </div>
      </div>

      <div className=" p-8">
        <h2 className="text-center font-bold text-4xl mb-8">
          3 Langkah Instan Pembubuhan e-Meterai
        </h2>
        <div className="px-[2rem] flex flex-col xl:flex-row xl:mx-[6rem] justify-between gap-[1rem] items-center">
          <div className="flex flex-col items-center xl:gap-[2rem] w-full ">
            <img
              className="w-full xl:h-[200px] mb-[48px] xl:object-contain "
              src={emet1}
              alt=""
            />
            <div className="flex flex-col xl:flex-row gap-[1rem]">
              <div>
                <span className="bg-[#001D3D] w-[45px] h-[45px] flex justify-center items-center rounded-md text-white">
                  1
                </span>
              </div>
              <div className="flex flex-col">
                <h5 className="text-[#404040] sm:text-2xl text-lg font-bold">
                  Unggah Dokumen
                </h5>
                <p className="text-sm sm:text-lg text-[#8F9199]">
                  Unggah dokumen digital dalam format .PDF yang akan dibubuhi
                  e-Meterai
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:gap-[2rem] w-full">
            <img
              className="w-full xl:h-[200px] mb-[48px] xl:object-contain "
              src={emet2}
              alt=""
            />
            <div className="flex flex-col xl:flex-row gap-[1rem]">
              <div>
                <span className="bg-[#001D3D] w-[45px] h-[45px] flex justify-center items-center rounded-md text-white">
                  2
                </span>
              </div>
              <div className="flex flex-col">
                <h5 className="text-[#404040] sm:text-2xl text-lg font-bold">
                  Tempel e-Meterai & Bayar
                </h5>
                <p className="sm:text-lg text-sm text-[#8F9199]">
                  Geser dan Letakkan e-Meterai pada tempatnya, lalu bayar
                  e-meteraimu sesuai jumlah tagihan
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:gap-[2rem] w-full">
            <img
              className="w-[400px] xl:w-full xl:h-[200px] mb-[48px] xl:object-contain "
              src={emet3}
              alt=""
            />
            <div className="flex flex-col xl:flex-row gap-[1rem] ">
              <div>
                <span className="bg-[#001D3D] w-[45px] h-[45px] flex justify-center items-center rounded-md text-white">
                  3
                </span>
              </div>
              <div className="flex flex-col">
                <h5 className="text-[#404040] sm:text-2xl text-lg font-bold">
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
      <div className="bg-[#7C7CFC] w-3/4 mx-auto relative p-8 flex items-center justify-center rounded-xl my-[8rem]">
        <div className="w-1/2">
          <img
            src={phone}
            width={437}
            className="absolute h-[707px] bg-transparent -top-[8rem] -left-[6rem] max-w-full"
            alt=""
          />
        </div>
        <div className="w-full flex flex-col gap-4 text-white p-[1rem]">
          <p>KUBIKAL E-MATERAI MOBILE APPS</p>
          <h2>
            Meterai Elektronik & Tanda Tangan Digital Lebih Lengkap, Lebih
            Hemat, Tanpa Biaya Transaksi
          </h2>
          <p>
            Mau pasang meterai elektronik (e-meterai) & tanda tangan sekaligus
            dalam satu dokumen online Anda? Pakai aplikasi kubikal e-materai fitur lebih
            lengkap, biaya lebih hemat, proses lebih mudah & lebih cepat dari
            bikin mie instan. Download Aplikasinya Sekarang!
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

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-4xl font-semibold mb-3">
          Mulai <span className="text-[#0068D6]">#TempelEMateraiaja</span> Untuk
          Semua Dokumen Kamu
        </h2>
        <p className="text-center mb-[4rem] text-lg text-[#8F9199] w-[70%]">
          Dari surat-menyurat hingga dokumen berlembar-lembar yang menghabiskan
          banyak waktu & biaya, Kubikal mengubah cara kamu tanda tangan, bubuh
          meterai & kelola dokumen dalam satu genggaman secara online kapan aja
          & dimana aja.
        </p>
        <div className="flex items-center w-3/4">
          <div className="flex items-start gap-2">
            <img src={activity} alt="" />
            <div className="w-full">
              <h3 className="font-bold text-lg">Mudah & Instan</h3>
              <p className=" text-[#8F9199]">
                Proses pembelian & pembubuhan e-meterai pasti lebih hemat &
                lebih cepat dari bikin mie instan.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
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
          <div className="flex items-start gap-2">
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
        <h2 className="font-semibold text-3xl text-center text-white w-3/4">
          50K+ Orang Sudah{" "}
          <span className="text-[#C4AFF0]">#TempelEMETaja</span> dan Merasakan
          Kemudahan Pembubuhan e-Meterai
        </h2>
        <div className="flex justify-center items-center gap-6">
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
        <Carousel/>

        {/* <Footer/>  */}
      </div>

      <Footer />
    </div>
  );
};

export default MateraiInstan;
