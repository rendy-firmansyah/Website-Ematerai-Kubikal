import React, { useState, useRef } from "react";
import { FaFile } from "react-icons/fa6";
import materai from "../assets/img/materai1000.svg";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import Draggable, { DraggableCore } from "react-draggable";
import { IoIosChatbubbles, IoIosCloseCircle } from "react-icons/io";
import materai2 from "../assets/img/meterai-elektronik-10000.jpg";
import File from "../assets/img/signature.png";
import { PiWarningCircle } from "react-icons/pi";
import PopUp from "../component/PopUp";
import bundle from "../assets/img/bundle.svg";
import { useLocation } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import PopUpPembayaran from "../component/PopUpPembayaran";
import { Bounce, toast } from "react-toastify";

const ProsesMaterai = () => {
  const [showMaterai, setShowMaterai] = useState(null);
  const [PopUpp, setPopUp] = useState(false);
  const [NumPage, setNumPage] = useState(null);
  const [PageNumber, setPageNumber] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [TandaTangan, setTandaTangan] = useState(null);
  const [Pembayaran, setPembayaran] = useState(false);
  const location = useLocation();

  const materaiRef = useRef(null);
  const signatureRef = useRef(null);

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPage(numPages);
  }

  const removeSignature = () => {
    setTandaTangan(null);
  };

  const openMaterai = () => {
    setShowMaterai(true);
  };

  const removeMaterai = () => {
    setShowMaterai(null);
  };

  const openPopUp = () => {
    setPopUp(true);
  };

  const openPopUpPembayaran = () => {
    if (showMaterai || TandaTangan) {
      setPembayaran(true);
    }
    if (!showMaterai && !TandaTangan) {
      toast.info("Silahkan Tambahkan Tanda Tangan Atau Materai Pembubuhan", {
        className: "toaster",
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  const goToPrevPage = () =>
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));

  const goToNextPage = () =>
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, NumPage));

  const zoomIn = () => setZoomLevel(zoomLevel + 0.1);

  const zoomOut = () => {
    if (zoomLevel > 0.1) {
      setZoomLevel(zoomLevel - 0.1);
    }
  };

  const HandleTtd = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTandaTangan(URL.createObjectURL(file));
    }
  };


  return (
    <div>
      {Pembayaran && (
        <PopUpPembayaran
          TandaTangan={TandaTangan}
          showMaterai={showMaterai}
          setPembayaran={setPembayaran}
        />
      )}

      {PopUpp && <PopUp setPopUp={setPopUp} />}

      {showMaterai !== null && (
        <Draggable nodeRef={materaiRef} defaultPosition={{ x: 900, y: 400 }}>
          <div
            ref={materaiRef}
            className="absolute z-10"
            style={{ cursor: "move" }}
          >
            <div className="absolute -top-7 -right-5">
              <span
                onClick={removeMaterai}
                className="text-3xl text-black cursor-pointer"
              >
                <IoIosCloseCircle />
              </span>
            </div>
            <div>
              <img width={80} src={materai2} alt="" />
            </div>
          </div>
        </Draggable>
      )}

      {TandaTangan !== null && (
        <Draggable nodeRef={signatureRef} defaultPosition={{ x: 900, y: 200 }}>
          <div
            ref={signatureRef}
            className="absolute z-10"
            style={{ cursor: "move" }}
          >
            <div className="absolute -top-7 -right-5">
              <span
                onClick={removeSignature}
                className="text-3xl text-black cursor-pointer"
              >
                <IoIosCloseCircle />
              </span>
            </div>
            <img width={150} src={TandaTangan} alt="" />
          </div>
        </Draggable>
      )}

      <header className="bg-white shadow-md z-20 w-screen fixed left-0 top-0 overflow-auto">
        <div className="flex justify-between px-4 sm:px-10 py-4 items-center w-fit min-w-full flex-nowrap">
          <div className="flex items-center gap-3 mr-2 text-ellipsis overflow-hidden whitespace-nowrap">
            <FaFile className="text-xl text-[#7C7CFC]" />
            <span>
              {location.state && location.state.FileName
                ? location.state.FileName
                : "File Name Not Available"}
            </span>
          </div>
          <div>
            <button
              onClick={openPopUpPembayaran}
              className="bg-[#7C7CFC] text-white rounded px-4 py-2 whitespace-nowrap"
            >
              Proses Pembubuhan
            </button>
          </div>
        </div>
      </header>

      <section className="bg-white top-0 hidden mb xl:block w-[360px] fixed z-10 transition-all duration-300 overflow-auto left-0">
        <div className="relative p-3 mt-[5rem] flex flex-col h-full">
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
                      Meterai elektronik yang sah dari PERURI
                    </p>
                  </div>
                </div>
              </div>
            </button>
            <label className="w-full text-left bg-white hover:bg-gray-50 active:bg-gray-100 shadow-sm border-2 rounded px-3 py-2 cursor-pointer">
              <div className="flex item space-x-4 mt-2">
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  className="hidden"
                  onChange={HandleTtd}
                />
                <div className="h-12 w-12">
                  <img src={File} alt="" />
                </div>
                <div className="flex w-full flex-col">
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
            </label>
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
                <PiWarningCircle className="text-4xl -mt-2" />
                <span>
                  Download eMET Mobile untuk dapat menggunakan fitur ini
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

      <section className="bg-[#E4E7EC] h-full relative mt-20 md:mt-0 xl:ml-[360px]">
        <div className="overflow-x-auto pt-[6rem] h-full text-center ">
          <div className="inline-block border-none p-3" role="presentation">
            {location.state.PdfFile && (
              <Document
                file={location.state.PdfFile}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page
                  pageNumber={PageNumber}
                  scale={zoomLevel}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            )}
          </div>
        </div>
        <div className="overflow-auto z-20 sticky bottom-0 left-0 w-full bg-[#F2F4F7] shadow">
          <div className="flex p-5 w-fit min-w-full items-center justify-center flex-nowrap">
            <button
              onClick={zoomIn}
              className="w-10 h-10 text-2xl rounded flex items-center justify-center bg-[#E4E7EC] hover:bg-[#cdcfd3] active:bg-[#bebfc4] mx-2 flex-none"
            >
              <FiZoomIn />
            </button>
            <button
              onClick={zoomOut}
              className="w-10 h-10 text-2xl rounded flex items-center justify-center bg-[#E4E7EC] hover:bg-[#cdcfd3] active:bg-[#bebfc4] mx-2 flex-none"
            >
              <FiZoomOut />
            </button>
            <button
              onClick={goToPrevPage}
              className="w-10 h-10 text-2xl rounded flex items-center justify-center bg-[#E4E7EC] hover:bg-[#cdcfd3] active:bg-[#bebfc4] mx-2 flex-none"
            >
              <FaArrowLeftLong />
            </button>
            <div className="flex rounded mx-2 ">
              <div className="flex bg-[#E4E7EC] items-center p-2">Page</div>
              <div className="flex items-center gap-2 bg-white px-4">
                <span>{PageNumber}</span>
                <span>of</span>
                <span>{NumPage}</span>
              </div>
            </div>
            <button
              onClick={goToNextPage}
              className="w-10 h-10 text-2xl rounded flex items-center justify-center bg-[#E4E7EC] hover:bg-[#cdcfd3] active:bg-[#bebfc4] mx-2 flex-none"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProsesMaterai;
