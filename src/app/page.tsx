import Main from "@/components/production";
import SideBar from "@/components/sideBar";

export const metadata = {
  title: "Ensacado",
  description: "sistema de produção",
};
export default function Home() {
  return (
    <div className="h-[97vh] flex">
      <SideBar />
      <Main />
    </div>
  );
}
