"use client";

import ProductionQuantity from "../utils/productionQuantity";

export default function ShiftWithStop({
  finishShift,
  reasonForTheStop,
  setReasonForTheStop,
  quantityProduced,
  setQuantityProduced,
}: any) {
  return (
    <div className="py-2 flex-1 min-w-[300px] space-y-2">
      <div className="flex flex-col gap-2">
        <span className="">Equipe I</span>
        <input
          type="text"
          value={reasonForTheStop}
          placeholder="Motivo da Parada"
          className="h-7 w-full border-solid border-2 border-gray-400 rounded-md outline-none"
          onChange={(e) => setReasonForTheStop(e.target.value)}
        />
      </div>
      {finishShift && (
        <ProductionQuantity
          quantityProduced={quantityProduced}
          setQuantityProduced={setQuantityProduced}
        />
      )}
    </div>
  );
}
