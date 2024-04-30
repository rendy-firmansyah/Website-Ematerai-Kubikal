import React from "react";
import Header from "../component/Header";
import { IoSearchSharp } from "react-icons/io5";
import blog from "../assets/img/blog.png";

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
        <div className="flex gap-4 tex-sm font-light text-[#8F9199]">
          <a href="/kategori" className="text-[#8F9199]">
            Produktivitas
          </a>
          <a href="o" className="text-[#8F9199]">
            Bisnis
          </a>
          <a href="o" className="text-[#8F9199]">
            Event
          </a>
          <a href="o" className="text-[#8F9199]">
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
      <article>
        <div className="bg-white border-2 w-1/3 mx-[2rem]">
          <div className="atas hover:bg-black">
            <img className="w-full" src={blog} alt="" />
          </div>
          <div className="bawah">
            <div>
              <div>
                <h2>pppp</h2>
              </div>
              <div>
                <p>
                  Mulai dari bulan Oktober tahun 2021, pemerintah sudah merilis
                  e-meterai...
                </p>
              </div>
              <div>
                <span>April 27,2024</span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div>okokokko</div>
    </div>
  );
}

export default Blog;
