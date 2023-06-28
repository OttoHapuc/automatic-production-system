import BestCandidates from "@/components/rh/bestCandidates";
import DoughnutChart from "@/components/rh/charts/doughnutChart";
import VacancyArea from "@/components/rh/vacancyArea";

export default function RH() {
  return (
    <div className="w-full h-full overflow-auto sm:p-4 sm:flex sm:gap-2">
      <VacancyArea />
      <div className="w-full sm:h-full p-2 sm:overflow-auto sm:shadow-inner sm:shadow-gray-600 sm:rounded-md">
        <div className="w-full flex flex-wrap justify-around">
          <DoughnutChart />
        </div>
        <BestCandidates />
      </div>
    </div>
  );
}
