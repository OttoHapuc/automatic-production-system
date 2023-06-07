export default function SideBar() {
  return (
    <aside className="h-[97vh] w-72 bg-white rounded-l-md flex flex-col justify-between pt-2 pb-7 shadow-inner shadow-lime-300">
      <div className="h-[80vh] pt-4 gap-2">
        <a href="#" className="ml-4 group flex flex-col items-center  drop-shadow-lg">
          <button className="w-full h-12 flex items-center rounded-l-md group-nav bg-lime-400 font-semibold text-blue-800">
            <span className="pl-4">Produção</span>
          </button>
        </a>
      </div>
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
  );
}
