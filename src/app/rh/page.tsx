import BarChart from "@/components/rh/charts/bar";
import SideBar from "@/components/rh/sideBar";

export default function RH() {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div>
        <BarChart />
      </div>
    </div>
  );
}
