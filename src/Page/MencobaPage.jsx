import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import React, { useState } from "react";

const MencobaPage = () => {
  const [PdfFile, setPdfFile] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const allowedFiles = ['application/pdf'];
  const handleFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
        };
      }
    } else {
      console.log("pilih pdf");
    }
  };
  return (
    <form className="flex justify-center items-center mt-[3rem]">
      <input type="file" onChange={handleFileChange} />
      {PdfFile && (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={PdfFile}
          plugins={[defaultLayoutPluginInstance]}
        ></Viewer>
      </Worker>

      )}

      {!PdfFile && ( <span>okeoeko</span>)}
    </form>
  );
};

export default MencobaPage;
