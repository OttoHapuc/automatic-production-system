"use client";
import Non_StopShift from "./non-stopShift";
import ShiftWithStop from "./shiftWithStop";
import StartSession from "./startSession";

export default function Sessions({
  startShift,
  stopShift,
  finishShift,
  chooseTeam,
  setChooseTeam,
  itemSelected,
  setItemSelected,
  machine,
  reasonForTheStop,
  setReasonForTheStop,
  quantityProduced,
  setQuantityProduced
}: any) {
  const whenShiftStarted = stopShift ? (
    <ShiftWithStop
      finishShift={finishShift}
      reasonForTheStop={reasonForTheStop}
      setReasonForTheStop={setReasonForTheStop}
      quantityProduced={quantityProduced}
      setQuantityProduced={setQuantityProduced}
    />
  ) : (
    <Non_StopShift
      finishShift={finishShift}
      chooseTeam={chooseTeam}
      itemSelected={itemSelected}
      quantityProduced={quantityProduced}
      setQuantityProduced={setQuantityProduced}
    />
  );
  return (
    <div className="gap-2 flex-1 items-center max-w-full min-w-[300px]">
      <h1 className="text-center text-xl font-bold">{machine.name}</h1>
      <div className="flex flex-wrap flex-1">
        {!startShift ? (
          <StartSession
            chooseTeam={chooseTeam}
            setChooseTeam={setChooseTeam}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
          />
        ) : (
          whenShiftStarted
        )}
      </div>
    </div>
  );
}
