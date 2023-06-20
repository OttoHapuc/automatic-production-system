"use client";
import Image from "next/image";
import LogoAB from "../../../public/grupoabareias.png";
import { useState } from "react";
import Link from "next/link";

export default function SideBar() {
  const [sideBar, setSideBar] = useState(false);
  const environments = [
    { name: "Login", reference: "/signin" },
    { name: "RH", reference: "/rh" },
    { name: "Controle", reference: "/bagged/baggedData" },
    { name: "Produção", reference: "/bagged/production" },
  ];
  return (
    <div
      className={`${sideBar && "backdrop-blur w-full"} absolute transition-all`}
    >
      <div
        onClick={() => setSideBar(!sideBar)}
        className={`ml-4 group flex flex-col items-center drop-shadow-lg fixed left-0 rounded-full ${
          sideBar ? "left-44 top-6" : "top-8 left-[1.2rem]"
        } duration-300`}
      >
        <button className="flex items-center bg-lime-400 font-semibold text-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-6 h-6 m-2 ${sideBar && "rotate-180"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
            />
          </svg>
        </button>
      </div>
      <aside
        className={`h-[97vh] duration-300 ${
          sideBar ? "w-72" : "w-0"
        } bg-white rounded-l-md flex flex-col justify-between pt-2 pb-7 shadow-md shadow-lime-400`}
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
        <nav className="h-[80vh] space-y-3 pt-6">
          {environments.map((e) => (
            <Link
              onClick={() => setSideBar(!sideBar)}
              key={e.name}
              href={e.reference}
              className="ml-4 flex flex-col items-center  shadow-md shadow-lime-400"
            >
              <button className="w-full py-4 flex items-center rounded-l-md font-semibold text-blue-800 hover:bg-lime-400">
                <span className="pl-4">{e.name}</span>
              </button>
            </Link>
          ))}
        </nav>
        <div className="flex flex-col">
          <a href="#" className="ml-4 group flex flex-col items-center">
            <div className="w-52 border-solid border-t border-zinc-300"></div>
            <button className="w-full h-12 flex items-center rounded-l-md">
              <span className="pl-4">Sair</span>
            </button>
            <div className="w-52 border-solid border-t border-zinc-300"></div>
          </a>
          <div></div>
        </div>
      </aside>
    </div>
  );
}
