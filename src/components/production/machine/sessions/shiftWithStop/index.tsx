'use client'

import ProductionQuantity from "../utils/productionQuantity";

export default function ShiftWithStop({ finishShift }: any) {
  return (
    <>
      <div className="py-2 flex-1 min-w-[375px]">
        <div className="flex flex-col gap-2">
          <span className="">Equipe I</span>
          <input
            type="text"
            placeholder="Motivo da Stop"
            className="h-7 w-full border-solid border-2 border-gray-400 rounded-md outline-none"
          />
        </div>
      </div>
      {finishShift && <ProductionQuantity />}
    </>
  );
}
