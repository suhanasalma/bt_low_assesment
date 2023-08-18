import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FileUpload from "./FileUpload";

const CsvFile = () => {
  const [maxX, setMaxX] = useState("");
  const [minX, setMinX] = useState("");
  const [maxY, setMaxY] = useState("");
  const [minY, setMinY] = useState("");
  const [maxZ, setMaxZ] = useState("");
  const [minZ, setMinZ] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const formInputs = [
    {
      label: "max_X :",
      value: maxX,
      onEvent: setMaxX,
    },
    {
      label: "min_X :",
      value: minX,
      onEvent: setMinX,
    },
    {
      label: "max_Y :",
      value: maxY,
      onEvent: setMaxY,
    },
    {
      label: "min_Y :",
      value: minY,
      onEvent: setMinY,
    },
    {
      label: "max_Z :",
      value: maxZ,
      onEvent: setMaxZ,
    },
    {
      label: "min_Z :",
      value: minZ,
      onEvent: setMinZ,
    },
  ];

 
  useEffect(() => {
    let details = localStorage.getItem("pdfDetails");
    if (details) {
      details = JSON.parse(details);
      details.maxX = maxX;
      details.minX = minX;
      details.maxY = maxY;
      details.minY = minY;
      details.maxZ = maxZ;
      details.minZ = minZ;
    }
    localStorage.setItem("pdfDetails", JSON.stringify(details));
    console.log(details);
  }, [maxX, minX, maxY, minY, maxZ, minZ]);

  return (
    <div
      className="bg-white py-6 rounded-md shadow-lg mt-5"
    >
      <FileUpload
        setMaxX={setMaxX}
        setMinX={setMinX}
        setMaxY={setMaxY}
        setMinY={setMinY}
        setMaxZ={setMaxZ}
        setMinZ={setMinZ}
        setDisabled={setDisabled}
        setIsDragging={setIsDragging}
        setUploadedFileName={setUploadedFileName}
        disabled={disabled}
        isDragging={isDragging}
        uploadedFileName={uploadedFileName}
      />

      <form className="">
        <div className="grid grid-cols-1 gap-5 justify-items-center	">
          {formInputs?.map((input, i) => (
            <div key={i} className="grid grid-cols-2 ">
              <label className="text-slate-700">{input.label}</label>
              <input
                type="number"
                value={input.value}
                onChange={(e) => input.onEvent(e.target.value)}
                className="border-gray-300 border-2 outline-none w-60 px-2 py-1"
              />
            </div>
          ))}
        </div>
        <div className={` mt-10 mr-20 text-right`}>
          <Link
            to="/result"
            className="bg-blue-700 text-white px-12 py-2 rounded-md text-lg hover:drop-shadow-lg hover:scale-105 transition-all duration-300"
            type="button"
          >
            Result
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CsvFile;
