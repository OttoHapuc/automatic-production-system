'use client'

import Machine from "./machine";

export default function Main() {
  return (
    <main className="bg-lime-400 w-full rounded-r-md flex justify-center items-center">
      <div className="w-[98%] h-[94vh] bg-white flex flex-col justify-around items-center rounded-md overflow-hidden shadow-inner shadow-lime-600">
        <Machine />
      </div>
    </main>
  );
}
