export default function StartSession({start, setStart, value, setValue}:any){

  function StartAction() {
    setStart(true);
  }
    return (
        <>{!start && (
            <div className="w-[98%] h-36 shadow-md shadow-lime-400 bg-lime-100 rounded-md flex justify-between px-10 py-2 border-solid border-2 border-gray-200">
              <div className="flex flex-wrap justify-around flex-1 items-center max-w-full">
                <div>
                  <h1 className=" text-xl font-bold">Maquina I</h1>
                  <div className="flex justify-between">
                    <span className="">Equipe I</span>
                    <input type="radio" value="Equipe I" />
                  </div>
                  <div className="flex justify-between">
                    <span className="">Equipe II</span>
                    <input type="radio" value="Equipe II" />
                  </div>
                  <div className="flex justify-between">
                    <span className="">Equipe III</span>
                    <input type="radio" value="Equipe III" />
                  </div>
                  <div className="flex justify-between">
                    <span className="">Equipe IV</span>
                    <input type="radio" value="Equipe IV" />
                  </div>
                </div>
                <div className="w-[60%]">
                  <select
                    className="h-7 w-full border-solid border-2 border-gray-400 rounded-md outline-none"
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  >
                    <option> - </option>
                    <option>I00345 - Areia média 20 kg</option>
                    <option>I00345 - Areia média 15 kg</option>
                    <option>I00345 - Areia média 30 kg</option>
                    <option>I00345 - Areia média 20 kg Personalizada</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-8 ml-6 items-center">
                <button
                  className="w-24 h-24 bg-lime-600 text-white text-2xl rounded-md button-click buttons mx-3"
                  onClick={() => StartAction()}
                >
                  Start
                </button>
              </div>
            </div>
          )}</>
    );
}