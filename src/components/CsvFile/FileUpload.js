import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const FileUpload = ({
  setMaxX,
  setMinX,
  setMaxY,
  setMinY,
  setMaxZ,
  setMinZ,
  maxX,
  minX,
  maxY,
  minY,
  maxZ,
  minZ,
  setDisabled,
  setIsDragging,
  setUploadedFileName,
  disabled,
  isDragging,
  uploadedFileName,
}) => {
  const parseCsvAndExtractValues = (content) => {
    const lines = content.split("\n"); // Split CSV content into lines
    const headers = lines[0]
      .split(",")
      .map((header) => header.trim().toLowerCase());
    const columnIndices = { x: -1, y: -1, z: -1 }; // Initialize column indices

    headers.forEach((header, index) => {
      if (header === "x" || header === "y" || header === "z") {
        columnIndices[header] = index;
      }
    });
    const xs = [];
    const ys = [];
    const zs = [];

    lines.slice(1).forEach((line) => {
      const columns = line.split(","); // Split each line into columns

      if (columns.length >= 4) {
        const x = parseFloat(columns[columnIndices.x].trim()); // Convert X value to float
        const y = parseFloat(columns[columnIndices.y].trim()); // Convert Y value to float
        const z = parseFloat(columns[columnIndices.z].trim()); // Convert Z value to float

        if (!isNaN(x)) {
          xs.push(x);
        }
        if (!isNaN(y)) {
          ys.push(y);
        }
        if (!isNaN(z)) {
          zs.push(z);
        }
      }
    });

    return {
      maxX: Math.max(...xs),
      minX: Math.min(...xs),
      maxY: Math.max(...ys),
      minY: Math.min(...ys),
      maxZ: Math.max(...zs),
      minZ: Math.min(...zs),
    };
  };

  const handleCsvUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setUploadedFileName(file.name);
      const reader = new FileReader();
      console.log(reader);
      reader.onload = (event) => {
        const content = event.target.result;
        const extractedValues = parseCsvAndExtractValues(content);
        setMaxX(extractedValues.maxX);
        setMinX(extractedValues.minX);
        setMaxY(extractedValues.maxY);
        setMinY(extractedValues.minY);
        setMaxZ(extractedValues.maxZ);
        setMinZ(extractedValues.minZ);
      };
      reader.readAsText(file);
    }

    setDisabled(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      if (file.type !== "text/csv") {
        toast("Kindly provide CSV file");
        return;
      }
      setUploadedFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        const extractedValues = parseCsvAndExtractValues(content);
        setMaxX(extractedValues.maxX);
        setMinX(extractedValues.minX);
        setMaxY(extractedValues.maxY);
        setMinY(extractedValues.minY);
        setMaxZ(extractedValues.maxZ);
        setMinZ(extractedValues.minZ);
      };
      reader.readAsText(file);
    }
    setDisabled(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`outline-dashed outline-2  ${
        uploadedFileName ? "outline-blue-400" : "outline-slate-400"
      }  w-6/12 mx-auto h-32 mb-10 p-2 flex justify-center items-center ${
        isDragging ? "bg-blue-100" : ""
      }`}
    >
      {uploadedFileName ? (
        <p>
          File Dropped Successfully !{" "}
          <span className="block w-full py-2 text-sm font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 text-center mt-2">
            {uploadedFileName}
          </span>
        </p>
      ) : (
        <div>
          <p>
            Drag & drop any file here <br /> or
            <span className="text-blue-700 mx-1 font-semibold">
              <label>
                browse file
                <input
                  disabled={disabled}
                  onChange={handleCsvUpload}
                  className="hidden"
                  type="file"
                  accept=".csv"
                />
              </label>
            </span>
            from device
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
