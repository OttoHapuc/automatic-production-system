"use client";

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
}: any) {
  function startAction() {
    if (chooseTeam === "" || itemSelected === "") return;
    setStartShift(true);
  }
  function stopAction() {
    setStopShift(!stopShift);
  }
  function finishAction() {
    if (!finishShift) setFinishShift(true);
    if (finishShift) {
      setChooseTeam("");
      setItemSelected("");
      setStartShift(false);
      setStopShift(false);
      setFinishShift(false);
    }
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
