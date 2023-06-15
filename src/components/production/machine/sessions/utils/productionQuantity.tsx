export default function ProductionQuantity() {
  return (
    <div className="flex flex-col gap-2 min-w-[300px]">
      <span className="">Quantidade</span>
      <input
        type="number"
        placeholder="Qauntidade produzida"
        className="h-7 w-full border-solid border-2 border-gray-400 rounded-md outline-none"
      />
    </div>
  );
}
