export default function Candidate() {
  return (
    <div className="w-full flex flex-wrap gap-4 justify-between items-center p-4 shadow-md shadow-gray-600 rounded-lg">
      <h1>Rafael Noronha</h1>
      <div className="flex flex-col items-center gap-1">
        <p>compativilidade</p>
        <div className="w-24 h-1 bg-zinc-400 rounded-full">
          <div className="w-[86%] h-1 bg-blue-800 rounded-full"></div>
        </div>
      </div>
      <p>Pindamonhangaba</p>
      <p>veículo</p>
    </div>
  );
}
