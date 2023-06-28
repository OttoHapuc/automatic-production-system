"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js";

export default function DoughnutChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Reprovados", "Compatível", "Aptos"],
    datasets: [
      {
        label: "Quantidade",
        data: [12, 3, 5],
        backgroundColor: [
          "rgba(255, 169, 188, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(100, 255, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgb(100, 255, 86)",
        ],
        borderWidth: 3,
      },
    ],
  };
  return (
    <div className="h-60 w-80 p-3 flex justify-center items-center p-1 shadow-md shadow-gray-600 rounded-full">
      <Doughnut data={data} />
    </div>
  );
}
