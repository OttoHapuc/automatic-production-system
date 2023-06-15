"use client";

import ProductionQuantity from "../utils/productionQuantity";

export default function Non_StopShift({
  finishShift,
  chooseTeam,
  itemSelected,
}: any) {
  return (
    <div className="space-y-2 pb-2">
      <div className="flex-1 min-w-[300px]">
        <div className="flex flex-col gap-2">
          <span className="">{chooseTeam}</span>
          <span className="">{itemSelected}</span>
        </div>
      </div>
      {finishShift && <ProductionQuantity />}
    </div>
  );
}
