import React, { useState} from "react";
import Form from "../../components/Form/Form";
import CsvFile from "../../components/CsvFile/CsvFile";

const Home = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="drop-shadow-xl bg-slate-200 xl:p-14 px-5 py-20 mx-10 xl:w-6/12 ">
      {step === 1  ? <Form setStep={setStep} /> : <><Form setStep={setStep} /> <CsvFile/></> }
    </div>

  );
};

export default Home;
