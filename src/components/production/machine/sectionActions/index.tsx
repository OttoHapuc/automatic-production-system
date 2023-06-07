import TypeOfActions from "./typeOfActions";

export default function SectionActions({
  start,
  Stop,
  finish,
  setFinish,
  setStart,
  setStop,
  setValue,
}: any) {
  function FinishAction() {
    if (!finish) setFinish(true);
    if (finish) {
      setFinish(false);
      setStart(false);
      setStop(false);
      setValue("");
    }
  }
  function StopAction() {
    setStop(true);
  }
  function Continue() {
    setStop(false);
  }
  return (
    <>
      {start && (
        <>
          <div className="w-[98%] h-36 shadow-md shadow-lime-400 bg-lime-100 rounded-md flex justify-between px-10 py-4 border-solid border-2 border-gray-200">
            <div className="flex flex-wrap justify-between items-center max-w-full flex-1">
              <TypeOfActions Stop={Stop} finish={finish} />
            </div>
            <div className="flex gap-8 ml-6 items-center">
              {!Stop ? (
                <button
                  className="w-24 h-24 bg-yellow-600 text-white text-2xl rounded-md button-click buttons mx-3"
                  onClick={() => StopAction()}
                >
                  Stop
                </button>
              ) : (
                <button
                  className="w-28 h-24 bg-lime-600 text-white text-2xl rounded-md button-click buttons mx-3"
                  onClick={() => Continue()}
                >
                  Continuar
                </button>
              )}
              <button
                className="w-24 h-24 bg-lime-600 text-white text-2xl rounded-md button-click buttons mx-3"
                onClick={() => FinishAction()}
              >
                finishr
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
