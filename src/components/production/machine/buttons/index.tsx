"use client";

import { toast } from "react-toastify";

export default function ButtonsAction({
  startShift,
  setStartShift,
  stopShift,
  setStopShift,
  finishShift,
  setFinishShift,
  chooseTeam,
  setChooseTeam,
  itemSelected,
  setItemSelected,
  reasonForTheStop,
  setReasonForTheStop,
  quantityProduced,
  setQuantityProduced,
}: any) {
  function startAction() {
    if (chooseTeam === "")
      return toast.error("Selecione uma turma");
    if (itemSelected === "")
      return toast.error("Selecione um Item de produção");
    setStartShift(true);
  }
  function stopAction() {
    if (stopShift && reasonForTheStop === "")
      return toast.error("Preencha o motivo da parada");
    setStopShift(!stopShift);
  }
  function finishAction() {
    if (!finishShift) setFinishShift(true);
    if(finishShift && quantityProduced === "") return toast.error("Preencha a quantidade produzida")
    setChooseTeam("");
    setItemSelected("");
    setStartShift(false);
    setStopShift(false);
    setFinishShift(false);
    setReasonForTheStop("");
    setQuantityProduced("");
  }
  function cancelEndOfShift() {
    setFinishShift(false);
  }
  return (
    <div className="flex justify-around items-center p-4 min-w-[20rem]">
      {!startShift ? (
        <button
          onClick={startAction}
          type="button"
          className="h-24 px-5 bg-lime-600 text-white text-2xl rounded-md button-click buttons"
        >
          Start
        </button>
      ) : (
        <>
          {!finishShift &&
            (!stopShift ? (
              <button
                onClick={stopAction}
                type="button"
                className="h-24 px-5 bg-yellow-600 text-white text-2xl rounded-md button-click buttons"
              >
                Stop
              </button>
            ) : (
              <button
                onClick={stopAction}
                type="button"
                className="h-24 px-5 bg-lime-600 text-white text-2xl rounded-md button-click buttons"
              >
                Continuar
              </button>
            ))}
          {finishShift && (
            <button
              onClick={cancelEndOfShift}
              type="button"
              className="h-24 px-5 bg-red-600 text-white text-2xl rounded-md button-click buttons"
            >
              Cancelar
            </button>
          )}
          <button
            onClick={finishAction}
            type="button"
            className="h-24 px-5 bg-lime-600 text-white text-2xl rounded-md button-click buttons"
          >
            Finalizar
          </button>
        </>
      )}
    </div>
  );
}
