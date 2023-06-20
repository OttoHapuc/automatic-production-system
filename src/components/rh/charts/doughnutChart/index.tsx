"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js";

export default function DoughnutChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Formação", "Habilitação", "Reside no Vale", "Carro próprio"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 169, 188, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(192, 75, 171, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgb(255, 207, 86)",
          "rgba(192, 75, 171, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };
  return (
    <div className="h-full w-auto flex justify-center items-center p-1 shadow-md shadow-gray-600 rounded-lg">
      <Doughnut data={data} />
    </div>
  );
}
