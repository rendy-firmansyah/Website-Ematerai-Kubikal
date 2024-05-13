import React from "react";
import Header from "../component/Header";
import emet5 from "../assets/img/emet5.png";
import emet10 from "../assets/img/emet10.png";
import emet20 from "../assets/img/emet20.png";
import star from "../assets/img/star.svg";
import esgn10 from "../assets/img/esgn10.png";
import esgn20 from "../assets/img/esgn20.png";
import esgn30 from "../assets/img/esgn30.png";
import bundle10 from "../assets/img/bundle10.png";
import bundle5 from "../assets/img/bundle5.png";
import bundle20 from "../assets/img/bundle20.png";
import Footer from "../component/Footer";

const emets = [
  { image: emet5, name: "EMET 5", price: "Rp60,000" },
  { image: emet10, name: "EMET 10", price: "Rp100,000" },
  { image: emet20, name: "EMET 20", price: "Rp180,000" },
];
const esgn = [
  { image: esgn10, name: "ESGN 10", price: "Rp33,000" },
  { image: esgn20, name: "ESGN 20", price: "Rp66,000" },
  { image: esgn30, name: "ESGN 30", price: "Rp99,000" },
];

const bundle = [
  { image: bundle5, name: "BUNDLING 5", price: "Rp33,000" },
  { image: bundle10, name: "BUNDLING 10", price: "Rp66,000" },
  { image: bundle20, name: "BUNDLING 20", price: "Rp99,000" },
];

function BeliSaldo() {
  return (
    <div>
      <Header />
      <div className="xl:mx-[12rem] xl:p-[10px] px-2 ">
        <div className="mt-[7rem] bg-[#FFE7C4] p-2 font-medium rounded-[10px] mb-4">
          <h6 className="text-[#8F9199] text-left pl-2 text-[16px] xl:text-sm">
            Info: Pembelian saldo EMET (meterai elektronik) bisa dilakukan di
            aplikasi eMET, tersedia di{" "}
            <a className="link" href="https://play.google.com/store/search?q=emet+e-meterai&c=apps">
              Google Playstore
            </a>{" "}
            &{" "}
            <a className="link" href="https://apps.apple.com/id/app/emet-meterai-tanda-tangan/id1604423824">
              Apple App Store
            </a>
            . Gunakan juga e-Meterai Instan untuk pembubuhan dokumen tanpa
            daftar!
          </h6>
        </div>
        <h4 className="text-[#8F9199] mb-[.5rem]">E - MATERAI</h4>

        <section className="flex flex-wrap md:flex-nowrap md:justify-between md:items-center mb-[3rem]">
          {emets.map((emet, index) => (
            <div key={index} className="flex flex-col items-start gap-3 w-1/2 md:w-1/3 mb-[3rem]">
              <img className="w-[178px] md:w-[250px] xl:w-[300px]" src={emet.image} alt="" />
              <div>
                <span className="text-base font-semibold">{emet.name}</span>
                <img src={star} alt="" />
                <span>{emet.price}</span>
              </div>
              <a
                href="l"
                className="no-underline rounded-[6px] text-white text-sm px-4 py-2 bg-[#7C7CFC]"
              >
                Beli Sekarang
              </a>
            </div>
          ))}
        </section>
        <h4 className="text-[#8F9199] mb-[.5rem]">ESGN</h4>

        <section className="flex flex-wrap justify-between items-center mb-[3rem]">
          {esgn.map((esgn, index) => (
            <div key={index} className="flex flex-col items-start gap-3 w-1/2 md:w-1/3 mb-[3rem]">
              <img className="w-[178px] md:w-[250px] xl:w-[300px]" src={esgn.image} alt="" />
              <div>
                <span className="text-base font-semibold">{esgn.name}</span>
                <img src={star} alt="" />
                <span>{esgn.price}</span>
              </div>
              <a
                href="l"
                className="no-underline rounded-[6px] text-white text-sm px-4 py-2 bg-[#7C7CFC]"
              >
                Beli Sekarang
              </a>
            </div>
          ))}
        </section>
        <h4 className="text-[#8F9199] mb-[.5rem]">BUNDLING</h4>
        <section className="flex flex-wrap justify-between items-center mb-[3rem]">
          {bundle.map((bundle, index) => (
            <div key={index} className="flex flex-col items-start gap-3 w-1/2 md:w-1/3 mb-[3rem]">
              <img className="w-[178px] md:w-[250px] xl:w-[300px]" src={bundle.image} alt="" />
              <div>
                <span className="text-base font-semibold">{bundle.name}</span>
                <img src={star} alt="" />
                <span>{bundle.price}</span>
              </div>
              <a
                href="l"
                className="no-underline rounded-[6px] text-white text-sm px-4 py-2 bg-[#7C7CFC]"
              >
                Beli Sekarang
              </a>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default BeliSaldo;
