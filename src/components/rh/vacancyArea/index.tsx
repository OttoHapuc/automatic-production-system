import Vacancies from "./vacancies";

export default function VacancyArea() {
  const vacancies = [
    {
      id: 1,
      title: "Almoxarifado",
      img: "https://img.freepik.com/fotos-gratis/natureza-morta-da-representacao-da-cadeia-de-suprimentos_23-2150172328.jpg?w=900&t=st=1687433524~exp=1687434124~hmac=68c7e7d7afed5e50628b9e4a30222816c87801ddf25385ce14283985ba6e4633",
      agent: [{"treinee": true}, {"Almoxarife II": true}, {"Gestor de Stock": false}],
    },
    {
      id: 1,
      title: "Aux Contador",
      img: "https://img.freepik.com/fotos-gratis/homem-de-financas-empresariais-calculando-numeros-de-orcamento-faturas-e-consultor-financeiro-trabalhando_1423-119.jpg?w=740&t=st=1687952762~exp=1687953362~hmac=c24b97b8c1756fb6804e184313ff75c917af0ce72cdeb78c406d948813981cee",
      agent: [{"treinee": false}],
    }
  ];
  return (
    <aside className="p-2 max-w-sm sm:h-full sm:overflow-auto flex flex-wrap justify-around items-center gap-3 sm:shadow-inner sm:shadow-gray-600 sm:rounded-md">
      {vacancies.map((e)=><Vacancies key={e.id} element={e}/>)}
    </aside>
  );
}
