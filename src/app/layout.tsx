import SideBar from "@/components/sideBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-blue-800 flex justify-center p-2">
        <main className="bg-white h-[97vh] w-full rounded-md"><div className="h-[97vh] flex">
      <SideBar />
      <main className="bg-lime-400 w-full rounded-r-md flex justify-center items-center">
      <div className="w-[98%] h-[94vh] bg-white flex flex-col justify-around items-center rounded-md overflow-hidden shadow-inner shadow-lime-600">
        {children}</div>
    </main>
    </div></main>
      </body>
    </html>
  );
}
