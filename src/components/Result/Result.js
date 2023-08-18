import React, { useRef,useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

const Result = () => {
  const pdfRed = useRef(null);
  const [information,setInformation] = useState({})
  const downloadPdf = () => {
    const capture = pdfRed.current;
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4", true);
      const pdftWidth = doc.internal.pageSize.getWidth();
      const pdftHeight = doc.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdftWidth / imgWidth, pdftHeight / imgHeight);
      const imgX = (pdftWidth - imgWidth * ratio) / 2;
      const imgY = 20;
      doc.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      doc.save("receipt.pdf");
    });
  };

  useEffect(()=>{
    let details = localStorage.getItem("pdfDetails")
    if(details){
      details = JSON.parse(details)
      setInformation(details)
    
    }
    
  },[])

  
  return (
    <div
      ref={pdfRed}
      className="w-6/12 outline-2 outline-dashed outline-blue-200 mx-auto p-10"
    >
      <h2 className="mb-6 font-semibold text-3xl text-blue-900">XYZ Engine</h2>
      <p className="mb-6 text-xl text-blue-900 font-medium">All Information</p>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">Field</th>
            <th className="border border-gray-400 p-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(information).map((item, index) => (
            <tr key={index} className="bg-white">
              <td className="border border-gray-400 p-2">{item}</td>
              <td className="border border-gray-400 p-2">{information[item]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div onClick={downloadPdf} className="text-right">
        <button className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Download PDF
        </button>
        
      </div>
      <Link to='/' className="text-blue-700 underline">Go Home</Link>
    </div>
  );
};

export default Result;
