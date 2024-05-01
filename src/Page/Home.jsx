import React from "react";
import Gplay from "../assets/img/google play.png";
import Apple from "../assets/img/apple store.png";
import girl from "../assets/img/beranda.png";
import peruri from "../assets/img/Peruri.png";
import phone from "../assets/img/phone.png";
import privacy from "../assets/img/privacy.png";
import keamanan from "../assets/img/keamanan.png";
import Header from "../component/Header";
import { Accordion } from "react-bootstrap";
import blob from "../assets/img/blob.svg";
import upload from "../assets/img/upload.png";
import testi from "../assets/img/testi.png";
import dokumen from "../assets/img/dokumen.png";
import enterprise from "../assets/img/emet.png";

import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="flex flex-col-reverse lg:flex-row justify-between items-center my-[7rem] px-[2rem] md:px-[4rem] lg:px-[6rem]">
        <div className="kiri w-full xl:w-[60%] mt-[5rem]">
          <h1 className="font-extrabold text-[#001D3D] text-2xl md:text-[46px] mb-[25px] md:leading-[68px] capitalize">
            e-Materai & Tanda Tangan Elektronik Pakai #EMETPastiBeres
          </h1>
          <p className="text-sm text-[#8F9199] font-medium mt-[0.2rem] mb-[3rem]">
            Pembubuhan e-meterai & tanda tangan digital mitra resmi Peruri,
            cukup dengan satu aplikasi eMET yang sangat mudah, aman & pasti
            beres untuk semua keperluan dokumen administrasi Anda.
          </p>
          <h3 className="text-base font-bold uppercase mt-4 mb-[2rem]">
            telah hadir di berbagai platform
          </h3>
          <div className="flex md:flex-row flex-col gap-2 pb-[5rem]">
            <img width={180} height={53} src={Gplay} alt="" />
            <img width={180} height={53} src={Apple} alt="" />
          </div>
          <p className="font-light mb-[1rem] text-xs">
            DIGITAL PRODUCT ARE PROVIDED BY PERURI
          </p>
          <img width={180} height={46} src={peruri} alt="" />
        </div>
        <div className="kannan w-full xl:w-1/2 xl:ml-[4rem] xl:mb-[8rem]">
          <img src={girl} alt="" />
        </div>
      </section>
      
      <section className="w-full p-[3rem] bg-[#7C7CFC] flex flex-col xl:flex-row justify-center items-center">
        <div className="mx-[6rem] w-full h-full ">
          <img className="w-full" src={phone} width={570} height={700} alt="" />
        </div>
        <div className="w-full xl:mr-[6rem] mb-[4rem]">
          <h1 className="text-white font-bold md:text-[46px] capitalize text-2xl md:leading-[68px] mb-8">
            e-Meterai & e-Signature Terpercaya dari PERURI
          </h1>
          <p className="text-white font-medium text-lg">
            Melalui aplikasi EMET, dokumen digital anda disahkan dengan
            menggunakan Meterai Elektronik & Tanda Tangan Elektronik resmi dari
            Perum Percetakan Uang Republik Indonesia (PERURI)
          </p>
        </div>
      </section>

      <section className="mt-[5rem] xl:mt-[10rem] mb-[8rem] w-full px-[2.5rem] xl:px-[9rem] flex flex-col xl:flex-row justify-between">
        <div className="w-full xl:w-1/2">
          <h2 className="font-bold text-base text-[#7c7cfc] mb-10">
            APA ITU E-MATERAI?
          </h2>
          <p className="text-[#1A202C] font-semibold text-lg break-normal">
            e-Meterai yang merupakan pajak atas dokumen elektronik berguna untuk
            menjadikan suatu dokumen elektronik dapat digunakan sebagai alat
            bukti di pengadilan.
          </p>
        </div>
        <div className="w-full xl:w-1/2 xl:ml-10 flex gap-[2rem] flex-col mt-[4rem]">
          <p className="text-sm text-[#8F9199]">
            Meterai elektronik (e-Meterai) adalah meterai yang digunakan untuk
            dokumen elektronik. Undang Undang No. 11 Tahun 2008 (UU ITE) Pasal 5
            ayat (1) menyebutkan bahwa dokumen elektronik merupakan alat bukti
            hukum yang sah. Hal ini menjadikan kedudukan dokumen elektronik
            disamakan dengan dokumen kertas. Hal tersebut membuat perlunya equal
            treatment antara dokumen kertas dengan elektronik.
          </p>
          <p className="text-sm text-[#8F9199]">
            {" "}
            Dalam kegiatan usaha, transaksi elektronik semakin berkembang,
            sehingga kontrak dapat dilakukan secara elektronik melalui jaringan
            internet. Oleh karenanya, diperlukan perluasan definisi dokumen yang
            tidak hanya berupa kertas. Ekstensifikasi Bea Meterai atas dokumen
            elektronik sangat mendesak dilakukan agar potensinya dapat
            dimaksimalkan dan memberikan peningkatan penerimaan bagi Pemerintah
            (Undang Undang Nomor 10 tahun 2020).
          </p>
          <p className="text-sm text-[#8F9199]">
            Dokumen sebagaimana dimaksud dalam Pasal 3 dikenai Bea Meterai
            dengan tarif tetap sebesar Rp10.000,00 (sepuluh ribu rupiah) yang
            berlaku mulai 1 Januari 2021.
          </p>
        </div>
      </section>

      <section className=" px-[2rem] xl:p-[80px] flex flex-col xl:flex-row justify-evenly items-center">
        <div className="w-full xl:w-1/2">
          <img
            className="object-contain mx-auto"
            width={400}
            src={privacy}
            alt=""
          />
        </div>
        <div className="w-full xl:w-1/2 mt-6 flex flex-col gap-4 md:gap-[4rem] text-lg">
          <h3 className="font-bold text-2xl capitalize">aman & terjamin</h3>
          <p className="text-base font-normal">
            Aplikasi EMET menggunakan sistem otentikasi berlapis untuk
            memastikan pihak pembubuh e-Meterai dan e-Signature dilakukan oleh
            pihak yang benar dan tidak dapat diwakilkan oleh orang lain
          </p>
          <h3 className="font-bold capitalize text-2xl">Sah secara Hukum</h3>
          <p className="text-base font-normal">
            Produk meterai elektronik dan tanda tangan elektronik di aplikasi
            EMET disediakan oleh PERURI. Sehingga seluruh surat berharga dan
            dokumen digital yang dibubuhi menjadi sah secara hukum dan
            nirsangkal.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden my-[3rem]">
        <h1 className="text-center text-2xl px-[.5rem] xl:text-4xl font-bold">
          Dirancang untuk Kemudahan dan Keamanan
        </h1>
        <div className="flex flex-col mx-auto xl:flex-row xl:ml-[8rem] px-[2rem] justify-evenly mt-[1rem] xl:mt-[7rem]">
          <div className="xl:mr-[4rem] w-full xl:w-[40%]">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Tandatangani Sendiri atau Minta Pihak Lain
                </Accordion.Header>
                <Accordion.Body>
                  Menandatangani sendiri dokumen digital, atau meminta pihak
                  lain untuk menyetujui dokumen yang sama, tidak pernah semudah
                  ini.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Simpan & Kelola Dokumen secara Lebih Aman
                </Accordion.Header>
                <Accordion.Body>
                  Kendali penuh pada dokumen digital anda. Simpan di cloud,
                  unduh kapan pun, atau bagikan dokumen melalui beragam aplikasi
                  lainnya.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Pantau Status Dokumen dengan Audit Trail
                </Accordion.Header>
                <Accordion.Body>
                  Bebaskan pikiran dari keraguan. Seluruh aktifitas yang terjadi
                  pada dokumen dan para pihak yang terlibat akan tercatat dengan
                  rinci
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="mb-3 w-full mt-[1rem] xl:w-1/2 flex justify-center">
            <img width={600} src={keamanan} alt="" />
            <img
              className="align-middle absolute -rotate-180 -z-40 -top-[10rem] left-[45rem] opacity-20 "
              width={1000}
              src={blob}
              alt=""
            />
          </div>
        </div>
      </section>
      
      <section>
        <h1 className=" text-center text-xl px-[1rem] md:text-3xl font-bold my-[6rem] ">
          3 Langkah Pembubuhan e-Meterai & e-Signature
        </h1>
        <div className="xl:p-3 px-[2rem] flex flex-col xl:flex-row xl:mx-[6rem] justify-between gap-[1rem] items-center">
          <div className="flex flex-col xl:gap-[2rem] ">
            <img
              className="w-full xl:h-[200px] mb-[48px] xl:object-contain "
              src={upload}
              alt=""
            />
            <div className="flex flex-col xl:flex-row gap-[2rem]">
              <div>
                <span className="bg-[#001D3D] w-[45px] h-[45px] flex justify-center items-center rounded-md text-white">
                  1
                </span>
              </div>
              <div className="flex flex-col">
                <h5 className="text-[#404040] sm:text-2xl text-lg font-bold">
                  Unggah Dokumen
                </h5>
                <p className="text-sm sm:text-xl text-[#8F9199]">
                  Unggah dokumen digital dalam format .PDF yang akan dibubuhi
                  e-Meterai dan e-Signature dari perangkat ponsel Anda melalui
                  aplikasi eMET
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:gap-[2rem]">
            <img
              className="w-full xl:h-[200px] mb-[48px] xl:object-contain "
              src={testi}
              alt=""
            />
            <div className="flex flex-col xl:flex-row gap-[2rem]">
              <div>
                <span className="bg-[#001D3D] w-[45px] h-[45px] flex justify-center items-center rounded-md text-white">
                  2
                </span>
              </div>
              <div className="flex flex-col">
                <h5 className="text-[#404040] sm:text-2xl text-lg font-bold">
                  Tentukan Para Pihak
                </h5>
                <p className="sm:text-xl text-sm text-[#8F9199]">
                  Anda bisa menambahkan para pihak yang terlibat untuk
                  membubuhkan e-Meterai & e-Signature melalui fitur Kontak
                  dengan data yang telah disimpan.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col xl:gap-[2rem]">
            <img
              className="w-[400px] xl:w-full xl:h-[200px] mb-[48px] xl:object-contain "
              src={dokumen}
              alt=""
            />
            <div className="flex flex-col xl:flex-row gap-[2rem] ">
              <div>
                <span className="bg-[#001D3D] w-[45px] h-[45px] flex justify-center items-center rounded-md text-white">
                  3
                </span>
              </div>
              <div className="flex flex-col">
                <h5 className="text-[#404040] sm:text-2xl text-lg font-bold">
                  Proses Dokumen
                </h5>
                <p className=" sm:text-xl text-sm text-[#8F9199]">
                  Tentukan spot dalam dokumen di mana e-Meterai akan dibubuhkan.
                  Lalu kirim permintaan kepada pihak lain hanya dengan satu kali
                  klik saja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col xl:flex-row justify-between xl:relative xl:h-[450px] bg-[#7C7CFC] xl:mx-[8rem] xl:px-6 mt-[10rem] xl:rounded-[21px]">
        <div className="w-full xl:w-1/2">
          <img
            className="xl:absolute xl:-ml-[140px] mt-11 w-full xl:w-[650px]"
            src={enterprise}
            alt=""
          />
        </div>
        <div className="w-full xl:w-1/2 xl:pt-[40px] px-[2rem] md:px-[4rem] xl:px-0 pb-4">
          <p className="mb-[1.5rem] font-bold text-base text-white">
            ENTERPRISE
          </p>
          <p className="font-semibold text-xl xl:text-2xl text-white mb-[1.5rem]">
            Meterai Digital & Tandatangan Digital secara otomatis akan membantu
            Perusahaan anda lebih efisien
          </p>
          <p className="font-normal text-base text-white mb-[1.5rem]">
            Dari surat menyurat harian hingga dokumen berlembar-lembar, eMET
            mengubah cara Anda menandatangani, membubuhkan meterai, dan
            mengelola dokumen dalam perusahaan anda. Dirancang dengan berbagai
            fitur kelas Enterprise memudahkan segala urusan bisnis Anda.
          </p>
          <button className="text-base uppercase text-center inline-block py-[16px] px-[18px] bg-[#5050F5] font-bold text-white rounded-[.25rem]">
            pelajari lebih lanjut
          </button>
        </div>
      </section>

      <section className="flex flex-col flex-wrap gap-4 items-center justify-center w-full bg-[#5A5AFF] mt-[5rem] xl:p-[80px] py-[80px]  ">
        <p className="font-medium text-center text-white text-2xl">
          Rasakan kemudahan pembubuhan tanda tangan dan meterai elektronik
          terintegrasi dalam satu aplikasi.
        </p>
        <div className="flex gap-2">
          <img width={180} height={53} src={Gplay} alt="" />
          <img width={180} height={53} src={Apple} alt="" />
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
