import React, { useEffect, useState } from "react";
import { FaFile } from "react-icons/fa6";
import materai from "../assets/img/materai1000.svg";
import { FiZoomIn } from "react-icons/fi";
import { FiZoomOut } from "react-icons/fi";
import tes from "../assets/img/tes pdf.png";
import Draggable from "react-draggable";
import { IoIosChatbubbles, IoIosCloseCircle } from "react-icons/io";
import materai2 from "../assets/img/materai1000.png";
import file from "../assets/img/signature.png";
import { PiWarningCircle } from "react-icons/pi";
import PopUp from "../component/PopUp";
import bundle from "../assets/img/bundle.svg";
import { useLocation } from "react-router-dom";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const ProsesMaterai = () => {
  const [showMaterai, setShowMaterai] = useState([]);
  const [PopUpp, setPopUp] = useState(false);
  const [nextId, setNextId] = useState(1);
  const location = useLocation();
  console.log("lokasiiiii", location);

  const handleClose = (id) => {
    setShowMaterai(showMaterai.filter((materai) => materai.id !== id));
    setPopUp(false);
  };

  const openMaterai = () => {
    setShowMaterai([...showMaterai, { id: nextId, x: 880, y: 280 }]);
    setNextId(nextId + 1);
  };

  const openPopUp = () => {
    setPopUp(true);
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      {PopUpp && <PopUp handleClose={handleClose} />}
      {showMaterai.map((materai) => (
        <Draggable
          key={materai.id}
          defaultPosition={{ x: materai.x, y: materai.y }}
        >
          <div className="absolute z-10">
            <div className="absolute top-0 right-0">
              <span
                onClick={() => handleClose(materai.id)}
                className="text-3xl text-black cursor-pointer"
              >
                <IoIosCloseCircle />
              </span>
            </div>
            <img width={150} src={materai2} alt="" />
          </div>
        </Draggable>
      ))}

      <header className="bg-white shadow-md z-20 w-screen fixed top-0 left-0 overflow-auto">
        <div className="flex justify-between px-4 sm:px-10 py-4 items-center w-fit min-w-full flex-nowrap">
          <div className="flex items-center gap-3 mr-2 text-ellipsis overflow-hidden whitespace-nowrap">
            <FaFile className="text-xl text-[#7C7CFC]" />
            <span>{location.state.FileName}</span>
          </div>
          <div>
            <button className="bg-[#7C7CFC] text-white rounded px-4 py-2 whitespace-nowrap">
              Proses E-Materai
            </button>
          </div>
        </div>
      </header>
      <section className="bg-white w-[360PX] fixed z-10 transition-all duration-300 overflow-auto left-0">
        <div className="relative p-3 flex flex-col">
          <div className="space-y-4 mt-2">
            <button
              onClick={openMaterai}
              className="w-full text-left bg-white hover:bg-gray-50 active:bg-gray-100 shadow-sm border-2 rounded px-3 py-2 cursor-pointer"
            >
              <div className="flex space-x-4 mt-2 ">
                <div className="h-12 w-12">
                  <img src={materai} alt="" />
                </div>
                <div className="flex">
                  <div className="w-full">
                    <span className="text-lg font-medium">e-Meterai</span>
                    <p className="text-sm text-gray-500">
                      {" "}
                      Meterai elektronik yang sah dari PERURI{" "}
                    </p>
                  </div>
                  <div
                    className={`${
                      showMaterai.length === 0 ? "hidden" : ""
                    }bg-[#FC9ABD] h-6 w-6 rounded-full font-semibold text-white text-center align-middle`}
                  >
                    {showMaterai.length}
                  </div>
                </div>
              </div>
            </button>
            <button
              onClick={openPopUp}
              className="w-full text-left bg-white hover:bg-gray-50 active:bg-gray-100 shadow-sm border-2 rounded px-3 py-2 cursor-pointer"
            >
              <div className="flex space-x-4 mt-2">
                <div className="h-12 w-12">
                  <img src={file} alt="" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <span className="py-1 px-2 bg-[#0068D6] text-white text-xs rounded">
                      disediakan oleh PERURI
                    </span>
                  </div>
                  <span className="text-lg font-medium">
                    Certified e-Signature
                  </span>
                  <h5 className="text-sm text-gray-500 font-normal">
                    Tanda tangan yang dijamin sah secara hukum
                  </h5>
                </div>
              </div>
              <div className="text-sm text-[#D92D20] flex items-start gap-2 font-light">
                <PiWarningCircle className="text-4xl font-light -mt-2" />{" "}
                <span>
                  Download eMET Mobile untuk dapat menggunakan fitur ini{" "}
                </span>
              </div>
            </button>
            <button
              onClick={openPopUp}
              className="w-full text-left bg-white hover:bg-gray-50 active:bg-gray-100 shadow-sm border-2 rounded px-3 py-2 cursor-pointer"
            >
              <div className="flex space-x-4 mt-2">
                <div className="h-12 w-20">
                  <img src={bundle} alt="" />
                </div>
                <div className="">
                  <div className="flex flex-col">
                    <span className="text-lg font-medium">
                      e-Meterai + e-Signature
                    </span>
                    <h5 className="text-sm text-gray-500 font-normal">
                      Bundling e-Meterai dan Tanda tangan Digital sekaligus
                    </h5>
                  </div>
                </div>
              </div>
              <div className="text-sm text-[#D92D20] flex items-start gap-2 mb-2">
                <PiWarningCircle className="text-4xl -mt-2" />{" "}
                <span>
                  Download eMET Mobile untuk dapat menggunakan fitur ini{" "}
                </span>
              </div>
            </button>
          </div>
          <a
            href="o"
            className="inline-block no-underline bg-[#12B76A] hover:bg-green-500 active:bg-green-700 text-white rounded-full px-4 py-2 whitespace-nowrap z-50 mt-[3rem]"
          >
            <div className="flex items-center space-x-2">
              <IoIosChatbubbles className="text-5xl" />
              <div>
                <div>Anda memiliki kendala?</div>
                <div className="font-semibold">Hubungi Pusat Bantuan</div>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="bg-[#E4E7EC] mt-20 ml-[360px] z-50">
        <div className="w-full overflow-x-auto text-center">
          <div className="w-full flex items-center justify-center h-full border-none p-3">
            {location.state.PdfFile && (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer
                  plugins={[defaultLayoutPluginInstance]}
                  fileUrl={location.state.PdfFile}
                />
              </Worker>
            )}
            {!location.state.PdfFile && <h1>No file Here</h1>}
            {console.log("ISI FILE", location.state.PdfFile)}
          </div>
        </div>
        <div className="overflow-auto sticky bottom-0 left-0 w-full bg-[#F2F4F7] shadow">
          <div className="flex p-5 w-fit min-w-full justify-center flex-nowrap">
            <button className="w-10 h-10 text-2xl rounded flex items-center justify-center bg-[#E4E7EC] hover:bg-[#cdcfd3] active:bg-[#bebfc4] mx-2 flex-none">
              <FiZoomIn />
            </button>
            <button className="w-10 h-10 text-2xl rounded flex items-center justify-center bg-[#E4E7EC] hover:bg-[#cdcfd3] active:bg-[#bebfc4] mx-2 flex-none">
              <FiZoomOut />
            </button>
            <button className="w-10 h-10 text-2xl rounded flex items-center justify-center bg-[#E4E7EC] hover:bg-[#cdcfd3] active:bg-[#bebfc4] mx-2 flex-none"></button>{" "}
            {/* Placeholder button */}
            <div></div> {/* Placeholder */}
            <button className="w-10 h-10 text-2xl rounded flex items-center justify-center bg-[#E4E7EC] hover:bg-[#cdcfd3] active:bg-[#bebfc4] mx-2 flex-none"></button>{" "}
            {/* Placeholder button */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProsesMaterai;
