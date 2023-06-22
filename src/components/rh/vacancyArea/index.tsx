import Vacancies from "./vacancies";

export default function VacancyArea() {
  return (
    <div className="sm:w-1/5 sm:flex">
      <div className="w-full p-4 flex flex-col justify-around items-center">
        <Vacancies />
      </div>
      <div className="h-4/5 border-solid border-r-2 border-gray-300 self-center" />
    </div>
  );
}
