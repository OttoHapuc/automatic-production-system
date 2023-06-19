export default function ProductionQuantity({quantityProduced,setQuantityProduced}:any) {
  return (
    <div className="flex flex-col gap-2 min-w-[300px]">
      <span className="">Quantidade</span>
      <input
        type="number"
        value={quantityProduced}
        placeholder="Qauntidade produzida"
        className="h-7 w-full border-solid border-2 border-gray-400 rounded-md outline-none"
        onChange={(e)=> setQuantityProduced(e.target.value)}
      />
    </div>
  );
}
