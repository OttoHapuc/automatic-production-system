import BestCandidates from "@/components/rh/bestCandidates";
import BarChart from "@/components/rh/charts/bar";
import DoughnutChart from "@/components/rh/charts/doughnutChart";
import VacancyArea from "@/components/rh/vacancyArea";

export default function RH() {
  return (
    <div className="flex w-full h-full p-4 space-x-2">
      <VacancyArea />

      <div className="sm:w-4/5 sm:h-full flex flex-col justify-around items-center p-4">
        <div className="w-full flex flex-wrap sm:h-2/5 justify-around items-center p-2">
          <BarChart />
          <DoughnutChart />
        </div>
        <div className="p-2 sm:h-3/5 flex flex-col shadow-md shadow-gray-600 rounded-lg gap-1 w-full">
          <div className="ml-4 py-2"><h1>Melhores candidatos</h1></div>
          <div>
            <div className="w-full flex justify-around py-2"> <p>Nome</p> <p>Compatibilidade</p> <p>Cidade</p> <p>Negativo</p></div>
          <BestCandidates />
          </div>
        </div>
      </div>
    </div>
  );
}
