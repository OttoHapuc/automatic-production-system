import Candidate from "./candidate";

export default function BestCandidates() {
  return (
    <div className="w-full flex flex-wrap g-4 p-2 shadow-md shadow-gray-600 rounded-lg flex-1 bg-lime-400">
      <h1 className="text-xl font-bold">Melhores candidatos</h1>
      <div className="w-full sm:h-[17.3rem] sm:overflow-auto flex flex-wrap items-baseline p-4 shadow-inner shadow-gray-600 rounded-lg gap-2 bg-white">
        <Candidate /><Candidate /><Candidate /><Candidate /><Candidate /><Candidate />
      </div>
    </div>
  );
}
