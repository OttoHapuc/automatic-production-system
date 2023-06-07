export default function Non_StopShift({ finish }: any) {
  return (
    <>
      <div className="space-y-2 border-solid border-r-2 border-gray-400 pr-6 mr-6 flex-1">
        <h1 className=" text-xl font-bold">Maquina I</h1>
        <div className="flex flex-col gap-2">
          <span className="">Equipe I</span>
          <span className="">Item: I00345 - Areia média 20 kg</span>
        </div>
      </div>
      {finish && (
        <div className="flex flex-col gap-2">
          <span className="">Quantidade</span>
          <input
            type="number"
            placeholder="Qauntidade produzida"
            className="h-7 w-full border-solid border-2 border-gray-400 rounded-md outline-none"
          />
        </div>
      )}
    </>
  );
}
