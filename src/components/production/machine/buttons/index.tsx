'use client'

export default function ButtonsAction({
  startShift,
  setStartShift,
  stopShift,
  setStopShift,
  finishShift,
  setFinishShift,
  setChooseTeam,
  setItemSelected
}: any) {
  function startAction() {
    setStartShift(true);
  }
  function stopAction() {
    setStopShift(!stopShift);
  }
  function finishAction() {
    if(!finishShift)setFinishShift(true);
    if(finishShift) {
      setChooseTeam('');
      setItemSelected('');
      setStartShift(false);
      setStopShift(false);
      setFinishShift(false);
    }
  }
  function cancelEndOfShift() {
    setFinishShift(false);
  }
  return (
    <div className="flex gap-5 items-center ml-6 p-4">
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
