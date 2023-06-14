import { redirect } from "next/navigation";


export const metadata = {
  title: "null",
  description: "sistema de produção",
};
export default function Home() {

  const Production = true;

  if(Production) redirect('/bagged/production')

  return <> olá </>;
}
