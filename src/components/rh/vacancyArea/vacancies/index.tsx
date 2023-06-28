import Image from "next/image";

export default function Vacancies({ element }: any) {
  return (
    <div className="max-w-xs py-2 px-6 rounded-lg shadow-md shadow-gray-600 flex flex-col gap-2">
      <h1 className="text-2xl font-bold">{element.title}</h1>
      <div className="rounded-lg">
        <Image width={500} height={500} src={element.img} alt={element.title} />
      </div>
      <p className="text-lg font-bold">
        {
          element.agent.filter((obj: any) => Object.values(obj)[0] === true)
            .length
        }{" "}
        / {element.agent.length}
      </p>
      {element.agent.map((e: any) => (
        <span
          className={`${e[Object.keys(e)[0]] ? "text-zinc-400" : ""} font-bold`}
          key={Object.keys(e)[0]}
        >
          {Object.keys(e)[0]}
        </span>
      ))}
    </div>
  );
}
