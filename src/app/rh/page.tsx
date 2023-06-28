import BestCandidates from "@/components/rh/bestCandidates";
import DoughnutChart from "@/components/rh/charts/doughnutChart";
import VacancyArea from "@/components/rh/vacancyArea";

export default function RH() {
  return (
    <div className="w-full h-full overflow-auto py-4 sm:flex">
      <aside className="p-2 max-w-sm flex flex-wrap justify-around items-center gap-3">
        <VacancyArea />
      </aside>
      <div className="w-full p-2 sm:overflow-auto">
        <div className="w-full p-2 flex flex-wrap justify-around">
          <DoughnutChart />
        </div>
        <BestCandidates />
      </div>
    </div>
  );
}
