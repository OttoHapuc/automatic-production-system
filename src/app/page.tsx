//import { redirect } from "next/navigation";

import DashBoar from "@/components/DashBoar";

export const metadata = {
  title: "DashBoard",
  description: "Sessão inicial",
};

export default function Home() {
  return <DashBoar />;
}
