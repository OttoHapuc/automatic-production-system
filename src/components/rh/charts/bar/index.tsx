"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  BarElement,
} from "chart.js";

export default function BarChart() {
  Chart.register(CategoryScale, LinearScale, Title, Tooltip, BarElement);

  const data = {
    labels: ["Aprovados", "filtragem M", "Rejeitados"],
    datasets: [
      {
        label: "Valores",
        data: [16, 6, 27],
        backgroundColor: [
          "#36eb51",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderColor: [
          "#36eb51",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="h-full w-auto flex justify-center items-center p-1 shadow-md shadow-gray-600 rounded-lg">
      <Bar data={data} />
    </div>
  );
}
