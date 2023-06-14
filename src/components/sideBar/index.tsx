"use client";
import Image from "next/image";
import LogoAB from "../../../public/grupoabareias.png";
import { useState } from "react";

export default function SideBar() {
  const [sideBar, setSideBar] = useState(true);
  return (
    <>
      <div
        onClick={() => setSideBar(!sideBar)}
        className={`ml-4 group flex flex-col items-center  drop-shadow-lg fixed left-0 ${
          sideBar ? "left-44" : "top-4"
        } duration-300`}
      >
        <button className="flex items-center rounded-b-md group-nav bg-lime-400 font-semibold text-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`w-6 h-6 m-2 ${sideBar && "rotate-180"}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
            />
          </svg>
        </button>
      </div>
      <aside
        className={`h-[97vh] transition-all duration-300 ${
          sideBar ? "w-72" : "w-0"
        } bg-white rounded-l-md flex flex-col justify-between pt-2 pb-7 shadow-inner shadow-lime-300`}
      >
        <div>
          <Image
            src={LogoAB}
            width={150}
            height={150}
            className="ml-4"
            alt="Picture of the author"
          />
        </div>
        <nav className="h-[80vh] gap-2">
          <a
            href="#"
            className="ml-4 group flex flex-col items-center  drop-shadow-lg"
          >
            <button className="w-full h-12 flex items-center rounded-l-md group-nav bg-lime-400 font-semibold text-blue-800">
              <span className="pl-4">Produção</span>
            </button>
          </a>
        </nav>
        <div className="flex flex-col">
          <a href="#" className="ml-4 group flex flex-col items-center">
            <div className="w-52 border-solid border-t border-zinc-300"></div>
            <button className="w-full h-12 flex items-center rounded-l-md group-nav">
              <span className="pl-4">Sair</span>
            </button>
            <div className="w-52 border-solid border-t border-zinc-300"></div>
          </a>
          <div></div>
        </div>
      </aside>
    </>
  );
}
