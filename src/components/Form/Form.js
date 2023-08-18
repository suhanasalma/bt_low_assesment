import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setStep }) => {
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const excludeNumbersPattern = /^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;

  const formInputs = [
    {
      label: "Project Name",
      name: "project_name",
    },
    {
      label: "Project Description",
      name: "project_description",
    },
    {
      label: "Client",
      name: "client",
    },
    {
      label: "Contractor",
      name: "contractor",
    },
  ];

  const handleSubmitFrom = (data) => {
    let details = {
      "Project Name": data.project_name,
      "Project Description": data.project_name,
      Client: data.project_name,
      Contractor: data.project_name,
    };
    localStorage.setItem("pdfDetails", JSON.stringify(details));
    setDisabled(true);
    setStep(2);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg">
      <p className="mb-6 font-semibold text-3xl text-blue-900">
        Personal Information
      </p>

      <form onSubmit={handleSubmit(handleSubmitFrom)} className="">
        <div className="grid grid-cols-1 gap-5  justify-items-center">
          {formInputs?.map((input, i) => (
            <div key={i} className="grid grid-cols-2 ">
              <label className="text-slate-700">{input.label} :</label>
              <div>
                <input
                  disabled={disabled}
                  type="text"
                  className="border-gray-300 border-2 outline-none w-60 px-2 py-1"
                  {...register(input.name, {
                    required: true,
                    pattern: excludeNumbersPattern,
                  })}
                />
                <p className="text-red-500 text-xs">
                  {errors[input.name]?.type === "required" &&
                    "This field is required"}
                </p>
                <p className="text-red-500 text-xs">
                  {errors[input.name]?.type === "pattern" &&
                    "Numbers are not allowed"}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={`${disabled && "hidden"} mt-10 mr-16 text-right`}>
          <button
            className="bg-blue-700 text-white px-12 py-2 rounded-md text-lg hover:drop-shadow-lg hover:scale-105 transition-all duration-300"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
