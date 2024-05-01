import React from "react";
import Header from "../component/Header";
import { IoSearchSharp } from "react-icons/io5";
import blog from "../assets/img/blog.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Footer from "../component/Footer";
import letter from "../assets/img/letter.png";

function Blog() {
  return (
    <div>
      <Header />
      <div className="flex flex-col w-1/2 mx-auto mt-[9rem] mb-[1.5rem]">
        <h2 className="font-bold text-5xl text-balance text-center">
          Bagaimana mengelola dokumen pekerjaan biar #LebihCepatMakinHemat
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Temukan beragam info terbaru & menarik seputar tips seputar dunia
          bisnis melalui artikel, insight, case study, e-book di MomofinGO blog.{" "}
        </p>
      </div>
      <div className="flex mx-[12rem] items-center justify-between my-[4rem]">
        <div className="flex gap-4 tex-sm font-light">
          <a href="/produktivitas" className="link2">
            Produktivitas
          </a>
          <a href="/bisnis" className="link2">
            Bisnis
          </a>
          <a href="/event" className="link2">
            Event
          </a>
          <a href="/keuangan" className="link2">
            Keuangan
          </a>
        </div>
        <div className="w-1/2">
          <form className="flex relative items-center  bg-white rounded-xl border-2 w-full px-4 py-2">
            <input
              type="text"
              placeholder="Cari Artikel"
              className=" bg-transparent focus:outline-none text-gray-800 placeholder-gray-500 flex-grow"
            />
            <button
              type="submit"
              className=" bg-blue-500 text-center absolute top-0 right-0 text-white rounded-e-xl bottom-0 py-2 px-3 "
            >
              <IoSearchSharp className="font-bold text-lg" />
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-4 px-[2rem]">
        <article className="w-full border-2">
          <a href="/blog-detail" className="group">
            <div className="relative overflow-hidden">
              <img className="w-full" src={blog} alt="" />
              <div className="absolute w-full h-full bg-[rgba(0,0,0,0.75)] flex items-center justify-center tes group-hover:opacity-100  group-hover:bottom-0 transition-opacity duration-300">
                <FaLongArrowAltRight className="font-black text-white" />
              </div>
            </div>
          </a>
          <div className="p-4">
            <h2 className="text-xl font-bold">
              Cara Membeli Meterai Online yang Resmi dan Aman
            </h2>
            <p>
              Perkembangan teknologi seperti sekarang ini memang memberikan
              banyak sekali perubahan,...
            </p>
            <span>30 April, 2024</span>
          </div>
        </article>
        <article className="w-full border-2 ">
          <a href="/blog-detail">
            <div className="overflow-hidden relative group">
              <img className="w-full" src={blog} alt="" />
              <div className="absolute w-full h-full bg-[rgba(0,0,0,0.75)] flex items-center justify-center tes group-hover:opacity-100  group-hover:bottom-0 transition-opacity duration-300">
                <FaLongArrowAltRight className="font-black text-white" />
              </div>
              <div>
                <p>
                  Mulai dari bulan Oktober tahun 2021, pemerintah sudah merilis
                  e-meterai...
                </p>
              </div>
              <div>
                <span>
                  April 27,2024
                </span>
              </div>
            </div>
          </a>
          <div className="p-4">
            <h2 className="text-xl font-bold">
              Cara Membeli Meterai Online yang Resmi dan Aman
            </h2>
            <p>
              Perkembangan teknologi seperti sekarang ini memang memberikan
              banyak sekali perubahan,...
            </p>
            <span>30 April, 2024</span>
          </div>
        </article>
      </div>
      <div className="flex justify-center text-sm mx-auto gap-2 my-[2rem]">
        <button className="px-5 py-3 bg-[#7C7CFC] text-white font-bold rounded-md">
          Load More
        </button>
      </div>
      <div className="flex items-center justify-evenly p-[3rem] bg-[#7C7CFC] w-full">
        <div className="xl:w-1/2 w-full p-3 ">
          <h2 className="font-bold text-3xl text-white ">
            Stay updated with momofin by signing up for our newsletter
          </h2>
          <p className="text-white">
            By subscribing to our newsletter, you are allowing Momofin to send
            marketing emails. You may opt out at any time. View Momofin’s{" "}
            <a href="/" className="link">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="">
          <div className="xl:w-[300px] w-full">
            <img src={letter} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
