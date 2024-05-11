import React, { useRef, useState } from "react";

import file from "../assets/img/file biru.svg";
import file2 from "../assets/img/file putih.svg";
import Logo from "../assets/img/Logo.png";
import Gplay from "../assets/img/google play.png";
import Apple from "../assets/img/apple store.png";
import { IoIosChatbubbles } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaFileArrowUp } from "react-icons/fa6";

const UploadMateraiInstan = () => {
  const [PdfFile, setPdfFile] = useState(null);
  const [FileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (allowedTypes.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.onloadend = () => {
          setPdfFile(reader.result);
          setFileName(selectedFile.name);
          setTimeout(() => {
            navigate("/proses", {
              state: { PdfFile: reader.result, FileName: selectedFile.name },
            });
          }, 3000);
          // navigate("/proses", {
          //   state: { PdfFile: reader.result, FileName: selectedFile.name },
          // });
        };
        reader.readAsDataURL(selectedFile);
      } else {
        console.log("Tipe file tidak diizinkan.");
      }
    } else {
      console.log("Pilih file PDF.");
    }
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file && allowedTypes.includes(file.type)) {
  //      let reader = new FileReader()
  //      reader.readAsDataURL(file)
  //      reader.onload = (e) => {
  //       setSelectedFile(e.target.result)
  //      }

  //     const maxSizeMB = 2;
  //     if (file.size > maxSizeMB * 1024 * 1024) {
  //       console.log("Ukuran file terlalu besar.");
  //       return;
  //     }

  //     setFilename(file.name);
  //     setSelectedFile(file);
  // navigate("/proses", {
  //   state: { filename: file.name, selectedFile: file },
  // });
  //     console.log("File yang dipilih:", file);
  //   }
  // };

  return (
    
    <div>
      <header className="flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-[2rem] md:px-[4rem] xl:px-[3rem]">
        <div className="flex gap-4 items-center text-[#0068D6] font-medium">
          <img src={Logo} alt="Logo" width={110} height={57} />
          <a href="/e-materai-instan" className="link">
            e-Meterai Instan
          </a>
        </div>
        <div className="flex gap-2">
          <a href="https://play.google.com/store/search?q=emet+e-meterai&c=apps">
            <img src={Apple} width={141} alt="" />
          </a>
          <a href="https://apps.apple.com/id/app/emet-meterai-tanda-tangan/id1604423824">
            <img src={Gplay} width={158} alt="" />
          </a>
        </div>
      </header>
      <div className="my-[9rem]">
        <h1 className="text-center mx-8 text-3xl font-semibold mb-[4rem]">
          Mulai Kemudahan Pembubuhan e-Meterai Sekarang. Upload dan Tempel
          e-Meterai pada Dokumen Kamu di Sini
        </h1>

        <label className="w-1/2 flex-col items-center flex justify-center mx-auto outline rounded-[.5rem] outline-8 border-2 border-dashed border-[#0068D6] outline-[#e6eaf8] p-[4rem]">
          {/* {PdfFile && (
            <div>
              <FaFileArrowUp className="text-5xl text-[#42A4FF]" />
              <div className="flex items-center gap-4 mt-3" role="status">
                <svg
                  aria-hidden="true"
                  class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#6DADED]"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="font-semibold text-lg">
                  Colourful Minimal Brainstorm Roadmap Mind Map
                </span>
              </div>
            </div>
          )} */}
          {!PdfFile && (
            <>
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />

              <img className="mb-6" width={50} src={file} alt="" />
              <h1 className="text-lg">Letakkan file disini</h1>
              <p>
                Format file berupa pdf, doc, docx dengan ukuran maksimal 2MB
              </p>
              <p className="my-[1.5rem]">atau</p>
              <button
                className="flex rounded items-center gap-2 px-4 py-2 bg-[#0068D6] text-white hover:bg-blue-500 active:bg-blue-700"
                onClick={handleClick}
              >
                <img src={file2} width={20} alt="" />
                <span>Upload Dokumen dari Komputer</span>
              </button>
            </>
          )}
        </label>

        <a
          href="o"
          className="inline-block no-underline bg-[#12B76A] hover:bg-green-500 active:bg-green-700 text-white rounded-full px-4 py-2 whitespace-nowrap z-50 fixed bottom-[16px] right-[16px]"
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

      <footer className="p-8 bg-white border-t border-gray-300 mt-auto">
        <div>
          <span>© 2024 Kubikal Emet - PT Datanode Narologi Siberkarya</span>
        </div>
      </footer>
    </div>
  );
};

export default UploadMateraiInstan;
