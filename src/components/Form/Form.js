import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const Form = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [client, setClient] = useState("");
  const [contractor, setContractor] = useState("");
  return (
    <div className="bg-white p-6 rounded-md shadow-lg">

      <p className="mb-6 font-semibold text-3xl text-blue-900">Personal Information</p>

      <form className="">
        <div className="grid grid-cols-1 gap-y-10 gap-x-20 ">
          <div className="grid grid-cols-2 ">
            <label className="text-slate-700">Project Name:</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="border-gray-300 border-2 outline-none w-60 p-2"
            />
          </div>
          <div className="grid grid-cols-2">
            <label className="text-slate-700">Project Description:</label>
            <input
              type="text"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="border-gray-300 border-2 outline-none  w-60 p-2"
            />
          </div>
          <div className="grid grid-cols-2">
            <label className="text-slate-700">Client:</label>
            <input
              type="text"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className="border-gray-300 border-2 outline-none w-60 p-2"
            />
          </div>
          <div className="grid grid-cols-2">
            <label className="text-slate-700">Contractor:</label>
            <input
              type="text"
              value={contractor}
              onChange={(e) => setContractor(e.target.value)}
              className="border-gray-300 border-2 outline-none w-60 p-2"
            />
          </div>
          {/* <input
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            type="file"
            accept=".csv"
          /> */}
        </div>
        <div className="absolute bottom-0 right-0 mb-6 mr-10">
          <button className="bg-blue-700 text-white px-12 py-2 rounded-md text-lg hover:drop-shadow-lg hover:scale-105 transition-all duration-300" type="button">Submit</button>
        </div>
      </form>
    </div>

  );
};

export default Form;
