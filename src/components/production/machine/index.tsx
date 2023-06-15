"use client";
import { useState } from "react";
import ButtonsAction from "./buttons";
import Sessions from "./sessions";

export default function Machine({ machine }: any) {
  const [startShift, setStartShift] = useState(false);
  const [stopShift, setStopShift] = useState(false);
  const [finishShift, setFinishShift] = useState(false);
  const [chooseTeam, setChooseTeam] = useState("");
  const [itemSelected, setItemSelected] = useState("");
  return (
    <div className=" flex justify-around items-center flex-wrap w-[98%] shadow-md shadow-lime-400 bg-lime-100 px-10 py-2 rounded-md border-solid border-2 border-gray-200">
      <Sessions
        startShift={startShift}
        stopShift={stopShift}
        finishShift={finishShift}
        chooseTeam={chooseTeam}
        setChooseTeam={setChooseTeam}
        itemSelected={itemSelected}
        setItemSelected={setItemSelected}
        machine={machine}
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
      />
    </div>
  );
}
