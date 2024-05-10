import Sidebar from "../_components/Sidebar";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="h-full w-full">{children}</div>
      </body>
    </html>
  );
}