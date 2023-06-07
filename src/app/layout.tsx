import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-blue-800 flex justify-center p-2">
        <main className="bg-white h-[97vh] w-full rounded-md">{children}</main>
      </body>
    </html>
  );
}
