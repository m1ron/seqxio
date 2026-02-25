import "../globals.css";
import Sidebar from "../components/common/Sidebar";
import Navigation from "../components/common/Navigation";
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Dashboard | seqxio",
  description: "Powering Smarter, Cleaner Cities",
  openGraph: {
    title: "Dashboard | seqxio",
    description:
      "Powering Smarter, Cleaner Cities",
    images: "/dashboard-meta-img",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <div className="flex gap-5 py-3 px-4 w-full h-screen">
          <Sidebar />
          <div className="space-y-4 flex-1 w-full lg:ps-[280px]">
            <Navigation />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
