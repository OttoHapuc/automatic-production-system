import Machine from "../../../components/production/machine";

export const metadata = {
  title: "Ensacado",
  description: "sistema de produção",
};

export default function Production() {
  const machines = [
    {
      name: "Maquina I",
    },
    {
      name: "Maquina II",
    },
    {
      name: "Maquina III",
    },
    {
      name: "Maquina IV",
    },
  ];
  return (
    <div className="h-full w-full py-4 flex flex-wrap gap-3 justify-center overflow-auto">
      {machines.map((e) => (
        <Machine key={e.name} machine={e} />
      ))}
    </div>
  );
}
