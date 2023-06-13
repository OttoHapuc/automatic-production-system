"use client";

import ProductionQuantity from "../utils/productionQuantity";

export default function Non_StopShift({ finishShift }: any) {
  return (
    <>
      <div className="space-y-2 py-2 flex-1 min-w-[374px]">
        <div className="flex flex-col gap-2">
          <span className="">Equipe I</span>
          <span className="">Item: I00345 - Areia média 20 kg</span>
        </div>
      </div>
      {finishShift && <ProductionQuantity />}
    </>
  );
}
