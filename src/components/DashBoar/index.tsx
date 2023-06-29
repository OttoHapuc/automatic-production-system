import { MdProductionQuantityLimits } from "react-icons/md";
import Link from "next/link";

export default function DashBoar() {
  return (
    <div className="w-full h-full flex flex-wrap justify-around items-center shadow-inner shadow-zinc-600">
      <Link
        href="https://www.abareias.com.br/"
        target="_blank"
        className="text-5xl shadow-md shadow-zinc-600 p-4 rounded-xl"
      >
        WebSite<span className="text-lime-400">AB</span>
      </Link>
      <Link
        href="/conectab"
        className="text-5xl shadow-md shadow-zinc-600 p-4 rounded-xl"
      >
        CONECTA<span className="text-lime-400">AB</span>
      </Link>
      <Link
        href="/"
        className="text-5xl shadow-md shadow-zinc-600 p-2 rounded-xl"
      >
        <div className="flex w-full justify-around bg-lime-400 p-8 rounded-lg">Produtos <MdProductionQuantityLimits className="" /></div>
        <div className="w-full flex text-lg justify-around pb-2">
          <p className="hover:bg-lime-400 rounded-b-lg p-2 shadow-md shadow-zinc-600">(11) 3208-0406</p>
          <p className="hover:bg-lime-400 rounded-b-lg p-2 shadow-md shadow-zinc-600">(12) 3641-2580</p>
        </div>
      </Link>
    </div>
  );
}
