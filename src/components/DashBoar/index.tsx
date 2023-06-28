import { MdProductionQuantityLimits } from "react-icons/md";
import Link from "next/link";

export default function DashBoar() {
  return (
    <div className="w-full h-full flex flex-wrap justify-around items-center">
      <Link href="/conectab" className="text-5xl shadow-md shadow-zinc-600 p-4 rounded-lg">CONECTA<span className="text-lime-400">AB</span></Link>
      <Link href="#" className="flex text-5xl shadow-md shadow-zinc-600 p-4 rounded-lg">Produtos <MdProductionQuantityLimits className="mx-6"/></Link>
    </div>
  );
}
