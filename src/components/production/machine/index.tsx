"use client";
import { useState } from "react";
import ButtonsAction from "./buttons";
import Sessions from "./sessions";
import { ToastContainer } from "react-toastify";

export default function Machine({ machine }: any) {
  const [startShift, setStartShift] = useState(false);
  const [stopShift, setStopShift] = useState(false);
  const [finishShift, setFinishShift] = useState(false);
  const [chooseTeam, setChooseTeam] = useState("");
  const [itemSelected, setItemSelected] = useState("");
  const [reasonForTheStop, setReasonForTheStop] = useState("");
  const [quantityProduced, setQuantityProduced] = useState("");
  return (
    <div className="flex justify-around items-center flex-wrap w-[98%] shadow-md shadow-lime-400 bg-lime-100 px-10 py-2 rounded-md border-solid border-2 border-gray-200">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Sessions
        startShift={startShift}
        stopShift={stopShift}
        finishShift={finishShift}
        chooseTeam={chooseTeam}
        setChooseTeam={setChooseTeam}
        itemSelected={itemSelected}
        setItemSelected={setItemSelected}
        machine={machine}
        reasonForTheStop={reasonForTheStop}
        setReasonForTheStop={setReasonForTheStop}
        quantityProduced={quantityProduced}
        setQuantityProduced={setQuantityProduced}
      />
      <ButtonsAction
        startShift={startShift}
        setStartShift={setStartShift}
        stopShift={stopShift}
        setStopShift={setStopShift}
        finishShift={finishShift}
        setFinishShift={setFinishShift}
        chooseTeam={chooseTeam}
        setChooseTeam={setChooseTeam}
        itemSelected={itemSelected}
        setItemSelected={setItemSelected}
        reasonForTheStop={reasonForTheStop}
        setReasonForTheStop={setReasonForTheStop}
        quantityProduced={quantityProduced}
        setQuantityProduced={setQuantityProduced}
      />
    </div>
  );
}
